import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type BlogProps = {
  blog: any
}

const BlogDetail = ({blog}: BlogProps) => {
  if(!blog) return null;

  return (
    <div className='text-red-700'>BlogDetail - {blog.name} </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`http://localhost:3001/blogs`)).json();
  const paths = data.map(item => {
    return { params: { id: item.id } }
  })
  return {
    paths,
    fallback: false
  }
}


export const getStaticProps: GetStaticProps<BlogProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("Hello Server!!!");
  const data = await (await fetch(`http://localhost:3001/blogs/${context.params.id}`)).json();
  console.log("Data:", data);
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      blog: data
    }
  }
}

export default BlogDetail