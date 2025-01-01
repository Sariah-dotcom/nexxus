import React from 'react'

export default function Hero() {
  return (
    <section>
        <div className='text-center flex flex-col gap-10 items-center'>
           <div className='flex flex-col gap-2'>
            <h1 className='leading-tight text-5xl lg:text-7xl font-bold'>Big Results for <br />Small Businesses</h1>
            <p>Affordable, impactful marketing tailored to help your business grow.</p>
           </div>
            <div className='flex gap-5'>
                <button className='primary-button'>Get Started</button>
                <button className='secondary-button'>View Projects</button>
            </div>
        </div>
    </section>
  )
}
