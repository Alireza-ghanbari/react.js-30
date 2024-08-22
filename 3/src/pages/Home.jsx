import React from 'react'

export default function Home() {
    const user = localStorage.getItem("user_email")
  return (
    <div className='p-5 '>
        <h1 className='text-3xl text-slate-700 opacity-70'>{user}</h1>
    </div>
  )
}
