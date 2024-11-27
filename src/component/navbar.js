import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi"; // For mobile menu icon
import { MdCancel } from "react-icons/md"; // For mobile menu close icon
import { IoMoonOutline } from "react-icons/io5";

import logo from '../assets/logo.png'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            {/* Navbar for Larger Screens */}
            <div className="bg-[#170505] transition-shadow duration-300 hover:shadow-xl shadow-black h-auto p-3 hidden md:flex lg:flex justify-between items-center">
                <img src={logo} className="w-20 ml-12" alt="logo"  />
                <div className="flex gap-7 text-white">

                    <a className="text-[15px] md:text-[1.3vw]" href="/">Services</a>
                    <a className="text-[15px] md:text-[1.3vw]" href="/about">Reviews</a>
                    <a className="text-[15px] md:text-[1.3vw]" href="/contact">Blog</a>
                    <a className="text-[15px] md:text-[1.3vw]" href="/jobs">Jobs</a>
                </div>
                <div className="flex">
                    <div  className="border rounded-md border-[#6b1a1a] w-[3vw] pl-[0.7vw] pt-[0.70vw] mr-[1vw]">
                <IoMoonOutline size={20} color="white" />
                </div>
                    <button className="bg-[#0c0303] hover:text-[#e4e4e4] hover:bg-transparent border border-[#0c0303] text-[2vw] md:text-[1.5vw] py-1 px-3 rounded-md">
                        <a href="/contact">Start a project</a>
                    </button>
                </div>
            </div>

            {/* Navbar for Mobile Screens */}
            <div className="bg-[#170505] p-3 md:hidden">
                <div className="flex justify-between items-center">
                    <img src={logo} className="w-33 ml-12" alt="logo" />

                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <MdCancel size={30} color="white" />
                        ) : (
                            <HiMenuAlt3 size={30} color="white" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Links */}
                {isMenuOpen && (
                    <div className="flex flex-col items-center gap-5 mt-4 text-white">
                        <a className="text-[18px]" href="/" onClick={toggleMenu}>Services</a>
                        <a className="text-[18px]" href="/about" onClick={toggleMenu}>Reviews</a>
                        <a className="text-[18px]" href="/services" onClick={toggleMenu}>Blog</a>
                        <a className="text-[18px]" href="/jobs" onClick={toggleMenu}>Jobs</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
