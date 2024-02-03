import { Todo } from '@prisma/client'
import { prisma } from './prisma'
import { revalidatePath } from 'next/cache'
import { Route } from 'next'

export { type Todo }

export async function getTodos(userId: string): Promise<Todo[]> {
  const { todos } = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    select: { todos: { orderBy: { createdAt: 'asc' } } },
  })
  return todos
}

export async function getTodo(userId: string, todoId: string): Promise<Todo> {
  return prisma.todo.findFirstOrThrow({
    where: {
      userId,
      id: todoId,
    },
  })
}

export async function addTodo(userId: string, { title }: Pick<Todo, 'title'>) {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      todos: { create: { title } },
    },
  })
}

export async function updateTodo(
  userId: string,
  todoId: string,
  { title, completed }: Partial<Pick<Todo, 'title' | 'completed'>>
) {
  await prisma.todo.update({
    where: {
      id: todoId,
      userId,
    },
    data: {
      title,
      completed,
    },
  })
}

export async function deleteTodo(userId: string, todoId: string) {
  await prisma.todo.delete({
    where: {
      userId,
      id: todoId,
    },
  })
}

export function revalidateTodos() {
  revalidatePath('/todo' satisfies Route)
}

export function revalidateTodo(id: string) {
  revalidatePath(`/todo/${id}` satisfies Route<`/todo/${typeof id}`>)
}
