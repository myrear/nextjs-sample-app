import { getTodo } from '@/todo'
import { styled } from '../../../../../styled-system/jsx'

export default async function Todo({ params }: { params: { id: string } }) {
  const todo = await getTodo(params.id)

  return (
    <styled.div display={'grid'} gap={2}>
      <styled.h2>aaaa: {todo.title}</styled.h2>
      <styled.p>bbbbbb: {todo.description}</styled.p>
    </styled.div>
  )
}
