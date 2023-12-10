import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

export const Header = () => {
    const [showHeaderShadow, setShowHeaderShadow] = useState(false);

    const handleHeaderShadow = () => {
        if (window.scrollY >= 10) {
            setShowHeaderShadow(true);
        } else {
            setShowHeaderShadow(false);
        }
    }
    window.addEventListener('scroll', handleHeaderShadow);

  return (
    <div className={`w-full bg-[--header] fixed top-0 z-[1] transition-[.3s] ${showHeaderShadow ? "shadow" : ""}`}>
        <header className="max-w-[1200px] m-auto flex items-center justify-between p-4">
            <div
            onClick={() => window.scrollTo(0, 0)}
            className="cursor-pointer"
            >Cantal.</div>
            <ul className="flex gap-8 text-sm">
                <Link to="/">Home</Link>
                <li className="flex items-center gap-1 group cursor-pointer relative">Explore Cars <IoIosArrowDown/>
                    <ul className="hidden absolute top-5 group-hover:block">
                        <Link to="/explore-cars" className="cursor-pointer">Explore One</Link>
                        <li className="cursor-pointer">Explore Two</li>
                        <li className="cursor-pointer">Explore Three</li>
                    </ul>
                </li>
                <li>Help Center</li>
                <li>Pages</li>
            </ul>
            <div className="flex items-center gap-4">
                <button
                className="text-[13px] text-[--header-btn-text] bg-[--header-btn-bg] py-2 px-4 rounded transition-[.3s] hover:bg-[--header-item-hover]">Explore Cars</button>
                <div className="p-2 bg-[--header-user-bg] shadow-xl rounded group">
                    <FaRegUser className="text-[--header-user-text] transition-[.3s] group-hover:text-[--header-item-hover]"/>
                </div>
            </div>
        </header>
    </div>
  )
}
