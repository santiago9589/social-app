import React from 'react'
import { IconType } from 'react-icons/lib/esm/iconBase'

interface props {
    icon: IconType
    size: number
    handleClick?: () => void
}

const IconsContact = ({ icon: Icon, size, handleClick}: props) => {
    return (
        <>
            <Icon className="" size={size} onClick={handleClick} />
        </>

    )
}

export default IconsContact