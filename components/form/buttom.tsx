import React from 'react'

interface props {
  name: string
}

const ButtomForm = ({ name }: props) => {
  return (
    <button
      type="submit"
      className='bg-slate-200
    border-2 border-green-50
    rounded-lg
    p-2
    text-lg
    uppercase
    w-full
    '>
      {name}
    </button>
  )
}

export default ButtomForm