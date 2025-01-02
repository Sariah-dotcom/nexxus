import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  // useGSAP(()=>{
  //   gsap.fromTo(".hero-video",
  //     {
  //       scale: 0.5,
  //       y:0
  //     },
  //     {
  //       scale: 1.3,
  //       y: -350
        
  //     }
  //   )

  // })
  return (
    <section>
        <div className='text-center flex flex-col gap-10 items-center'>
           <div className='relative z-10 flex flex-col gap-2'>
            <h1 className='leading-tight text-4xl lg:text-7xl font-bold'>Big Results for <br />Small Businesses</h1>
            <p>Affordable, impactful marketing tailored to help your business grow.</p>
           </div>
            <div className='flex gap-5 relative z-10'>
                <button className='primary-button'>Get Started</button>
                <button className='secondary-button'>View Projects</button>
            </div>
        </div>
    </section>
  )
}
