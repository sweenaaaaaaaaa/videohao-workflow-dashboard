/// <reference types="vite/client" />
import { Outlet, Scripts, createRootRoute, useLocation } from '@tanstack/react-router';
import globalCss from '@/styles/global.css?raw';
import restoreCss from '@/styles/renyi-restore.css?raw';
import { SiteRuntime } from '@/components/site-runtime';
import { getDocumentMetadata, RENYI_COMPANY_NAME, RENYI_SITE_ORIGIN } from '@/lib/site-pages';

const gaMeasurementId = /^G-[A-Z0-9]+$/i.test(import.meta.env.VITE_GA_MEASUREMENT_ID || '')
  ? import.meta.env.VITE_GA_MEASUREMENT_ID
  : '';
const baiduAnalyticsId = /^[a-f0-9]{16,64}$/i.test(import.meta.env.VITE_BAIDU_ANALYTICS_ID || '')
  ? import.meta.env.VITE_BAIDU_ANALYTICS_ID
  : '';

export const Route = createRootRoute({
  component: RootDocument,
});

function RootDocument() {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  const { title, description, keywords, bodyClass, bodyStyle, htmlLang, canonicalUrl, alternates, structuredData } =
    getDocumentMetadata(pathname);
  const socialImageUrl = `${RENYI_SITE_ORIGIN}/renyi/renyi-banner-poster-zh-1920x832.jpg`;
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${RENYI_SITE_ORIGIN}/#organization`,
        name: RENYI_COMPANY_NAME,
        url: `${RENYI_SITE_ORIGIN}/`,
        logo: `${RENYI_SITE_ORIGIN}/favicon.png`,
        email: 'info@csrenyi.com',
      },
      {
        '@type': 'WebSite',
        '@id': `${RENYI_SITE_ORIGIN}/#website`,
        url: `${RENYI_SITE_ORIGIN}/`,
        name: RENYI_COMPANY_NAME,
        inLanguage: htmlLang,
        publisher: { '@id': `${RENYI_SITE_ORIGIN}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        inLanguage: htmlLang,
        isPartOf: { '@id': `${RENYI_SITE_ORIGIN}/#website` },
        about: { '@id': `${RENYI_SITE_ORIGIN}/#organization` },
      },
      ...structuredData,
    ],
  }).replaceAll('<', '\\u003c');

  return (
    <html lang={htmlLang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="applicable-device" content="pc,mobile" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#d99a00" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        {import.meta.env.VITE_GOOGLE_SITE_VERIFICATION ? (
          <meta name="google-site-verification" content={import.meta.env.VITE_GOOGLE_SITE_VERIFICATION} />
        ) : null}
        {import.meta.env.VITE_BING_SITE_VERIFICATION ? (
          <meta name="msvalidate.01" content={import.meta.env.VITE_BING_SITE_VERIFICATION} />
        ) : null}
        {import.meta.env.VITE_BAIDU_SITE_VERIFICATION ? (
          <meta name="baidu-site-verification" content={import.meta.env.VITE_BAIDU_SITE_VERIFICATION} />
        ) : null}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={RENYI_COMPANY_NAME} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImageUrl} />
        <meta property="og:locale" content={htmlLang.replace('-', '_')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImageUrl} />
        <link rel="canonical" href={canonicalUrl} />
        {alternates.map((alternate) => (
          <link key={alternate.hrefLang} rel="alternate" hrefLang={alternate.hrefLang} href={alternate.href} />
        ))}
        <link rel="stylesheet" href="/home/styles/core/site-bootstrap.css" />
        <link rel="stylesheet" href="/home/styles/core/site-animate.min.css" />
        <link rel="stylesheet" href="/home/styles/core/site-font-awesome.min.css" />
        <link rel="stylesheet" href="/home/styles/core/site-swiper.min.css" />
        <link rel="stylesheet" href="/home/styles/core/site-magnific-popup.css" />
        <link rel="stylesheet" href="/home/styles/core/site-iconfont.css" />
        <link rel="stylesheet" href="/home/styles/core/site-base.css" />
        <link rel="stylesheet" href="/home/styles/core/site-main.css" />
        <link rel="stylesheet" href="/home/styles/core/site-contact-form.css" />
        <link rel="shortcut icon" href="/favicon.png?v=renyi-20260426" />
        <link rel="apple-touch-icon" href="/favicon.png?v=renyi-20260426" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{title}</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
        {gaMeasurementId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaMeasurementId}',{anonymize_ip:true});`,
              }}
            />
          </>
        ) : null}
        {baiduAnalyticsId ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `window._hmt=window._hmt||[];(function(){var h=document.createElement('script');h.src='https://hm.baidu.com/hm.js?${baiduAnalyticsId}';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(h,s)})();`,
            }}
          />
        ) : null}
        {bodyStyle ? <style>{`body { ${bodyStyle} }`}</style> : null}
        <style>{globalCss}</style>
        <style>{restoreCss}</style>
        <link rel="icon" href="/favicon.png?v=renyi-20260426" />
      </head>
      <body className={bodyClass}>
        <Outlet />
        <SiteRuntime />
        <Scripts />
      </body>
    </html>
  );
}
