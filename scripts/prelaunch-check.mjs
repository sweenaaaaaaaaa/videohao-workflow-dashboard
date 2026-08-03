import { spawn } from 'node:child_process';

const PORT = Number(process.env.PRELAUNCH_PORT || 4179);
const BASE_URL = `http://127.0.0.1:${PORT}`;
const PUBLIC_ORIGIN = 'https://csrenyi.com';
const errors = [];

function check(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

async function mapLimit(items, concurrency, callback) {
  let index = 0;

  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (index < items.length) {
        const item = items[index];
        index += 1;
        await callback(item);
      }
    }),
  );
}

async function waitForServer() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(`${BASE_URL}/`);
      if (response.ok) {
        return;
      }
    } catch {
      // The production server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  throw new Error(`Production server did not start at ${BASE_URL}`);
}

function getTagContent(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || '';
}

const server = spawn(process.execPath, ['scripts/serve-preview.mjs'], {
  cwd: process.cwd(),
  env: {
    ...process.env,
    HOST: '127.0.0.1',
    PORT: String(PORT),
  },
  stdio: ['ignore', 'pipe', 'pipe'],
});

let serverError = '';
server.stderr.on('data', (chunk) => {
  serverError += chunk.toString();
});

try {
  await waitForServer();

  const sitemapResponse = await fetch(`${BASE_URL}/sitemap.xml`);
  const sitemap = await sitemapResponse.text();
  const publicUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const pages = [];
  const titles = new Map();
  const internalReferences = new Set();
  const mediaReferences = new Set();

  function addInternalReference(reference) {
    if (!reference.startsWith('/') || reference.startsWith('//')) {
      return;
    }

    const pathname = reference.split('#')[0].split('?')[0];
    if (!pathname) {
      return;
    }

    internalReferences.add(pathname);
    if (/\.(?:avif|gif|jpe?g|png|svg|webp|ico|mp4|webm)$/i.test(pathname)) {
      mediaReferences.add(pathname);
    }
  }

  check(sitemapResponse.ok, 'sitemap.xml did not return 200');
  check(publicUrls.length > 0, 'sitemap.xml contains no URLs');

  await mapLimit(publicUrls, 16, async (publicUrl) => {
    const localUrl = publicUrl.replace(PUBLIC_ORIGIN, BASE_URL);
    const response = await fetch(localUrl);
    const html = await response.text();
    const title = getTagContent(html, /<title>([^<]+)<\/title>/);
    const description = getTagContent(html, /<meta name="description" content="([^"]+)"/);
    const canonical = getTagContent(html, /<link rel="canonical" href="([^"]+)"/);
    const h1Count = (html.match(/<h1\b/gi) || []).length;
    const titlePages = titles.get(title) || [];

    titlePages.push(publicUrl);
    titles.set(title, titlePages);
    pages.push({ publicUrl, html });

    check(response.status === 200, `${publicUrl} returned ${response.status}`);
    check(Boolean(title), `${publicUrl} has no title`);
    check(Boolean(description), `${publicUrl} has no meta description`);
    check(canonical.startsWith(PUBLIC_ORIGIN), `${publicUrl} has an invalid canonical URL`);
    check((html.match(/rel="alternate"/g) || []).length >= 2, `${publicUrl} has incomplete hreflang links`);
    check(h1Count === 1, `${publicUrl} has ${h1Count} H1 elements`);
    check(html.includes('property="og:title"'), `${publicUrl} has no Open Graph title`);
    check(html.includes('name="twitter:card"'), `${publicUrl} has no Twitter card`);
    check(html.includes('application/ld+json'), `${publicUrl} has no structured data`);
    check(!/ytxingye\.com|Yantai Xingye|烟台兴业|snapshot\.local/.test(html), `${publicUrl} contains legacy-site output`);

    for (const match of html.matchAll(/(?:href|src|poster|data-src)="([^"]+)"/g)) {
      addInternalReference(match[1]);
    }

    for (const match of html.matchAll(/srcset="([^"]+)"/g)) {
      for (const candidate of match[1].split(',')) {
        const reference = candidate.trim().split(/\s+/)[0];
        if (reference) {
          addInternalReference(reference);
        }
      }
    }

    for (const match of html.matchAll(/url\((?:['"])?([^)'"]+)(?:['"])?\)/g)) {
      addInternalReference(match[1].trim());
    }
  });

  for (const [title, titlePages] of titles) {
    check(Boolean(title), 'One or more pages have an empty title');
    check(titlePages.length === 1, `Duplicate title "${title}" on ${titlePages.join(', ')}`);
  }

  await mapLimit([...internalReferences], 20, async (pathname) => {
    const response = await fetch(`${BASE_URL}${pathname}`);
    check(response.status < 400, `${pathname} returned ${response.status}`);

    if (mediaReferences.has(pathname) && response.ok) {
      const contentType = response.headers.get('content-type') || '';
      const contentLength = Number(response.headers.get('content-length') || 0);
      const responseBytes = contentLength || (await response.arrayBuffer()).byteLength;
      check(
        contentType.startsWith('image/') || contentType.startsWith('video/'),
        `${pathname} has invalid media content type ${contentType || '(empty)'}`,
      );
      check(responseBytes > 0, `${pathname} has an empty media response`);
    }
  });

  const missingPageResponse = await fetch(`${BASE_URL}/__prelaunch_missing_page__`, { redirect: 'manual' });
  check(missingPageResponse.status === 404, `Unknown pages return ${missingPageResponse.status} instead of 404`);

  const legacyPageResponse = await fetch(`${BASE_URL}/category/xingyexinwen`, { redirect: 'manual' });
  check(legacyPageResponse.status === 301, `Legacy pages return ${legacyPageResponse.status} instead of 301`);
  check(
    legacyPageResponse.headers.get('location') === '/category/renyixinwen',
    'Legacy news redirect has an unexpected destination',
  );

  const healthResponse = await fetch(`${BASE_URL}/healthz`);
  check(healthResponse.status === 200, `Health check returned ${healthResponse.status}`);
  check((await healthResponse.json()).status === 'ok', 'Health check payload is invalid');

  const homeResponse = await fetch(`${BASE_URL}/`);
  const requiredHeaders = [
    'content-security-policy',
    'permissions-policy',
    'referrer-policy',
    'x-content-type-options',
    'x-frame-options',
  ];
  for (const header of requiredHeaders) {
    check(Boolean(homeResponse.headers.get(header)), `Missing production header: ${header}`);
  }

  const robotsResponse = await fetch(`${BASE_URL}/robots.txt`);
  check(
    robotsResponse.headers.get('cache-control') === 'public, max-age=3600, must-revalidate',
    'robots.txt has an unsafe cache policy',
  );

  const homeHtml = await homeResponse.text();
  const scriptPath =
    homeHtml.match(/<script[^>]+src="(\/assets\/[^"]+\.js)"/)?.[1] ||
    homeHtml.match(/import\("(\/assets\/[^"]+\.js)"\)/)?.[1];
  check(Boolean(scriptPath), 'Could not locate the production JavaScript bundle');
  if (scriptPath) {
    const assetResponse = await fetch(`${BASE_URL}${scriptPath}`, {
      headers: { 'accept-encoding': 'br' },
    });
    check(assetResponse.headers.get('cache-control')?.includes('immutable'), 'Hashed assets are not cached immutably');
    check(assetResponse.headers.get('content-encoding') === 'br', 'Brotli compression is not enabled for JavaScript');
  }

  const contactHtml = pages.find(({ publicUrl }) => publicUrl === `${PUBLIC_ORIGIN}/lianxiwomen`)?.html || '';
  check(contactHtml.includes('class="wpcf7-form'), 'Contact inquiry form is missing');
  check(contactHtml.includes('action="https://wa.me/'), 'Contact inquiry form is not connected to WhatsApp');

  const privacyPages = pages.filter(({ publicUrl }) => publicUrl.includes('/faluwenjian/1361'));
  for (const { publicUrl, html } of privacyPages) {
    check(!/Shopify|payment gateway|支付网关|checkout_token/.test(html), `${publicUrl} contains obsolete privacy text`);
  }

  console.log(
    JSON.stringify(
      {
        pages: publicUrls.length,
        internalReferences: internalReferences.size,
        mediaReferences: mediaReferences.size,
        duplicateTitles: [...titles.values()].filter((titlePages) => titlePages.length > 1).length,
        errors: errors.length,
      },
      null,
      2,
    ),
  );

  if (errors.length > 0) {
    console.error(errors.slice(0, 50).map((error) => `- ${error}`).join('\n'));
    process.exitCode = 1;
  }
} catch (error) {
  console.error(error);
  if (serverError) {
    console.error(serverError.trim());
  }
  process.exitCode = 1;
} finally {
  server.kill('SIGTERM');
}
