import { createFileRoute } from '@tanstack/react-router';
import { SiteMirrorPage } from '@/views/site-mirror-page';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return <SiteMirrorPage path="/" />;
}
