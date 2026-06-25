import { createFileRoute } from '@tanstack/react-router';

type CatNewsItem = {
  title: string;
  summary: string;
  href: string;
  datetime: string;
};

type NewsLocale = 'zh' | 'en' | 'ru' | 'es';

type NewsFeed = {
  source: string;
  url: string;
};

const YAHOO_CAT_NEWS_FEED =
  'https://feeds.finance.yahoo.com/rss/2.0/headline?s=CAT&region=US&lang=en-US';
const RECENT_NEWS_DAYS = 45;

function googleNewsFeed(query: string, hl: string, gl: string, ceid: string) {
  const url = new URL('https://news.google.com/rss/search');
  url.searchParams.set('q', query);
  url.searchParams.set('hl', hl);
  url.searchParams.set('gl', gl);
  url.searchParams.set('ceid', ceid);
  return url.toString();
}

const CAT_NEWS_FEEDS: Record<NewsLocale, NewsFeed[]> = {
  zh: [
    {
      source: 'Google News Global',
      url: googleNewsFeed('global mining equipment construction machinery when:30d', 'en-US', 'US', 'US:en'),
    },
    {
      source: 'Google News Global',
      url: googleNewsFeed('underground mining equipment raise boring machinery when:45d', 'en-US', 'US', 'US:en'),
    },
    {
      source: 'Google News Global',
      url: googleNewsFeed('heavy machinery mining equipment manufacturers when:45d', 'en-US', 'US', 'US:en'),
    },
    {
      source: 'Google News Global',
      url: googleNewsFeed('global mining equipment construction machinery export when:30d', 'en-US', 'US', 'US:en'),
    },
    {
      source: 'Google News Global',
      url: googleNewsFeed('mining equipment Africa Latin America Middle East when:45d', 'en-US', 'US', 'US:en'),
    },
    {
      source: 'Google News Global',
      url: googleNewsFeed('Caterpillar Komatsu Epiroc Sandvik mining equipment when:30d', 'en-US', 'US', 'US:en'),
    },
    {
      source: 'Google News Global',
      url: googleNewsFeed('overseas construction machinery mining equipment export when:45d', 'en-US', 'US', 'US:en'),
    },
  ],
  en: [
    {
      source: 'Google News',
      url: googleNewsFeed('mining equipment construction machinery manufacturing when:30d', 'en-US', 'US', 'US:en'),
    },
    {
      source: 'Google News',
      url: googleNewsFeed('Caterpillar Komatsu construction mining equipment when:30d', 'en-US', 'US', 'US:en'),
    },
    {
      source: 'Yahoo Finance',
      url: YAHOO_CAT_NEWS_FEED,
    },
  ],
  ru: [
    {
      source: 'Google News',
      url: googleNewsFeed('горное оборудование строительная техника машиностроение when:45d', 'ru', 'RU', 'RU:ru'),
    },
  ],
  es: [
    {
      source: 'Google News',
      url: googleNewsFeed('equipos mineros maquinaria construcción fabricación when:45d', 'es', 'ES', 'ES:es'),
    },
  ],
};

const RELEVANCE_TERMS: Record<NewsLocale, string[]> = {
  zh: [
    '矿山',
    '矿业',
    '矿机',
    '煤机',
    '工程机械',
    '装备',
    '制造',
    '挖掘机',
    '智能矿山',
    '重工',
    '矿山装备',
    '工程机械',
    '重型机械',
    'mining equipment',
    'mobile mining equipment',
    'underground mining vehicles',
    'construction machinery',
    'heavy machinery',
    'earthmoving equipment',
    'mine fleet',
    'manufacturer',
    'caterpillar',
    'komatsu',
    'epiroc',
    'sandvik',
    'liebherr',
  ],
  en: [
    'caterpillar',
    'komatsu',
    'deere',
    'mining',
    'equipment',
    'construction',
    'machinery',
    'manufacturing',
    'industrial',
  ],
  ru: ['горн', 'шахт', 'оборуд', 'техник', 'машиностро', 'промышлен'],
  es: ['minería', 'minero', 'equipos', 'maquinaria', 'construcción', 'fabricación', 'industrial'],
};

const EXCLUDED_NEWS_TERMS: Record<NewsLocale, string[]> = {
  zh: [
    'etf',
    '股票',
    '股价',
    '基金',
    '融资融券',
    '贷款',
    '港股',
    'bitcoin',
    'crypto',
    'cryptocurrency',
    'blockchain',
    'beer',
    'diageo',
  ],
  en: ['stock', 'shares', 'dividend', 'rating', 'analyst', 'cramer', 'zacks', 'invested', 'wall street estimates'],
  ru: ['акци', 'дивиденд', 'аналитик'],
  es: ['acciones', 'dividendo', 'analista', 'bolsa'],
};

const SUMMARY_FALLBACKS: Record<NewsLocale, string> = {
  zh: '来自全球实时新闻源的矿山装备与制造业市场动态。',
  en: 'Live market and industry update for mining equipment and manufacturing.',
  ru: 'Оперативная новость о рынке горного оборудования и машиностроения.',
  es: 'Actualización en tiempo real sobre equipos mineros y manufactura.',
};

function decodeXml(value: string) {
  return value
    .replaceAll('<![CDATA[', '')
    .replaceAll(']]>', '')
    .replace(/&nbsp;|&#160;|&#xA0;/gi, ' ')
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&#x27;', "'");
}

function stripHtml(value: string) {
  return decodeXml(value).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function trimText(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength).trim()}...`;
}

function readTag(itemXml: string, tagName: string) {
  const match = itemXml.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i'));
  return match ? decodeXml(match[1] ?? '').trim() : '';
}

function parseRss(xml: string, locale: NewsLocale): CatNewsItem[] {
  const itemMatches = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];

  return itemMatches
    .map((itemXml) => {
      const title = stripHtml(readTag(itemXml, 'title'));
      const source = stripHtml(readTag(itemXml, 'source'));
      const rawSummary = stripHtml(readTag(itemXml, 'description'));
      const summary = trimText(
        rawSummary || (source ? `${source} · ${SUMMARY_FALLBACKS[locale]}` : SUMMARY_FALLBACKS[locale]),
        220,
      );
      const href = readTag(itemXml, 'link') || '#';
      const pubDate = readTag(itemXml, 'pubDate');
      const timestamp = Date.parse(pubDate);
      const datetime = Number.isNaN(timestamp)
        ? new Date().toISOString()
        : new Date(timestamp).toISOString();

      return { title, summary, href, datetime };
    })
    .filter((item) => item.title && item.href);
}

function getLocaleFromRequest(request: Request): NewsLocale {
  const url = new URL(request.url);
  const locale = url.searchParams.get('locale');

  if (locale === 'en' || locale === 'ru' || locale === 'es') {
    return locale;
  }

  return 'zh';
}

async function fetchFeed(feed: NewsFeed, locale: NewsLocale) {
  const response = await fetch(feed.url, {
    headers: {
      accept: 'application/rss+xml, application/xml, text/xml',
      'user-agent': 'Mozilla/5.0 Renyi Machinery News Fetcher',
    },
  });

  if (!response.ok) {
    throw new Error(`${feed.source} returned ${response.status}`);
  }

  const xml = await response.text();
  return parseRss(xml, locale);
}

function normalizeTitle(title: string) {
  return title
    .toLocaleLowerCase()
    .replace(/\s+-\s+.+$/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function isRecentNewsItem(item: CatNewsItem) {
  const timestamp = Date.parse(item.datetime);

  if (Number.isNaN(timestamp)) {
    return false;
  }

  const now = Date.now();
  const maxAge = RECENT_NEWS_DAYS * 24 * 60 * 60 * 1000;

  return timestamp <= now + 24 * 60 * 60 * 1000 && now - timestamp <= maxAge;
}

function isRelevantNewsItem(item: CatNewsItem, locale: NewsLocale) {
  const haystack = `${item.title} ${item.summary}`.toLocaleLowerCase();
  const terms = RELEVANCE_TERMS[locale] ?? RELEVANCE_TERMS.zh;
  const excludedTerms = EXCLUDED_NEWS_TERMS[locale] ?? [];

  return (
    terms.some((term) => haystack.includes(term.toLocaleLowerCase())) &&
    !excludedTerms.some((term) => haystack.includes(term.toLocaleLowerCase()))
  );
}

function prepareNewsItems(items: CatNewsItem[], locale: NewsLocale) {
  const seen = new Set<string>();

  return items
    .filter((item) => isRecentNewsItem(item) && isRelevantNewsItem(item, locale))
    .sort((a, b) => Date.parse(b.datetime) - Date.parse(a.datetime))
    .filter((item) => {
      const key = normalizeTitle(item.title);

      if (!key || seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    })
    .slice(0, 8);
}

async function handler({ request }: { request: Request }) {
  const locale = getLocaleFromRequest(request);
  const feeds = CAT_NEWS_FEEDS[locale] ?? CAT_NEWS_FEEDS.zh;
  const errors: string[] = [];
  const feedResults = await Promise.allSettled(feeds.map((feed) => fetchFeed(feed, locale)));
  const rawItems: CatNewsItem[] = [];

  feedResults.forEach((result, index) => {
    const feed = feeds[index];

    if (result.status === 'fulfilled') {
      rawItems.push(...result.value);
      return;
    }

    errors.push(result.reason instanceof Error ? result.reason.message : `Failed to load ${feed?.source ?? 'feed'}`);
  });

  const items = prepareNewsItems(rawItems, locale);

  if (items.length) {
    return Response.json(
      {
        source: [...new Set(feeds.map((feed) => feed.source))].join(', '),
        symbol: 'NYSE:CAT',
        locale,
        updatedAt: new Date().toISOString(),
        recentDays: RECENT_NEWS_DAYS,
        items,
      },
      {
        headers: {
          'cache-control': 'no-store',
        },
      },
    );
  }

  return Response.json(
    {
      source: feeds.map((feed) => feed.source).join(', '),
      symbol: 'NYSE:CAT',
      locale,
      updatedAt: new Date().toISOString(),
      items: [],
      error: errors.length
        ? errors.join('; ')
        : `No recent relevant news found in the last ${RECENT_NEWS_DAYS} days`,
    },
    {
      status: 502,
      headers: {
        'cache-control': 'no-store',
      },
    },
  );
}

export const Route = createFileRoute('/api/cat-news')({
  server: {
    handlers: {
      GET: handler,
    },
  },
});
