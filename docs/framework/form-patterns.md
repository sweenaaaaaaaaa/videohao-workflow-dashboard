# Form & Toast Patterns
## Form: react-hook-form + Zod v4 + shadcn + tRPC
Complete example of a create/edit form integrated with tRPC mutation:
```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { trpc } from "@/client/trpc"
import { toast } from "sonner"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// 1. Define schema with Zod v4
const createItemSchema = z.object({
  name: z.string().min(1, { error: "Name is required" }),
  email: z.email({ error: "Invalid email" }),
  amount: z.number().positive({ error: "Must be positive" }),
})
type CreateItemInput = z.infer<typeof createItemSchema>
// 2. Component
export function CreateItemForm({ onSuccess }: { onSuccess?: () => void }) {
  const queryClient = useQueryClient()
  // 3. Setup form with Zod resolver
  const form = useForm<CreateItemInput>({
    resolver: zodResolver(createItemSchema),
    defaultValues: {
      name: "",
      email: "",
      amount: 0,
    },
  })
  // 4. Setup tRPC mutation
  const createMutation = useMutation(
    trpc.item.create.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: trpc.item.list.queryKey() })
        toast.success("Item created!")
        form.reset()
        onSuccess?.()
      },
      onError: (error) => {
        toast.error(error.message)