import { getTodos } from '@/todo'
import { Flex, Grid } from '../../../styled-system/jsx'
import Link from 'next/link'

export default async function Todos() {
  const todos = await getTodos()

  return (
    <Flex direction={'column'} gap={4}>
      {todos.map(({ id, title, description }) => (
        <Grid
          key={id}
          rounded={'md'}
          borderWidth={'thin'}
          borderColor={'gray.200'}
          borderStyle={'solid'}
        >
          <Link href={`/todo/${id}`} scroll={false}>
            title: {title}
          </Link>
          description: {description}
        </Grid>
      ))}
    </Flex>
  )
}
