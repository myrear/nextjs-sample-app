import Link from 'next/link'
import { styled } from '../../styled-system/jsx'

export default async function Home() {
  return (
    <styled.div>
      <Link href={'/todo'}>todo</Link>
    </styled.div>
  )
}
