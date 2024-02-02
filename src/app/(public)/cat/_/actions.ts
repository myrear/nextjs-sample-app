'use server'

import { revalidateTag } from 'next/cache'

type CatImage = {
  id: string
  url: string
  width: number
  height: number
}

const URL = 'https://api.thecatapi.com/v1/images/search'

export async function getCat() {
  const [cat]: [CatImage] = await fetch(URL).then((res) => res.json())
  return cat
}

export async function revalidateGetCat() {
  revalidateTag(URL)
}
