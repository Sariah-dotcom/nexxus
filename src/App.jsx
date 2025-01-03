import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Services from './components/Services'




export default function App() {
  return (
    <div className='flex flex-col'>
      <Header />
      <Hero />
      <div className='flex flex-col gap-[5rem]'>
        <About />
        <Services />
        <Footer />
      </div>
    </div>
  )
}
