import { getTodos } from '@/todo'
import { Box, Circle, Grid } from '../../../../styled-system/jsx'
import Link from 'next/link'
import React from 'react'
import { getActiveSession } from '@/auth'

export default async function Todos() {
  const { userId } = await getActiveSession()
  const todos = await getTodos(userId)

  return (
    <Grid gridTemplateColumns={'auto 1fr'} gap={2} alignItems="center">
      {todos.map(({ id, title, completed }) => (
        <React.Fragment key={id}>
          <Circle size={1} bg="black" />
          <Box textDecoration={completed ? 'line-through' : 'inherit'}>
            <Link href={`/todo/${id}`} scroll={false}>
              {title}
            </Link>
          </Box>
        </React.Fragment>
      ))}
    </Grid>
  )
}
