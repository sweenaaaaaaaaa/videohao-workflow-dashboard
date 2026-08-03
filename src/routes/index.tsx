import { createFileRoute } from '@tanstack/react-router';
import { loadSitePage } from '@/lib/site-pages';
import { SiteMirrorPage } from '@/views/site-mirror-page';

export const Route = createFileRoute('/')({
  loader: async () => {
    const page = await loadSitePage('/');

    if (!page) {
      throw new Error('Home page snapshot is missing');
    }

    return { page };
  },
  component: Home,
});

function Home() {
  const { page } = Route.useLoaderData();

  return <SiteMirrorPage page={page} path="/" />;
}
