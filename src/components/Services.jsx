import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {

    // useGSAP(()=>{
    //     gsap.fromTo(".card",
    //         {
    //             y: 100,
    //             opacity: 0,
    //             scale: 0.6
    //         },
    //         {
    //             y: 0,
    //             opacity: 1,
    //             scale: 1,
    //             stagger: 6,
    //             duration: 5,
    //             scrollTrigger: {
    //                 trigger: ".card-container",
    //                 start: "top 250px",
    //                 end: "bottom+=200 center", // Extends the scroll duration
    //                 pin: true,
    //                 scrub: true,
    //             }
    //         }
    //     )
    // })
  return (
    <section className='px-3 flex flex-col items-center'>

        <div className='card-container h-[20vh] lg:h-[50vh] w-full flex flex-col items-center'>
            <h2 className='text-4xl text-center font-semibold mb-5 uppercase lg:text-7xl lg:text-left'>What We Offer</h2>

            <div className='card' >
                <h3>Brand Creation</h3>
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='card lg:mt-3'>
                <h3>Logo Creation</h3>
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='card lg:mt-5'>
                <h3>Web Development</h3>
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='card lg:mt-7'>
                <h3>Web Development</h3>
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
 
        </div>

    </section>
  )
}
