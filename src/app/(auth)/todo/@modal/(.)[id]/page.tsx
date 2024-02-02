import { getTodo } from '@/todo'
import { styled } from 'styled-system/jsx'

export default async function TodoModal({
  params,
}: {
  params: { id: string }
}) {
  const todo = await getTodo(params.id)

  return (
    <styled.div display={'grid'} gap={2}>
      <styled.h2>title: {todo.title}</styled.h2>
      <styled.p>description: {todo.description}</styled.p>
    </styled.div>
  )
}
