import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


export default function About() {
  useGSAP(()=> {
    gsap.fromTo(".about-left",
      {
        y: -100,
      },
      {
        y:0,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 90%",
          end: "bottom",
          scrub: true

        }
      }
    )

    gsap.fromTo(".about-right",
      {
        y: 200,
      },
      {
        y:0,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 90%",
          end: "bottom",
          scrub: true

        }
      }
    )

  })
  return (
    <section className='about-section flex flex-col gap-10 p-3 lg:px-20 lg:flex-row lg:items-center'>
        
        <div className='about-left lg:w-[70%] flex flex-col'>
          <h2 className='text-4xl text-center font-semibold mb-5 uppercase lg:text-7xl lg:text-left'>About Us</h2>
          <p className='text-center text-sm lg:text-left px-12 lg:pr-12 lg:pl-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur, labore, eos ratione fugiat fugit sapiente incidunt dolor architecto totam laborum, culpa sed nobis assumenda eum quia sint asperiores similique?</p>
        </div>

        <div className='about-right flex'>
            <img className='opacity-50' src="/shape-2.png" alt="" />
        </div>
    </section>
  )
}
