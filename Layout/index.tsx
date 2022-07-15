import React from 'react'
import { LayoutProps } from '../models/layout'


const Layout = ({children} : LayoutProps) => {
  return (
    <div>
        <div>
            Header
        </div>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout