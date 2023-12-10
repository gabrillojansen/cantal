import React from 'react';
import { PiFacebookLogoBold } from 'react-icons/pi';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className="w-full bg-[white] mt-32">
        <div className="max-w-[1200px] m-auto flex flex-col items-center px-4 py-16">
            <div className="w-full flex justify-between">
                <div>
                    <h1 className="text-3xl text-[#2C3E50] font-semibold mb-2">Cantal</h1>
                    <p className="text-sm">Search for cheap rental cars in Philippines. <br />
                       With a diverse fleet of 19,000 vehicles, Cantal <br />
                       offers its consumers an attractive and fun selection.</p>
                </div>
                <div>
                    <h3 className="text-[#2C3E50] font-semibold mb-2">Company</h3>
                    <ul className="text-xs flex flex-col gap-2">
                        <li className="duration-300 hover:text-[#52BE80] cursor-pointer">About us</li>
                        <li className="duration-300 hover:text-[#52BE80] cursor-pointer">Pricing plans</li>
                        <li className="duration-300 hover:text-[#52BE80] cursor-pointer">Our blog</li>
                        <li className="duration-300 hover:text-[#52BE80] cursor-pointer">Contacts</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[#2C3E50] font-semibold mb-2">Support</h3>
                    <ul className="text-xs flex flex-col gap-2">
                        <li  className="duration-300 hover:text-[#52BE80] cursor-pointer">Help center</li>
                        <li  className="duration-300 hover:text-[#52BE80] cursor-pointer">Ask a question</li>
                        <li  className="duration-300 hover:text-[#52BE80] cursor-pointer">Privacy policy</li>
                        <li  className="duration-300 hover:text-[#52BE80] cursor-pointer">Terms & conditions</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[#2C3E50] font-semibold mb-2">Follow Us</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-center gap-1 text-[13px] text-[#566573] duration-300 hover:text-[#52BE80] cursor-pointer"><PiFacebookLogoBold/>Facebook</li> 
                        <li className="flex items-center gap-1 text-[13px] text-[#566573] duration-300 hover:text-[#52BE80] cursor-pointer"><FaInstagram/>Instagram</li>
                        <li className="flex items-center gap-1 text-[13px] text-[#566573] duration-300 hover:text-[#52BE80] cursor-pointer"><FiTwitter/>Twitter</li>
                    </ul>
                </div>
            </div>
            <div className="w-full flex justify-center mt-32">
                <span className="text-xs">
                    <a href="https://www.facebook.com/gabrillojansen"
                    className="text-[#2C3E50] font-semibold">©gabrillojansen. </a>All rigths reserved
                </span>
            </div>
        </div>
    </footer>
  )
}
