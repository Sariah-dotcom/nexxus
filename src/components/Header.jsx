import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

  return (
    <nav className='flex relative justify-between items-center p-3 lg:px-10 bg-med-grey border-2 border-light-grey w-full rounded-[1rem] drop-shadow-xl'>
        <img src="/nexxus-logo.png" alt="Nexxus logo" />

        {/* Mobile Menu */}
       

    </nav>
  )
}
