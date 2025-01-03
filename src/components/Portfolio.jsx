import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
    useGSAP(()=>{
        gsap.fromTo(".portfolio-img-left", 
            {
                x: -200,
                opacity: 0.5
            },
            {
                x:0,
                opacity:1,
                stagger: 0.1,
                rotate: 3,
                scrollTrigger: {
                    trigger: ".portfolio-imgs",
                    start: "top 400px",
                    scrub: true
                }
            }
        )

        gsap.fromTo(".portfolio-img-right", 
            {
                x: 100,
                opacity: 0.5
            },
            {
                x:0,
                opacity:1,
                stagger: 0.1,
                rotate: -3,
                scrollTrigger: {
                    trigger: ".portfolio-imgs",
                    start: "top 400px",
                    scrub: true
                }
            }
        )
    })
  return (
    <section className='flex items-center px-10 '>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-10 overflow-hidden '>
            <div className='portfolio-imgs lg:w-1/3 flex flex-col items-center'>
                <img className='-rotate-[10deg] portfolio-img-left' src="/mockup-1.png" alt="" />
                <img className='-rotate-[5deg] -mt-5 portfolio-img-left' src="/mockup-1.png" alt="" />
                <img className='-rotate-[10deg] -mt-5 portfolio-img-left' src="/mockup-1.png" alt="" />
            
            </div>
            <div className='text-center lg:w-1/3 flex flex-col items-center justify-center'>
                <h2 className='text-5xl uppercase mb-5'>See Our Work</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae voluptate eveniet officia sequi harum exercitationem illo eius eos maxime recusandae, quibusdam dolores? Atque deleniti repellendus ratione accusantium in a.</p>
            </div>

            <div className='hidden portfolio-imgs lg:block lg:w-1/3 flex flex-col items-center'>
                <img className='rotate-[10deg] portfolio-img-right' src="/mockup-1.png" alt="" />
                <img className='rotate-[5deg] -mt-5 portfolio-img-right' src="/mockup-1.png" alt="" />
                <img className='rotate-[10deg] -mt-5 portfolio-img-right' src="/mockup-1.png" alt="" />
            
            </div>
        </div>
    </section>
  )
}
