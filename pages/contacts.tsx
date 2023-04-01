import ContactCard from '@/components/contact/contactCard'
import LayoutComponent from '@/components/layout/Layout'
import useCurrent from '@/swr/current'
import { Contact } from '@/types/types'
import React from 'react'



const Contacts = () => {

  const { data } = useCurrent()

  console.log(data?.user)


  return (
    <LayoutComponent>
      {
        data?.user?.contacts.map((contact: Contact) => {
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
    </LayoutComponent>
  )
}

export default Contacts