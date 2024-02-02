import { TodoDialog } from './_components'
import { Dialog } from '@/components/ui'
import { ReactNode } from 'react'

export default function TodoModalLayout({
  children,
}: Record<'children', ReactNode>) {
  return (
    <TodoDialog>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>{children}</Dialog.Content>
      </Dialog.Positioner>
    </TodoDialog>
  )
}
