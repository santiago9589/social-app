import ContactCard from '@/components/contact/contactCard'
import LayoutComponent from '@/components/layout/Layout'
import useContacts from '@/swr/contacts'
import { Contact } from '@/types/types'
import React from 'react'



const Contacts = () => {


  const { data,isLoading } = useContacts()

  

  return (
    <LayoutComponent>
      
      <section className='flex gap-4 w-full flex-wrap p-2'>
        {
         data?.map((contact: Contact) => {
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