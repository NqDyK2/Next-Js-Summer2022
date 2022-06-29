import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div >
        <ul >
            <li ><Link href="/">Home Page</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
        </ul>
    </div>
  )
}

export default Header