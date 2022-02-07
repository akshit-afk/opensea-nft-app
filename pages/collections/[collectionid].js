import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Collection = () => {
  const router = useRouter()
  console.log(router.query.collectionid)
  return (
    <Link href="/">
      <h1> {router.query.collectionid}</h1>
    </Link>
  )
}

export default Collection
