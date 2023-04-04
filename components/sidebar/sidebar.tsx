import { useRouter } from 'next/navigation'
import React from 'react'
import { RiLoginBoxFill } from "react-icons/ri"
import IconsComponent from '../icons/iconsComponent'
import { RiContactsBook2Fill } from "react-icons/ri"
import { AiFillHome } from "react-icons/ai"
import { FaClipboardList } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { GiArchiveRegister } from "react-icons/gi"
import useCurrent from '@/swr/current'


interface props {

}

const Sidebar = ({ }: props) => {

    const { data } = useCurrent()
    const route = useRouter()

    return (
        <aside className={`col-span-1 row-span-6 flex flex-col  bg-green-300 rounded-lg ${data?.user?.email ? "justify-between" : "justify-start space-y-4"} h-full basis-52 items-center p-4`}>

            {
                data?.user?.email ? (
                    <>
                        <IconsComponent classAdded={"text-lg"} handleClick={() => { route.push("/contacts") }} size={25} icon={RiContactsBook2Fill} name={"contacts"} />
                        <IconsComponent classAdded={"text-lg"} handleClick={() => { route.push("/") }} size={25} icon={AiFillHome} name={"home"} />
                        <IconsComponent classAdded={"text-lg"} handleClick={() => { route.push("/post") }} size={25} icon={FaClipboardList} name={"post"} />
                        <IconsComponent classAdded={"text-lg"} handleClick={() => { route.push("/settings") }} size={25} icon={AiFillSetting} name={"settings"} />
                        <p className=' uppercase text-xl'>{data.user.email}</p>
                    </>
                ) :
                    (
                        null
                    )
            }
            {
                !data?.user?.email ? (
                    <>
                        <IconsComponent classAdded={"text-xl"} handleClick={() => { route.push("/login") }} size={25} icon={RiLoginBoxFill} name={"login"} />
                        <IconsComponent classAdded={"text-xl"} handleClick={() => { route.push("/register") }} size={25} icon={GiArchiveRegister} name={"register"} />

                    </>
                ) :
                    (
                        null
                    )
            }

        </aside>
    )
}

export default Sidebar