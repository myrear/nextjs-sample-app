'use server'

import { getActiveSession } from '@/auth'
import { revalidateTodo, revalidateTodos, updateTodo } from '@/todo'
import { redirect } from 'next/navigation'
import * as v from 'valibot'

const formSchema = v.transform(
  v.object({
    title: v.string(),
    completed: v.optional(v.literal('on')),
  }),
  ({ title, completed }) => ({ title, completed: completed === 'on' })
)

export async function updateTodoAction(todoId: string, formData: FormData) {
  const { userId } = await getActiveSession()
  await updateTodo(
    userId,
    todoId,
    v.parse(formSchema, Object.fromEntries(formData.entries()))
  )
  revalidateTodo(todoId)
  revalidateTodos()
  // https://github.com/vercel/next.js/issues/54173#issuecomment-1876061117
  redirect('/todo')
}
