import React from 'react'
import { MdPageview } from "react-icons/md"
import { FaUserMinus } from "react-icons/fa"
import { MdOutlineBlock } from "react-icons/md"
import IconsContact from './iconsPost'
import { Post } from '@/types/types'


const MyPostCard = ({ comments, content, archived, createAt, id }: Post) => {
    return (
        <article className='w-80 h-32 p-2 bg-green-300 rounded-lg flex flex-col justify-between'>
            <header className='flex items-center justify-between mb-4'>
                <p>{content}</p>
            </header>
            <article className='flex justify-between items-center'>
                <div className='flex space-x-2'>
                    <IconsContact icon={MdPageview} size={20} />
                    <IconsContact icon={FaUserMinus} size={20} />
                    <IconsContact icon={MdOutlineBlock} size={20} />
                </div>
                <p>{createAt.toLocaleString('en-US',{month:"long",year:"numeric"})}</p>
            </article>
        </article>
    )
}



export default MyPostCard