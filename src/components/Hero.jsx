import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  useGSAP(()=>{
    gsap.fromTo(".hero-text",
      {
        scale: 0.5,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.7,
        ease: "power3.inOut"
      }
    )

    gsap.fromTo(".hero-button",
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "back.inOut"
      }, "<99%"
    )

  })
  return (
    <section className='h-[100vh] flex items-center justify-center'>
        <div className='text-center flex flex-col gap-10 items-center'>
           <div className='relative z-10 flex flex-col gap-2'>
            <h1 className='hero-text leading-tight text-[2.7rem] lg:text-6xl font-bold'>Big Results for <br />Small Businesses</h1>
            <p className='hero-text text-sm px-10'>Affordable, impactful marketing tailored to help your business grow.</p>
           </div>

            <div className='flex gap-5 relative z-10'>
                <button className='hero-button primary-button'>Get Started</button>
                <button className='hero-button secondary-button'>View Projects</button>
            </div>
        </div>
    </section>
  )
}
