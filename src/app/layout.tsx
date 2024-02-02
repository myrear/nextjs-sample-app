import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container, Flex, styled } from '../../styled-system/jsx'
import { ReactNode } from 'react'
import Link from 'next/link'
import { auth } from '@/auth'
import { SignOutForm, SignInForm, SubmitButton } from './_components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Record<'children', ReactNode>) {
  const session = await auth()

  return (
    <html lang="en">
      <body className={inter.className}>
        <styled.header
          position={'sticky'}
          top="0"
          zIndex={'1'}
          py="3"
          bg="white"
          borderColor={'gray.200'}
          borderBottomWidth={'thin'}
        >
          <Container>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <styled.h1 fontWeight={'bold'} fontSize={'lg'}>
                <Link href={'/'}>Todo App</Link>
              </styled.h1>
              {session ? (
                <SignOutForm>
                  <SubmitButton>サインアウト</SubmitButton>
                </SignOutForm>
              ) : (
                <SignInForm>
                  <SubmitButton>サインイン</SubmitButton>
                </SignInForm>
              )}
            </Flex>
          </Container>
        </styled.header>
        <Container>{session ? children : 'サインインして'}</Container>
      </body>
    </html>
  )
}
