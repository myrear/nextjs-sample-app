import { SubmitButton } from '@/components/shared'
import {
  Button,
  Checkbox,
  Dialog,
  Form,
  IconButton,
  Icons,
  Input,
} from '@/components/ui'
import { getTodo } from '@/todo'
import { Box } from 'styled-system/jsx'
import { updateTodoAction } from './_actions'
import { getActiveSession } from '@/auth'

export default async function TodoModal({
  params,
}: {
  params: { id: string }
}) {
  const { userId } = await getActiveSession()
  const todo = await getTodo(userId, params.id)

  return (
    <Box px={4} pt={10} pb={4}>
      <Form
        display="grid"
        gridTemplateColumns={'1fr auto'}
        gap={2}
        action={updateTodoAction.bind(null, params.id)}
      >
        <Input defaultValue={todo.title} name="title" />
        <Checkbox defaultChecked={todo.completed} name="completed">
          終わった
        </Checkbox>
        <SubmitButton gridColumn={'1/-1'}>更新</SubmitButton>
      </Form>
      <Dialog.CloseTrigger asChild position="absolute" right="1" top="1">
        <IconButton size="sm" variant="ghost">
          <Icons.X />
        </IconButton>
      </Dialog.CloseTrigger>
    </Box>
  )
}
