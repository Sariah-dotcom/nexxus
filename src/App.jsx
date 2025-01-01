import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './About'


export default function App() {
  return (
    <div className='flex flex-col gap-[5rem]'>
      <Header />
      <Hero />
      <About />
    </div>
  )
}
