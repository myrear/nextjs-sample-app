'use client'

import { Dialog } from '@/components/ui'
import { DialogProps } from '@/components/ui/Dialog'
import { useRouter } from 'next/navigation'

export function TodoDialog(props: Dialog.DialogProps) {
  const router = useRouter()
  const back: DialogProps['onOpenChange'] = ({ open }) => open || router.back()

  return <Dialog.Root defaultOpen onOpenChange={back} {...props} />
}
