import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

type BlogProps = {
  blogs: any[]
}

const BlogPage = ({ blogs }: BlogProps) => {
  console.log("This is client");
  
  console.log("Blogs: ", blogs);
  
  return (
    <div>
      {blogs.map((item) => (
        <div key={item.id}><Link href={`/blog/${item.id}`}>{item.name}</Link></div>
      ))

      }
    </div>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("Hello Server!!!");
  const data = await(await fetch(`http://localhost:3001/blogs`)).json();
  console.log("Data:" , data);
  if(!data){
    return {
      notFound: true,
    }
  }
  return {
    props: {
      blogs: data
    }
  }
}

export default BlogPage