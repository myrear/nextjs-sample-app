import { SubmitButton, SubmitIconButton } from '@/components/shared'
import {
  Checkbox,
  Dialog,
  Form,
  IconButton,
  Icons,
  Input,
} from '@/components/ui'
import { getTodo } from '@/todo'
import { Box } from 'styled-system/jsx'
import { deleteTodoAction, updateTodoAction } from './_actions'
import { getActiveSession } from '@/auth'
import { type Metadata } from 'next'

export type TodoPageProps = {
  params: {
    id: string
  }
}

export default async function TodoModal({ params }: TodoPageProps) {
  const { userId } = await getActiveSession()
  const todo = await getTodo(userId, params.id)

  return (
    <Box px={4} pt={10} pb={4}>
      <Form
        display="grid"
        gridTemplateColumns={'1fr auto auto'}
        gap={2}
        action={updateTodoAction.bind(null, params.id)}
      >
        <Input defaultValue={todo.title} name="title" />
        <Checkbox defaultChecked={todo.completed} name="completed">
          終わった
        </Checkbox>
        <SubmitIconButton
          title="削除"
          variant={'ghost'}
          colorPalette={'red'}
          formAction={deleteTodoAction.bind(null, params.id)}
        >
          <Icons.Trash />
        </SubmitIconButton>
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

export async function generateMetadata({
  params,
}: TodoPageProps): Promise<Metadata> {
  const { userId } = await getActiveSession()
  const { title } = await getTodo(userId, params.id)
  return {
    title,
  }
}
