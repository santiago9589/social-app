import useCurrent from '@/swr/current'
import { signOut } from 'next-auth/react'
import React from 'react'
import { RiLogoutBoxRFill } from "react-icons/ri"
import { RiLoginBoxFill } from "react-icons/ri"
import { GiArchiveRegister } from "react-icons/gi"
import IconsComponent from './icons/iconsComponent'
import { useRouter } from 'next/navigation'

const Navbar = () => {

    const { data } = useCurrent()
    const route = useRouter()


    const handleLogout = async () => {
        await signOut()
    }

    return (
        <nav className=' mb-3 flex justify-between items-center bg-green-300 p-2 rounded-md h-16'>
            <h1 className='bg-slate-100 text-2xl uppercase rounded-lg p-2'>SOCIAL APP ULTIMATE </h1>
            <section className='items-center justify-between flex '>
                {
                    !data?.user?.email ? (
                        <section className='h-full gap-4 flex w-60 items-center justify-between'>
                            <IconsComponent handleClick={() => { route.push("/login") }} size={25} icon={RiLoginBoxFill} name={"login"} />
                            <IconsComponent handleClick={() => { route.push("/register") }} size={25} icon={GiArchiveRegister} name={"register"} />
                        </section>) : (
                        <section className='h-full gap-4 flex w-60 items-center justify-between'>
                            <article className='flex w-full items-center bg-slate-100 rounded-lg px-2 justify-between'>
                                <p className='capitalize'>{data.user.email}</p>
                                <img className='w-10 h-full rounded-full'
                                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                    alt="profile user" />
                            </article>
                            <IconsComponent handleClick={() => handleLogout()} size={25} icon={RiLogoutBoxRFill} name={"logout"} />
                        </section>
                    )
                }
            </section>
        </nav>
    )
}

export default Navbar