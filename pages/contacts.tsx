import LayoutComponent from '@/components/layout/Layout'
import useCurrent from '@/swr/current'
import React from 'react'

const Contacts = () => {

    const {data} = useCurrent()

    console.log(data)


  return (
    <LayoutComponent>
        {}
    </LayoutComponent>
  )
}

export default Contacts