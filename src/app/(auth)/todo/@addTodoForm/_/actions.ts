'use server'

import { addTodo, revalidateTodos } from '@/todo'
import * as v from 'valibot'

const formSchema = v.object({
  title: v.string(),
  description: v.string(),
})

export async function addTodoAction(formData: FormData) {
  await addTodo(v.parse(formSchema, Object.fromEntries(formData.entries())))
  revalidateTodos()
}
