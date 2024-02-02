import { getServerSession, type AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/prisma'
import { Adapter } from 'next-auth/adapters'
import { NextApiRequest, NextApiResponse } from 'next'
import { redirect } from 'next/navigation'

declare module 'next-auth' {
  interface Session {
    userId: string
  }
}

export const authOptions: AuthOptions = {
  // https://github.com/nextauthjs/next-auth/issues/9493
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.userId = user.id

      return session
    },
  },
}

export function auth(
  ...args: [req: NextApiRequest, res: NextApiResponse] | []
) {
  return getServerSession(...args, authOptions)
}

export async function getActiveSession() {
  const session = await auth()
  if (!session) redirect('/api/auth/signin')

  return session
}
