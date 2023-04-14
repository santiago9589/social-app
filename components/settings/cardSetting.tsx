import React from 'react'

interface props{
    field:string
    isShowField:boolean
    handleChange : (e:any)=>void
    setisShowField:()=>void
    handleModify:()=>void
    value:string
}

const CardSettings = ({field,isShowField,handleChange,setisShowField,handleModify,value}:props) => {
  return (
    <article>
          <section className='flex w-2/3 justify-between border-2 bg-slate-50 rounded-lg p-2 mb-2' >
            <p className='text-xl capitalize font-semibold'>{field}</p><button className='bg-green-100 p-2 text-xl uppercase border-2 rounded-lg w-52' onClick={setisShowField}>modificar</button>
          </section>
          {
            isShowField && <div className='w-1/2 bg-slate-100 p-4 flex space-y-2 flex-col'>
              <input
                name="username"
                type="text"
                value={value}
                onChange={handleChange}
                className='p-2 text-lg w-full'

              />
              <button onClick={handleModify} className='bg-slate-100 p-2 text-lg border-2 rounded-lg' >Modificar</button>
            </div>
          }
        </article>

  )
}

export default CardSettings
