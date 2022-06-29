import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const BlogDetail = (props: Props) => {
    const router = useRouter()
    console.log(router.query);
    return (
    <div className='text-red-700'>BlogDetail </div>
  )
}

export default BlogDetail