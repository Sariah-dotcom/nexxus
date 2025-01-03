import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Services from './components/Services'
import Portfolio from './components/Portfolio'




export default function App() {
  return (
    <div className='flex flex-col'>
      <Header />
      <Hero />
      <div className='flex flex-col gap-[5rem]'>
        <About />
        <Services />
        <Portfolio />
        <Footer />
      </div>
    </div>
  )
}
