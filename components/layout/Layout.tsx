import React from 'react'
import Navbar from '../navbar'
import Sidebar from '../sidebar/sidebar'

interface props {
    children: React.ReactNode
}

const LayoutComponent = ({ children }: props) => {
    return (
        <section className='w-full h-full box-border'>
            <Navbar />
            <section className='flex h-[600px] w-full gap-2 p-2'>
                <Sidebar />
                <section className='h-full w-full overflow-y-auto'>
                    {children}
                </section>
            </section>
        </section>
    )
}

export default LayoutComponent