import { getTodo } from '@/todo'
import { Checkbox, Form, Icons, Input } from '@/components/ui'
import { deleteTodoAction, updateTodoAction } from '../@modal/(.)[id]/_actions'
import { SubmitButton, SubmitIconButton } from '@/components/shared'
import { getActiveSession } from '@/auth'
import { TodoPageProps } from '../@modal/(.)[id]/page'

export default async function Todo({ params }: TodoPageProps) {
  const { userId } = await getActiveSession()
  const todo = await getTodo(userId, params.id)

  return (
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
        px={4}
      >
        <Icons.Trash />
        削除
      </SubmitIconButton>
      <SubmitButton gridColumn={'1/-1'}>更新</SubmitButton>
    </Form>
  )
}

export { generateMetadata } from '../@modal/(.)[id]/page'
