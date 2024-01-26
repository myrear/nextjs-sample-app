import { ReactNode } from 'react'

export default function TodosLayout(
  props: Record<'children' | 'modal', ReactNode>
) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  )
}
