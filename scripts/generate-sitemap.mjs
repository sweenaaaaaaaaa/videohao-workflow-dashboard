import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_ORIGIN = 'https://csrenyi.com';
const LOCALE_PREFIXES = ['', '/en', '/ru', '/es'];
const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'public', 'sitemap.xml');

const CORE_PATHS = [
  '/',
  '/guanyuxingye/',
  '/chanpinzhanshi/',
  '/fuwuzhichi/',
  '/jiaruwomen/',
  '/lianxiwomen/',
  '/category/renyixinwen/',
  '/category/xinwenzhongxin/',
  '/category/xinwenzhongxin/jishuzhishi/',
  '/category/xinwenzhongxin/xingyedongtai/',
];

const PRODUCT_PATHS = [
  '/zuanjixilie/',
  '/zuanji-01/',
  '/zuanji-02/',
  '/zuanji-03/',
  '/zuanji-04/',
  '/zuanji-05/',
  '/zuanji-06/',
  '/yougangxuangua/',
  '/yougang-01/',
  '/yougang-02/',
  '/fuxuanjixilie/',
  '/xuanji-01/',
  '/jiegouxilie/',
  '/jiegou-01/',
  '/jiegou-03/',
  '/jiegou-05/',
  '/zhuanyongxilie/',
  '/zhuanyong-02/',
  '/zhuanyong-03/',
  '/zhuanyong-04/',
  '/anlizhanshi/',
  '/anlizhanshi/case-01/',
  '/anlizhanshi/case-02/',
  '/anlizhanshi/case-03/',
  '/anlizhanshi/case-04/',
  '/anlizhanshi/case-05/',
  '/anlizhanshi/case-06/',
  '/anlizhanshi/case-07/',
  '/anlizhanshi/case-08/',
  '/anlizhanshi/case-09/',
  '/anlizhanshi/case-10/',
];

const LEGAL_PATHS = ['/faluwenjian/1361/', '/faluwenjian/1362/', '/faluwenjian/1363/'];

function normalizePath(pathname) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  const cleanPath = pathname.split('#')[0]?.split('?')[0] || '/';
  const normalized = cleanPath.replace(/\/+/g, '/');

  return normalized.endsWith('/') ? normalized : `${normalized}/`;
}

function publicPath(pathname) {
  const normalized = normalizePath(pathname);

  return normalized === '/' ? normalized : normalized.replace(/\/$/, '');
}

function withLocale(pathname, prefix) {
  if (!prefix) {
    return pathname;
  }

  return pathname === '/' ? `${prefix}/` : `${prefix}${pathname}`;
}

function localizedPaths(paths) {
  return paths.flatMap((pathname) => LOCALE_PREFIXES.map((prefix) => normalizePath(withLocale(pathname, prefix))));
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

async function getNewsArticlePaths() {
  const source = await readFile(path.join(PROJECT_ROOT, 'src', 'lib', 'renyi-news-pages.ts'), 'utf8');
  return [...source.matchAll(/href:\s*'([^']*\/xinwenzhongxin\/renyixinwen\/\d+)'/g)].map((match) =>
    normalizePath(match[1]),
  );
}

async function main() {
  const paths = new Set([
    ...localizedPaths(CORE_PATHS),
    ...localizedPaths(PRODUCT_PATHS),
    ...localizedPaths(LEGAL_PATHS),
    ...(await getNewsArticlePaths()),
  ]);
  const sortedPaths = [...paths].sort((left, right) => left.localeCompare(right));
  const urls = sortedPaths
    .map((pathname) => `  <url><loc>${escapeXml(`${SITE_ORIGIN}${publicPath(pathname)}`)}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await writeFile(OUTPUT_FILE, xml);
  console.log(`Generated ${OUTPUT_FILE} with ${sortedPaths.length} URLs`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
