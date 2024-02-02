'use client'

import { BarLoader, Button, ButtonProps } from '@/components/ui'
import { useFormStatus } from 'react-dom'
import { Box } from 'styled-system/jsx'

export function SubmitButton({ children, ...props }: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      disabled={pending}
      position={'relative'}
      overflow={'hidden'}
      {...props}
    >
      {children}
      {pending && (
        <Box position={'absolute'} bottom={'0'} m="auto">
          <BarLoader color="rgba(255,255,255,0.5)" />
        </Box>
      )}
    </Button>
  )
}
