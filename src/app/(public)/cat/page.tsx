import { Box } from 'styled-system/jsx'
import { getCat, revalidateGetCat } from './_/actions'
import Image from 'next/image'
import { Form } from '@/components/ui'
import { SubmitButton } from '@/components/shared'

export default async function CatPage() {
  const { url, height, width } = await getCat()

  return (
    <Box>
      <Image src={url} alt="this is a cat" width={width} height={height} />
      <Form action={revalidateGetCat}>
        <SubmitButton>ねこくれ</SubmitButton>
      </Form>
    </Box>
  )
}
