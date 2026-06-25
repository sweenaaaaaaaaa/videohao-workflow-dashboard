# tRPC v11 Patterns
## Architecture
This project uses tRPC v11 with the **Options Proxy** pattern (via `createTRPCOptionsProxy`), NOT `createTRPCReact`.
Two objects are exported from `@/client/trpc`:
- `trpc` — Options Proxy: provides `.queryOptions()`, `.mutationOptions()`, `.queryKey()`, `.pathKey()` for use with TanStack Query hooks
- `trpcClient` — Vanilla client: provides `.query()`, `.mutate()` for direct calls (rarely needed in components)
- `queryClient` — Shared `QueryClient` instance
The provider in `__root.tsx` is just `QueryClientProvider` — no `trpc.Provider` needed.
## Client-Side: Queries
```tsx
import { useQuery } from "@tanstack/react-query"
import { trpc } from "@/client/trpc"
export function TodoList() {
  const todosQuery = useQuery(trpc.todo.list.queryOptions())
  if (todosQuery.isLoading) return <div>Loading...</div>
  if (todosQuery.isError) return <div>Error: {todosQuery.error.message}</div>
  return (
    <ul>
      {todosQuery.data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
```
With input:
```tsx
const todoQuery = useQuery(trpc.todo.getById.queryOptions({ id: "123" }))
```
Disable with `skipToken`:
```tsx
import { skipToken } from "@tanstack/react-query"
const query = useQuery(trpc.todo.getById.queryOptions(id ? { id } : skipToken))
```
## Client-Side: Mutations
```tsx
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { trpc } from "@/client/trpc"
import { toast } from "sonner"
export function CreateTodo() {
  const queryClient = useQueryClient()
  const createMutation = useMutation(trpc.todo.create.mutationOptions({
    onSuccess: () => {