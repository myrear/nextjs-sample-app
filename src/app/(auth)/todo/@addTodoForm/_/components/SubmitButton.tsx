'use client'

import { Button, ButtonProps } from '@/components/ui'
import { useFormStatus } from 'react-dom'

export function SubmitButton(props: ButtonProps) {
  const { pending } = useFormStatus()

  return <Button disabled={pending} {...props} />
}
