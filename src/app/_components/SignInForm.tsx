'use client'

import { Form, FormProps } from '@/components/ui'
import { signIn } from 'next-auth/react'
import { usePathname } from 'next/navigation'

export function SignInForm(props: FormProps) {
  const pathname = usePathname()

  return (
    <Form
      action={() => signIn('github', { callbackUrl: pathname })}
      {...props}
    />
  )
}
