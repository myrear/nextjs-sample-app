'use server'

import { getActiveSession } from '@/auth'
import { addTodo, revalidateTodos } from '@/todo'
import * as v from 'valibot'

const formSchema = v.object({
  title: v.string(),
})

export async function addTodoAction(formData: FormData) {
  const { userId } = await getActiveSession()
  await addTodo(
    userId,
    v.parse(formSchema, Object.fromEntries(formData.entries()))
  )
  revalidateTodos()
}
