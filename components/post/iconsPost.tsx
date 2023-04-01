import React from 'react'
import { IconType } from 'react-icons/lib/esm/iconBase'

interface props {
    icon: IconType
    size: number
    handleClick?: () => void
}

const IconsPost = ({ icon: Icon, size, handleClick}: props) => {
    return (
        <>
            <Icon className="" size={size} onClick={handleClick} />
        </>

    )
}

export default IconsPost