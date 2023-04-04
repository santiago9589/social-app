import React from 'react'
import { IconType } from 'react-icons/lib/esm/iconBase'

interface props {
    name: string
    icon: IconType
    size: number
    handleClick?: () => void
    classAdded?: string
}

const IconsComponentNumber = ({ name, icon: Icon, size, handleClick, classAdded }: props) => {
    return (
        <>
            <article className='hidden md:flex  capitalize space-x-1 items-center w-full p-2 justify-around bg-slate-100 rounded-lg ' onClick={handleClick}>
                <h3 className={`w-16 ${classAdded && classAdded}`}>{name}</h3>
                <Icon size={size} />
            </article>
            <article className='flex md:hidden capitalize space-x-1 items-center p-2 justify-center  bg-slate-100 rounded-full ' onClick={handleClick}>
                <Icon size={size} />
            </article>
        </>

    )
}

export default IconsComponentNumber