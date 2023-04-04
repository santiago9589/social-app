import ContactCard from '@/components/contact/contactCard'
import LayoutComponent from '@/components/layout/Layout'
import useCurrent from '@/swr/current'
import { Contact } from '@/types/types'
import React from 'react'



const Contacts = () => {

  const { data } = useCurrent()


  const datafaske = [{
    email:"email",
    name:"name",
    photo:"photo",
    username:"username"

  },{
    email:"email",
    name:"name",
    photo:"photo",
    username:"username"

  },{
    email:"email",
    name:"name",
    photo:"photo",
    username:"username"

  },{
    email:"email",
    name:"name",
    photo:"photo",
    username:"username"

  },{
    email:"email",
    name:"name",
    photo:"photo",
    username:"username"

  },{
    email:"email",
    name:"name",
    photo:"photo",
    username:"username"

  },{
    email:"email",
    name:"name",
    photo:"photo",
    username:"username"

  },{
    email:"email",
    name:"name",
    photo:"photo",
    username:"username"

  }]


  return (
    <LayoutComponent>
      <section className='flex gap-4 w-full flex-wrap'>
        {
         datafaske.map((contact: Contact) => {
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