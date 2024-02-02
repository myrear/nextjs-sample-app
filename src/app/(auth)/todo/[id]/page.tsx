import { getTodo } from '@/todo'
import { Checkbox, Form, Input } from '@/components/ui'
import { updateTodoAction } from '../@modal/(.)[id]/_actions'
import { SubmitButton } from '@/components/shared'
import { getActiveSession } from '@/auth'

export default async function Todo({ params }: { params: { id: string } }) {
  const { userId } = await getActiveSession()
  const todo = await getTodo(userId, params.id)

  return (
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
  )
}
