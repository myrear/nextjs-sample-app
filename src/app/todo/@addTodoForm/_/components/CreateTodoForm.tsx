'use client'

import { addTodoAction } from '@/app/todo/@addTodoForm/_/actions'
import { Form, FormProps } from '@/components/ui'
import { useRef } from 'react'

export function CreateTodoForm(props: FormProps) {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <Form
      ref={ref}
      action={async (formData) => {
        await addTodoAction(formData)
        ref.current?.reset()
      }}
      {...props}
    />
  )
}
