import React from 'react'
import Navbar from '../navbar'
import Sidebar from '../sidebar/sidebar'

interface props {
    children: React.ReactNode
}

const LayoutComponent = ({ children }: props) => {
    return (
        <section className='w-full h-screen box-border grid grid-cols-3 grid-rows-5'>
            <Navbar />
            <section className='col-span-3 row-span-6 flex gap-2 p-2'>
                <Sidebar />
                <section className='overflow-y-auto'>
                    {children}
                </section>
            </section>
        </section>

    )
}

export default LayoutComponent