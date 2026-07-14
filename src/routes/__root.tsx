/// <reference types="vite/client" />
import { Outlet, Scripts, createRootRoute, useLocation } from '@tanstack/react-router';
import globalCss from '@/styles/global.css?raw';
import restoreCss from '@/styles/renyi-restore.css?raw';
import { TrpcProvider } from '@/client/trpc/provider';
import { SiteRuntime } from '@/components/site-runtime';
import { getDocumentMetadata } from '@/lib/site-pages';

export const Route = createRootRoute({
  component: RootDocument,
});

function RootDocument() {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  const { title, description, keywords, bodyClass, bodyStyle, htmlLang, canonicalUrl, alternates } =
    getDocumentMetadata(pathname);

  return (
    <html lang={htmlLang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="applicable-device" content="pc" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
        <meta content="IE=7" httpEquiv="X-UA-Compatible" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="referrer" content="no-referrer" />
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
        <link rel="stylesheet" href="/home/styles/core/site-classic-themes.min.css" />
        <link rel="stylesheet" href="/home/styles/core/site-select2.min.css" />
        <link rel="stylesheet" href="/home/styles/core/site-taxonomy-filters.min.css" />
        <link rel="stylesheet" href="/home/styles/core/site-contact-form.css" />
        <link rel="shortcut icon" href="/favicon.png?v=renyi-20260426" />
        <title>{title}</title>
        {bodyStyle ? <style>{`body { ${bodyStyle} }`}</style> : null}
        <style>{globalCss}</style>
        <style>{restoreCss}</style>
        <link rel="icon" href="/favicon.png?v=renyi-20260426" />
      </head>
      <body className={bodyClass}>
        <TrpcProvider>
          <Outlet />
          <SiteRuntime />
        </TrpcProvider>
        <Scripts />
      </body>
    </html>
  );
}
