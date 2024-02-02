import { getServerSession, type AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/prisma'
import { Adapter } from 'next-auth/adapters'
import { NextApiRequest, NextApiResponse } from 'next'

export const authOptions: AuthOptions = {
  // https://github.com/nextauthjs/next-auth/issues/9493
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
}

export function auth(
  ...args: [req: NextApiRequest, res: NextApiResponse] | []
) {
  return getServerSession(...args, authOptions)
}
