import { Todo } from '@prisma/client'
import { prisma } from './prisma'
import { revalidatePath } from 'next/cache'
import { Route } from 'next'

export { type Todo }

export function getTodos(): Promise<Todo[]> {
  return prisma.todo.findMany()
}

export function getTodo(id: string): Promise<Todo> {
  return prisma.todo.findFirstOrThrow({ where: { id } })
}

export async function addTodo(data: Pick<Todo, 'title' | 'description'>) {
  await prisma.todo.create({
    data,
  })
}

export function revalidateTodos() {
  revalidatePath('/todo' satisfies Route)
}
