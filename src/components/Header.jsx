import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

export const Header = () => {
    const [isLinkActive, setIsLinkActive] = useState('Home');
    const [showHeaderShadow, setShowHeaderShadow] = useState(false);

    const handleHeaderShadow = () => {
        if (window.scrollY >= 10) {
            setShowHeaderShadow(true);
        } else {
            setShowHeaderShadow(false);
        }
    }
    window.addEventListener('scroll', handleHeaderShadow);

    const headerLinks =[
        {link: 'Home', to: '/'},
        {link: 'Explore Cars', to: '/explore-cars'},
        {link: 'Help Center'},
        {link: 'Pages'}
    ];

  return (
    <div className={`w-full bg-[--header] fixed z-[1] transition-[.3s] ${showHeaderShadow ? "shadow" : ""}`}>
        <header className="max-w-[1200px] m-auto flex items-center justify-between p-4">
            <div
            onClick={() => window.scrollTo(0, 0)}
            className="cursor-pointer">Cantal.</div>
            <ul className="hidden lg:flex gap-4">
                {headerLinks.map((headLinks, index) => {
                    return <Link
                    to={headLinks.to}
                    onClick={() => setIsLinkActive(headLinks.link)}
                    className={`flex items-center text-[13px] text-[--header-links] font-bold tracking-wide cursor-pointer transition-[.3s] hover:text-[--header-item-hover] relative
                    ${isLinkActive === headLinks.link ? "text-[#27AE60]" : ""}`}>
                        <hr className={`${
                        isLinkActive === headLinks.link ? "absolute w-[30px] h-1 bg-[#27AE60] bottom-[-4px] rounded-lg" : ""}`} />
                        {headLinks.link} {index === 0 || index === 1 || index === 3 ? <IoIosArrowDown className="text-[--header-links]"/> : null}
                    </Link>
                })}
            </ul>
            <div className="flex items-center gap-4">
                <button
                className="text-[13px] bg-[--header-btn-bg] text-[--header-btn-text] py-2 px-4 rounded transition-[.3s] hover:bg-[--header-item-hover]">Explore Cars</button>
                <div className="p-2 bg-[--header-user-bg] shadow-xl rounded group">
                    <FaRegUser className="text-[--header-user-text] transition-[.3s] group-hover:text-[--header-item-hover]"/>
                </div>
            </div>
        </header>
    </div>
  )
}
