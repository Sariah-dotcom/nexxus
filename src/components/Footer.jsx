import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=''>
        <img src="/nexxus-logo-lg.png" alt="Nexxus logo" />
        
        <ul className='text-white py-3 leading-tight'>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        <ul className='text-white py-3 leading-tight'>
            <li><a href="#">Company</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Testimonials</a></li>
        </ul>

        <div className='mt-3 py-3'>
            <hr />
            <div className='flex py-2 justify-between items-center'>
                <div className='flex  gap-2 text-white'>
                    <FaFacebook />
                    <FaXTwitter />
                    <FaBehanceSquare />
                </div>
                <p className='text-xs'>Copyright @ 2025</p>
            </div>
        </div>
    </footer>
  )
}
