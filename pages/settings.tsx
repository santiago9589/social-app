import ContactCard from '@/components/contact/contactCard'
import LayoutComponent from '@/components/layout/Layout'
import useContacts from '@/swr/contacts'
import useCurrent from '@/swr/current'
import { Contact } from '@/types/types'
import React, { useState } from 'react'
import axios from 'axios'
import { url } from 'inspector'


const Settings = () => {


  const { data } = useCurrent()

  const [user, setUser] = useState({
    username: "",
    name: ""

  })
  const [isShowUsername, setisShowUsername] = useState(false)
  const [isShowName, setisShowName] = useState(false)


  const handleModify = async (value: any, field: string) => {
    console.log(value)
    if (!value) return
    try {
      const response = await axios({
        method: "PATCH",
        data: value,
        url: `http://localhost:3000/api/user/patch/${field}/${data?.user?.id}`
      })
      window.location.reload()
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
      <h2>Datos del usuario</h2>
      <section className=' w-full  p-2 flex flex-col items-center h-full justify-center'>

        <article>
          <section className='flex'>
            <p>{data?.user.username}</p><button className='border-2 border-black' onClick={() => setisShowUsername(!isShowUsername)}>modificar</button>
          </section>
          {
            isShowUsername && <>
              <input
                name="username"
                type="text"
                value={user.username}
                onChange={(e) => handleChange(e)}

              />
              <button onClick={() => handleModify(user, "username")}>Modificar</button>
            </>
          }
        </article>

        <article>
          <section className='flex'>
            <p>{data?.user.name}</p><button className='border-2 border-black' onClick={() => setisShowName(!isShowName)}>modificar</button>
          </section>
          {
            isShowName && <>
              <input
                name="name"
                type="text"
                value={user.name}
                onChange={(e) => handleChange(e)}

              />
              <button onClick={() => handleModify(user, "name")}>Modificar</button>
            </>

          }

        </article>


      </section>
    </LayoutComponent>
  )
}



export default Settings