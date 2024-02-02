import { FormLabel, Input } from '@/components/ui'
import { CreateTodoForm, SubmitButton } from './_/components'

export default function CreateTodoFormPage() {
  return (
    <CreateTodoForm>
      <FormLabel>
        title
        <Input name="title" />
      </FormLabel>

      <SubmitButton>追加</SubmitButton>
    </CreateTodoForm>
  )
}
