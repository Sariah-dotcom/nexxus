import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  useGSAP(()=>{

    gsap.fromTo(".hero-img", {opacity: 0, scale: 0.2}, {opacity: 0.2, scale: 1, duration: 1.5, ease: 'back.inOut'})

    gsap.fromTo(".cta-1", {x: -20, opacity: 0}, {x: 0, opacity: 1, duration: 0.75 }, "<99%")
    gsap.fromTo(".cta-2", {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 0.75}, "<50%")
    gsap.fromTo(".cta-3", {x: 20, opacity: 0}, {x: 0, opacity: 1, duration: 0.75}, "<50%")
    gsap.fromTo(".cta-4", {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 0.75}, "<50%")
    gsap.fromTo(".cta-5", {x: 20, opacity: 0}, {x: 0, opacity: 1, duration: 0.75}, "<50%")

    gsap.fromTo(".hero-text",
      {
        y: 20,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.7,
        ease: "power3.inOut"
      }, "<95%"
    )

    gsap.fromTo(".hero-button",
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "back.inOut"
      }, "<90%"
    )

  })
  return (
    <section className='h-[100vh] flex flex-col items-center justify-center'>
        <div className='text-center flex flex-col gap-10 items-center'>
           <div className='relative z-10 flex flex-col gap-2'>
            
            <div className='text-[2.7rem] lg:text-6xl font-bold flex flex-col items-center'>
              <div className='cta-text flex gap-3'>
                <h1><span className='cta-1'>Big </span></h1>
                <h1><span className='cta-2'>Results </span></h1>
                <h1><span className='cta-3'>For</span></h1>
              </div>
              <div className='cta-text flex gap-3 -mt-3 lg:-mt-0'>
                <h1><span className='cta-4'>Small </span></h1>
                <h1><span className='cta-5'>Businesses </span></h1>
              </div>
            </div>
            
            <p className='hero-text text-sm px-10'>Affordable, impactful marketing tailored to help your business grow.</p>
           </div>

            <div className='flex gap-5 relative z-10'>
                <button className='hero-button primary-button'>Get Started</button>
                <button className='hero-button secondary-button'>View Projects</button>
            </div>

            <img className='hero-img absolute opacity-20 h-[20rem] lg:h-[30rem] lg:-mt-10' src="/hero-img.png" alt="" />

        </div>
    </section>
  )
}
