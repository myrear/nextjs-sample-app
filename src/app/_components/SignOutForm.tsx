'use client'

import { Form, FormProps } from '@/components/ui'
import { signOut } from 'next-auth/react'

export function SignOutForm(props: FormProps) {
  return <Form action={() => signOut()} {...props} />
}
