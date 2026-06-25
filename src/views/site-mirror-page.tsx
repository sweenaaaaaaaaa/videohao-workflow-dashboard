import { NotFound } from '@/components/not-found';
import { getSitePage, patchRenyiHtml } from '@/lib/site-pages';

export function SiteMirrorPage(props: { path: string }) {
  const page = getSitePage(props.path);

  if (!page) {
    return <NotFound />;
  }

  return (
    <div
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: patchRenyiHtml(page.bodyHtml, props.path) }}
    />
  );
}
