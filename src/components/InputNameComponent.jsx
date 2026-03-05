import React from 'react'

export default function ShowNameToEditComponent({ input, setInput }) {
  return (
    <div className='my-10'>
      <p className='text-2xl font-extrabold'>Name to change: {input}</p>

      <div className='flex gap-[10px]'>
        <label htmlFor="name">Change name to update by id </label>
        <input className='border-2' input="text" name='name' onChange={(e) => setInput(e.target.value)} required/>
      </div>
    </div>
  )
}
