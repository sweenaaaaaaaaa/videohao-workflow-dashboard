import type { SitePageData } from '@/data/site-page-types';

export function SiteMirrorPage(props: { page: SitePageData; path: string }) {
  return (
    <div
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: props.page.bodyHtml }}
    />
  );
}
