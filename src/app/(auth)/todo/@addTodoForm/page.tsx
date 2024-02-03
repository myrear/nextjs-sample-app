import { FormLabel, Input } from '@/components/ui'
import { CreateTodoForm, SubmitButton } from './_/components'

export default function CreateTodoFormPage() {
  return (
    <CreateTodoForm
      display="grid"
      gridTemplateColumns={'1fr auto'}
      alignItems={'end'}
    >
      <FormLabel>
        タイトル
        <Input name="title" />
      </FormLabel>

      <SubmitButton>追加</SubmitButton>
    </CreateTodoForm>
  )
}
