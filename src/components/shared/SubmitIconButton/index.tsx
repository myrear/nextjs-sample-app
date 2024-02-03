'use client'

import { ButtonProps, IconButton } from '@/components/ui'
import { useFormStatus } from 'react-dom'

export function SubmitIconButton(props: ButtonProps) {
  const { pending } = useFormStatus()

  return <IconButton type="submit" disabled={pending} {...props} />
}
