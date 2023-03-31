import React from 'react'

interface props {
    name: string
    type: string
    handleChange: (e: React.ChangeEvent) => void;
    value: string
    touched: boolean
    errors: string
}

const InputComponent = ({ name, type, handleChange, touched, errors, value }: props) => {
    return (
        <>
            <label className='text-lg capitalize'>{name}</label>
            <input
                className='p-2 rounded-md bg-slate-50'
                type={type}
                value={value}
                onChange={handleChange}
                name={name}
                placeholder={`ingrese ${name}`}
            />
            {touched && errors && (<div className='text-red-400 text-lg font-semibold '>{errors}</div>)}
        </>
    )
}


export default InputComponent