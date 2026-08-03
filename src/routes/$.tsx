import { createFileRoute, notFound, redirect } from '@tanstack/react-router';
import { getRenyiCanonicalNewsPath, loadSitePage } from '@/lib/site-pages';
import { SiteMirrorPage } from '@/views/site-mirror-page';

export const Route = createFileRoute('/$')({
  loader: async ({ params }) => {
    const path = params._splat ? `/${params._splat}` : '/';
    const canonicalPath = getRenyiCanonicalNewsPath(path) ?? path;

    if (canonicalPath !== path) {
      throw redirect({ href: canonicalPath, statusCode: 301 });
    }

    const page = await loadSitePage(canonicalPath);

    if (!page) {
      throw notFound();
    }

    return { canonicalPath, page };
  },
  component: MirrorCatchAllPage,
});

function MirrorCatchAllPage() {
  const { canonicalPath, page } = Route.useLoaderData();

  return <SiteMirrorPage page={page} path={canonicalPath} />;
}
