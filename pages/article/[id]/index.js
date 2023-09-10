import { useRouter } from 'next/router';
import React from 'react'

const Article = () => {
    const router = useRouter();
    const {id} = router.query

  return (
    <div>This is article {id}</div>
  )
}

export default Article;