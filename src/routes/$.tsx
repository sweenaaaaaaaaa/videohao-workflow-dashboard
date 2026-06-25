import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { getRenyiCanonicalNewsPath } from '@/lib/site-pages';
import { SiteMirrorPage } from '@/views/site-mirror-page';

export const Route = createFileRoute('/$')({
  component: MirrorCatchAllPage,
});

function MirrorCatchAllPage() {
  const params = Route.useParams() as { _splat?: string };
  const path = params._splat ? `/${params._splat}` : '/';
  const canonicalPath = getRenyiCanonicalNewsPath(path) ?? path;

  useEffect(() => {
    if (canonicalPath === path) {
      return;
    }

    window.history.replaceState(null, '', canonicalPath);
  }, [canonicalPath, path]);

  return <SiteMirrorPage path={canonicalPath} />;
}
