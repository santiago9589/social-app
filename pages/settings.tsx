import ContactCard from '@/components/contact/contactCard'
import LayoutComponent from '@/components/layout/Layout'
import useContacts from '@/swr/contacts'
import useCurrent from '@/swr/current'
import { Contact } from '@/types/types'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { mutate } from "swr"
import { useRouter } from 'next/navigation'
import CardSettings from '@/components/settings/cardSetting'




const Settings = () => {


  const { data } = useCurrent()
  const router = useRouter()

  const [user, setUser] = useState<{username:string,name:string}>({
    username: "",
    name: ""

  })

  const [isShowUsername, setisShowUsername] = useState<boolean>(false)
  const [isShowName, setisShowName] = useState<boolean>(false)



  const handleModify = async (value: any, field: string) => {
    if (!value) return
    try {
      const response = await axios({
        method: "PATCH",
        data: value,
        url: `http://localhost:3000/api/user/patch/${field}/${data?.user?.id}`
      })
      setUser((user) => ({
        username: "",
        name: ""
      }))
      setisShowUsername(false)
      setisShowName(false)
      router.push("/")
    } catch (error) {
      console.log(error)
    }

  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUser((user) => ({ ...user, [e.target.name]: e.target.value }))
  }


  return (
    <LayoutComponent>
      <h2 className='text-4xl p-4'>Datos del usuario</h2>
      <section className=' w-full  p-4 flex flex-col h-full space-y-6'>
        <CardSettings field={data?.user.username}
          isShowField={isShowUsername}
          handleChange={(e) => handleChange(e)}
          setisShowField={() => setisShowUsername(!isShowUsername)}
          handleModify={() => handleModify(user, "username")}
          value={user.username}
        />

        <CardSettings field={data?.user.name}
          isShowField={isShowName}
          handleChange={(e) => handleChange(e)}
          setisShowField={() => setisShowName(!isShowName)}
          handleModify={() => handleModify(user, "name")}
          value={user.name}
        />

      </section>
    </LayoutComponent>
  )
}



export default Settings


    