import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

  return (
    <nav className='flex justify-between items-center p-3 bg-med-grey border-2 border-light-grey w-full rounded-[1rem]'>
        <img src="/nexxus-logo.png" alt="Nexxus logo" />

        <div className='flex'>
            <RiMenu3Fill onClick={toggleMenu} className='text-2xl font-bold text-white' />
            <ul className={`menu p-10 ${isMenuOpen ? "open" : ""}`}>
                <IoMdClose className='absolute right-10' onClick={toggleMenu} />
                <li className='mt-12'><a href="#">About Us</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>
    </nav>
  )
}
