import React from 'react'
import { LayoutProps } from '../models/layout'

const LayoutAdmin = ({ children }: LayoutProps) => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <p>Sidebar</p>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin