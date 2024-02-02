import { FormLabel, Input } from '@/components/ui'
import { CreateTodoForm, SubmitButton } from './_/components'

export default function CreateTodoFormPage() {
  return (
    <CreateTodoForm>
      <FormLabel>title</FormLabel>
      <Input name="title" />

      <FormLabel>description</FormLabel>
      <Input name="description" />

      <SubmitButton>submit</SubmitButton>
    </CreateTodoForm>
  )
}
