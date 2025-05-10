import React, { useEffect, useState } from 'react'
import logo from '../assets/final logo.png'
import sun from '../assets/sun.png'
import ThemeToggle from './ThemeToggle'


const Navbar = () => {
  
  const [isOpen,setIsOpen]=useState(false);

  const toggle =()=>{
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white/30  backdrop-blur shadow-md z-50 flex justify-between items-center px-8 md:px-15 pt-4 dark:bg-black/70">
        <div className='flex flex-row'>
        <img src={logo} alt="logo" className=' h-10 w-10 -mt-2 mb-2' />
        <h1 className="text-1xl font-bold  pl-3 dark:text-white ">Dev / Akhilesh Guleria</h1>
        </div>

         <div className=''> 
        {/*mobile nav*/}
         <div className={`fixed top-0 right-0 w-64  md:hidden  h-screen  transform transition-transform ease-in-out duration-500 ${isOpen? 'translate-x-0':'translate-x-full'}`}>
            <div className={`flex flex-col space-y-2 px-8 pt-12 pb-4 bg-blue-500 h-full`}>
            <a href="#about" className="  hover:text-white dark:text-white">About</a>
            <a href="#projects" className="hover:text-white dark:text-white">Services</a>
            <a href="#contact" className="hover:text-white dark:text-white">Contact</a>
          <ThemeToggle/>
            </div>
        </div>
        {/* hamburger*/}
        <div className="md:hidden flex item-center mb-3 z-30 ">
        <button onClick={toggle} className="text-white focus:outline-none relative z-50">
            <div className="flex flex-col space-y-1.5">
            <div className={`w-6 h-0.5 bg-black dark:bg-white transition-all  ${isOpen?`transform rotate-45 translate-y-2 bg-white`:''}`}></div>
            <div className={`w-6 h-0.5 bg-black dark:bg-white transition-all ${isOpen? `opacity-0`:''}`}></div>
            <div className={`w-6 h-0.5 bg-black dark:bg-white transition-all ${isOpen? `transform -rotate-45 -translate-y-2 bg-white`:''}`}></div>
            </div>
        </button>
        </div>
        </div>
        {/*nav menu*/}
        <ul className=" md:flex gap-10 text-1xl font-bold mb-3 hidden  ">
          <li><a href="#about" className="  hover:text-blue-600 dark:text-white">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 dark:text-white">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:text-white">Contact</a></li>
          <ThemeToggle/>
          
        </ul>
      </nav>
      
    </div>
  )
}

export default Navbar
