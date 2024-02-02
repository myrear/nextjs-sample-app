import Link from 'next/link'
import { Flex, VStack, styled } from '../../styled-system/jsx'
import { Button } from '@/components/ui'

export default async function Home() {
  return (
    <VStack gap={2} alignItems={'start'}>
      <Button asChild>
        <Link href={'/todo'}>/todo</Link>
      </Button>
      <Button asChild>
        <Link href={'/cat'}>ねこです</Link>
      </Button>
    </VStack>
  )
}
