import { ReactNode } from 'react'

export default function TodosLayout(
  props: Record<'children' | 'addTodoForm' | 'modal', ReactNode>
) {
  return (
    <>
      {props.children}
      {props.addTodoForm}
      {props.modal}
    </>
  )
}
