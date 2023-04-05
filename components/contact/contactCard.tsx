import React from 'react'
import { MdPageview } from "react-icons/md"
import { FaUserMinus } from "react-icons/fa"
import { MdOutlineBlock } from "react-icons/md"
import IconsContact from './iconsContact'
import { Contact } from '@/types/types'


const ContactCard = ({ username, photo, email, name }: Contact) => {
    return (
        <article className='p-2 bg-green-300 rounded-lg w-64 h-32 flex flex-col justify-between'>
            <header className='flex items-center justify-between mb-4'>
                <h2 className='text-xl capitalize'>{email}</h2>
                <img className="bg-slate-100 rounded-full p-2" src={photo} alt="foto" />
            </header>
            <article className='flex justify-end space-x-2 items-center'>
                <IconsContact icon={MdPageview} size={20} />
                <IconsContact icon={FaUserMinus} size={20} />
                <IconsContact icon={MdOutlineBlock} size={20} />
            </article>
        </article>
    )
}

export default ContactCard