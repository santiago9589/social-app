import React from 'react'

interface props {
    handleSubmit: () => void
    children: React.ReactNode
}

const FormComponent = ({ children, handleSubmit }: props) => {
    return (
        <form className="flex bg-green-300 border-2 border-slate-100 rounded-xl flex-col p-4 w-2/3  mx-auto mt-6 space-y-3" onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default FormComponent