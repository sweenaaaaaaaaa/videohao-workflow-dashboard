import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { networkInterfaces } from 'node:os';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { Readable } from 'node:stream';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';
import serverEntry from '../dist/server/server.js';

const rootDir = resolve(fileURLToPath(new URL('..', import.meta.url)));
const clientDir = join(rootDir, 'dist/client');
const port = Number(process.env.PORT || process.argv[2] || 3000);
const host = process.env.HOST || '0.0.0.0';

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.mp4': 'video/mp4',
  '.otf': 'font/otf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
};

const gzipExtensions = new Set(['.css', '.html', '.js', '.json', '.map', '.svg', '.txt', '.xml']);

function getStaticFile(pathname) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    return null;
  }

  const normalizedPath = normalize(decodedPath).replace(/^(\.\.(?:\/|\\|$))+/, '');
  const candidate = join(clientDir, normalizedPath);
  const resolvedCandidate = resolve(candidate);

  if (resolvedCandidate !== clientDir && !resolvedCandidate.startsWith(clientDir + sep)) {
    return null;
  }

  if (!existsSync(resolvedCandidate)) {
    return null;
  }

  const stats = statSync(resolvedCandidate);
  if (!stats.isFile()) {
    return null;
  }

  return { filePath: resolvedCandidate, stats };
}

function parseByteRange(rangeHeader, size) {
  if (!rangeHeader?.startsWith('bytes=')) {
    return null;
  }

  const ranges = rangeHeader.slice('bytes='.length).split(',');
  if (ranges.length !== 1) {
    return { invalid: true };
  }

  const [startText, endText] = ranges[0].split('-');
  if (startText === '' && endText === '') {
    return { invalid: true };
  }

  let start;
  let end;

  if (startText === '') {
    const suffixLength = Number(endText);
    if (!Number.isInteger(suffixLength) || suffixLength <= 0) {
      return { invalid: true };
    }

    start = Math.max(size - suffixLength, 0);
    end = size - 1;
  } else {
    start = Number(startText);
    end = endText === '' ? size - 1 : Number(endText);

    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < start) {
      return { invalid: true };
    }

    end = Math.min(end, size - 1);
  }

  if (start >= size) {
    return { invalid: true };
  }

  return { start, end };
}

function sendStaticFile(req, res, staticFile) {
  const ext = extname(staticFile.filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  const cacheControl = ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable';
  const byteRange = req.method === 'GET' ? parseByteRange(req.headers.range, staticFile.stats.size) : null;
  const acceptsGzip = req.headers['accept-encoding']?.includes('gzip');
  const shouldGzip = req.method === 'GET' && !byteRange && acceptsGzip && gzipExtensions.has(ext);

  res.setHeader('Content-Type', contentType);
  res.setHeader('Accept-Ranges', 'bytes');
  res.setHeader('Cache-Control', cacheControl);
  res.setHeader('Vary', 'Accept-Encoding');

  if (byteRange?.invalid) {
    res.statusCode = 416;
    res.setHeader('Content-Range', `bytes */${staticFile.stats.size}`);
    res.setHeader('Content-Length', 0);
    res.end();
    return;
  }

  if (byteRange) {
    const contentLength = byteRange.end - byteRange.start + 1;
    res.statusCode = 206;
    res.setHeader('Content-Range', `bytes ${byteRange.start}-${byteRange.end}/${staticFile.stats.size}`);
    res.setHeader('Content-Length', contentLength);
    createReadStream(staticFile.filePath, { start: byteRange.start, end: byteRange.end }).pipe(res);
    return;
  }

  res.statusCode = 200;
  if (shouldGzip) {
    res.setHeader('Content-Encoding', 'gzip');
    createReadStream(staticFile.filePath).pipe(createGzip()).pipe(res);
    return;
  }

  res.setHeader('Content-Length', staticFile.stats.size);

  if (req.method === 'HEAD') {
    res.end();
    return;
  }

  createReadStream(staticFile.filePath).pipe(res);
}

function makeRequest(req) {
  const url = new URL(req.url || '/', `http://${req.headers.host || `${host}:${port}`}`);
  const headers = new Headers();

  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(key, item);
      }
    } else if (value !== undefined) {
      headers.set(key, value);
    }
  }

  const init = {
    method: req.method,
    headers,
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req;
    init.duplex = 'half';
  }

  return new Request(url, init);
}

async function sendSsrResponse(req, res) {
  const response = await serverEntry.fetch(makeRequest(req));
  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (req.method === 'HEAD' || !response.body) {
    res.end();
    return;
  }

  Readable.fromWeb(response.body).pipe(res);
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || `${host}:${port}`}`);
    const staticFile = getStaticFile(url.pathname);

    if (staticFile) {
      sendStaticFile(req, res, staticFile);
      return;
    }

    await sendSsrResponse(req, res);
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    }
    res.end('Internal Server Error');
  }
});

function getLanUrls() {
  return Object.values(networkInterfaces())
    .flat()
    .filter((networkInterface) => {
      return networkInterface?.family === 'IPv4' && !networkInterface.internal;
    })
    .map((networkInterface) => `http://${networkInterface.address}:${port}/`);
}

server.listen(port, host, () => {
  if (host === '0.0.0.0') {
    console.log(`Renyi preview server ready`);
    console.log(`Local: http://127.0.0.1:${port}/`);
    for (const url of getLanUrls()) {
      console.log(`LAN: ${url}`);
    }
    return;
  }

  console.log(`Renyi preview server ready at http://${host}:${port}/`);
});
