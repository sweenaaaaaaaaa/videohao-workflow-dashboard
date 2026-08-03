import { spawn } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.REDIRECT_AUDIT_PORT || 4181);
const baseUrl = `http://127.0.0.1:${port}`;
const publicOrigin = 'https://csrenyi.com';

function publicPath(pathname) {
  return pathname === '/' ? '/' : pathname.replace(/\/$/, '');
}

async function waitForServer() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      if ((await fetch(`${baseUrl}/healthz`)).ok) return;
    } catch {
      // The production server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Redirect audit server did not start at ${baseUrl}`);
}

const source = await readFile(path.join(projectRoot, 'src/data/site-pages.generated.ts'), 'utf8');
const declaration = 'export const sitePages: Record<string, SitePageData> = ';
const objectStart = source.indexOf(declaration) + declaration.length;
const objectEnd = source.lastIndexOf('\n};');

if (objectStart < declaration.length || objectEnd < objectStart) {
  throw new Error('Unable to read the legacy page snapshot index');
}

const paths = Object.keys(JSON.parse(source.slice(objectStart, objectEnd + 2)));
const server = spawn(process.execPath, ['scripts/serve-preview.mjs'], {
  cwd: projectRoot,
  env: { ...process.env, HOST: '127.0.0.1', PORT: String(port) },
  stdio: 'ignore',
});

try {
  await waitForServer();
  const redirects = [];

  for (const pathname of paths) {
    const legacyPublicPath = publicPath(pathname);
    const response = await fetch(`${baseUrl}${legacyPublicPath}`, { redirect: 'manual' });
    const location = response.headers.get('location');
    if (response.status === 301 && location) {
      redirects.push({
        source: legacyPublicPath,
        destination: location,
        status: 301,
      });
    }
  }

  redirects.sort((left, right) => left.source.localeCompare(right.source));
  const csv = [
    'old_url,new_url,status',
    ...redirects.map(
      ({ source, destination, status }) =>
        `${publicOrigin}${source},${new URL(destination, publicOrigin).href},${status}`,
    ),
  ].join('\n');

  await mkdir(path.join(projectRoot, 'docs'), { recursive: true });
  await mkdir(path.join(projectRoot, 'public'), { recursive: true });
  await writeFile(path.join(projectRoot, 'docs/redirect-map.csv'), `${csv}\n`);
  await writeFile(path.join(projectRoot, 'public/redirects.json'), `${JSON.stringify(redirects, null, 2)}\n`);
  console.log(`Generated ${redirects.length} verified permanent redirects from ${paths.length} legacy paths`);
} finally {
  server.kill('SIGTERM');
}
