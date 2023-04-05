import ContactCard from '@/components/contact/contactCard'
import LayoutComponent from '@/components/layout/Layout'
import useCurrent from '@/swr/current'
import { Contact } from '@/types/types'
import axios from 'axios'
import React from 'react'

interface props {
  data: Contact[]
  error: string
}


export const getServerSideProps = async () => {

  try {

    const res = await axios.get("http://localhost:3000/api/contacts/all")

    const data = res.data

    return {
      props: {
        data,
        error: ""
      }
    }

  } catch (error: any) {

    return {
      props: {
        data: [],
        error
      }
    }


  }

}


const Contacts = ({data,error}:props) => {

  return (
    <LayoutComponent>
      <section className='flex gap-4 w-full flex-wrap p-2'>
        {
         data.map((contact: Contact) => {
            return (
              <ContactCard
                key={contact.id}
                email={contact.email}
                name={contact.name}
                photo={contact.photo}
                username={contact.username}
              />
            )
          })
        }
      </section>
    </LayoutComponent>
  )
}

export default Contacts