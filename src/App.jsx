import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'

export default function App() {
  return (
    <div className='flex flex-col gap-[5rem]'>
      <Header />
      <Hero />
    </div>
  )
}
