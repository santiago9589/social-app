import React from 'react'

interface props {
    username: string
    photo: string
    email: string
}

const ContactCard = ({ username, photo, email }: props) => {
    return (
        <article className='border-2 border-black'>
            <section>
                <h2>{email}</h2>
                <h2>{username}</h2>
            </section>
            <img src={photo} alt="foto" />
        </article>
    )
}

export default ContactCard