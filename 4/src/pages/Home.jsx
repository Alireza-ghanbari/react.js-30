import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'

export default function Home() {
  return (
    <div className='xs:px-5 bg-[#ffb0a9] relative -z-50'>
        <Hero />
        <Category />
    </div>
  )
}
