import React from 'react'
import { MdPageview } from "react-icons/md"
import {FaUserMinus} from "react-icons/fa"
import {MdOutlineBlock} from "react-icons/md"
import IconsContact from './iconsPost'
import { Post } from '@/types/types'


const MyPostCard = ({ comments, content, archived, createAt }: Post) => {
    return (
        <article className='w-1/3 p-2 bg-green-300 rounded-lg justify-center'>
            <header className='flex items-center justify-between mb-4'>
               <p>{content}</p>
               <p>{createAt.toLocaleString("es-EN")}</p>
            </header>
            <article className='flex justify-end space-x-2 items-center'>
                <IconsContact icon={MdPageview} size={20} />
                <IconsContact icon={FaUserMinus} size={20}/>
                <IconsContact icon={MdOutlineBlock} size={20}/>
            </article>
        </article>
    )
}

export default MyPostCard