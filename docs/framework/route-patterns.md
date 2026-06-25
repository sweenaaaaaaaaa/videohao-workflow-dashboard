# TanStack Router Patterns
## Basic Route
```tsx
// src/routes/about.tsx
import { createFileRoute } from "@tanstack/react-router"
import { AboutPage } from "@/client/views/about-page"
export const Route = createFileRoute("/about")({
  component: AboutPage,
})
```
Route files should be thin — import a view component and export the route.
## createFileRoute Options
```tsx
export const Route = createFileRoute("/posts/$id")({
  component: PostPage,
  loader: async ({ params }) => { /* SSR data loading */ },
  errorComponent: PostError,
  pendingComponent: PostLoading,
  beforeLoad: async ({ context }) => { /* auth guards, redirects */ },
})
```
| Option | Purpose |
|--------|---------|
| `component` | The React component to render |
| `loader` | Async data loading function (runs on server for SSR) |
| `errorComponent` | Component shown when loader or component throws |
| `pendingComponent` | Component shown while loader is pending |
| `beforeLoad` | Runs before loader — use for auth checks, redirects |
## Dynamic Routes (Params)
File: `src/routes/posts.$id.tsx` → URL: `/posts/:id`
```tsx
import { createFileRoute, useParams } from "@tanstack/react-router"
export const Route = createFileRoute("/posts/$id")({
  component: PostPage,
})
function PostPage() {
  const { id } = useParams({ from: "/posts/$id" })
  // id is typed as string
  return <div>Post {id}</div>
}
```
## Search Params
```tsx
import { createFileRoute, useSearch } from "@tanstack/react-router"