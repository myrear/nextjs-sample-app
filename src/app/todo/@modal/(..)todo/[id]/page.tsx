import { getTodo } from '@/todo'
import { styled } from '../../../../../../styled-system/jsx'

export default async function TodoModal({
  params,
}: {
  params: { id: string }
}) {
  const todo = await getTodo(params.id)

  return (
    <styled.div
      bg="rgba(0,0,0,0.5)"
      position={'fixed'}
      top="0"
      left={'0'}
      bottom={'0'}
      right={'0'}
      display={'grid'}
      placeItems={'center'}
    >
      <styled.div bg="white" rounded={'md'} m="20" display={'grid'} gap={2}>
        <styled.h2>title: {todo.title}</styled.h2>
        <styled.p>description: {todo.description}</styled.p>
      </styled.div>
    </styled.div>
  )
}
