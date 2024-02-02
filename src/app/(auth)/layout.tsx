import { auth } from '@/auth'
import { ReactNode } from 'react'

export default async function AuthLayout(props: Record<string, ReactNode>) {
  const session = await auth()

  return <>{session ? props.children : 'サインインして'}</>
}
