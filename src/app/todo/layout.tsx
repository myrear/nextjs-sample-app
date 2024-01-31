import { ReactNode } from 'react'

export default function TodosLayout(props: Record<string, ReactNode>) {
  return (
    <>
      {props.children}
      {props.addTodoForm}
      {props.modal}
    </>
  )
}
