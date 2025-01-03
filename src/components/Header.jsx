import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useGSAP(()=> {
      gsap.fromTo("nav", {opacity: 0, y: -100},{opacity: 1, y: 0, delay: 6})
    })

  return (
    
    <nav className='fixed w-full border-b border-light-grey py-3 px-4 lg:py-3 lg:px-20 z-20'>
      <div className='flex justify-between items-center'>
        <img src="/nexxus-logo.png" alt="Nexxus logo" />

        <ul className='hidden nav-links lg:flex gap-5 text-sm text-white uppercase'>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className='lg:hidden'>
          <RiMenu3Fill onClick={toggleMenu} className='text-xl text-white'/>
          <ul className={`menu p-10 ${isMenuOpen ? "open" : ""}`}>
            <IoMdClose onClick={toggleMenu} className='absolute right-5 text-xl'/>
            <li className='mt-10'><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>

  )
}
