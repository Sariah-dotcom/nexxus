import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'




export default function App() {
  return (
    <div className='flex flex-col gap-[5rem]'>
      <Header />
      <Hero />
      {/* <About />
      <Footer /> */}
    </div>
  )
}
