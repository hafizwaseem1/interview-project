import React from 'react';
import Navbar from './navbar'; 
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-white">
      {/* Render Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow ">
        {children}
      </main>

      {/* Optional Footer */}
      <footer className="bg-[#2c0909] py-4 px-8 text-center">
        <div className='flex justify-around mb-[2vw]'>
          <div className='text-left'>
            <p className='text-[1.5vw] mb-[1vw] '>Company</p>
            <p>About</p>
            <p>Services</p>
            <p>Works</p>
            <p>Career</p>
          </div>
          <div className='text-left'>
            <p className='text-[1.5vw] mb-[1vw]'>Help</p>
            <p>Customer Support</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className='text-left'>
            <p className='text-[1.5vw] mb-[1vw]'>Resources</p>
            <p>Free ebooks</p>
            <p>Ddevelopment Tutorial</p>
            <p>How To-Blog</p>
            <p>Career</p>
          </div>
        </div>
        <div className='flex justify-between px-2'><p className="text-sm">© Copyright 2024, All Rights Reserved By Redtilt.</p>
        <div className='flex gap-[0.5vw]'><FaTwitter color='white' size={20}/>
        <FaFacebook color='white' size={20}/>
        <FaInstagram color='white' size={20}/>
        <FaGithub color='white' size={20}/>
        </div>
        </div>
        
      </footer>
    </div>
  );
};

export default Layout;
