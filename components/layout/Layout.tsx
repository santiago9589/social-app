import React from 'react'
import Navbar from '../navbar'
import Sidebar from '../sidebar/sidebar'


interface props {
    children: React.ReactNode
}

const LayoutComponent = ({ children }: props) => {
    return (
        <section className={`w-full h-screen box-border grid grid-cols-5 grid-rows-5  `}>
            
            <Navbar />
            <Sidebar />
            <section className='overflow-y-auto col-start-2 col-span-4 row-span-6'>
                {children}
            </section>
        </section>

    )
}

export default LayoutComponent