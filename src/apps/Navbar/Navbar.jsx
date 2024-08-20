import { faBars } from '@fortawesome/free-solid-svg-icons' 
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
    const [isclick,setisClick] = useState(false)
  return (
    <div className='bg-white  h-16 flex flex-1 w-full shadow-sm shadow-black fixed top-0 left-0 z-50'> 
    <h1 className='text-2xl w-full mt-5 ml-5 md:ml-10 lg:ml-16 xl:ml-24 flex md:flex-1 md:text-2xl lg:text-3xl lg:mt-4 md:mt-5 font-Satisfy'>Time To Work</h1>
         <ul className='hidden md:flex sm:flex-col md:flex-row lg:flex-row justify-end gap-6 z-50 sm:pr-0 md:pr-10 lg:pr-24 text-lg md:text-sm md:mt-2 xl:text-lg pt-3 font-Poppins'>
            <Link to="Home" className='md:px-1 lg:px-4 group relative w-max h-fit cursor-pointer '>
            <span className='absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-orange-600 group-hover:w-3/6'></span>
            <span className='absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-orange-600 group-hover:w-3/6'></span>
            Home</Link>
            <Link to="About" smooth={true} duration={500} className='md:px-1 lg:px-4 group relative w-max h-fit cursor-pointer'>
            <span className='absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-orange-600  group-hover:w-3/6'></span>
            <span className='absolute -bottom-1 right-1/2 w-0 transition-all h-1  bg-orange-600 group-hover:w-3/6'></span>
            About</Link>
            <Link to="Skills"  smooth={true} duration={500}  className='md:px-1 lg:px-4  group relative w-max h-fit cursor-pointer'>
            <span className='absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-orange-600 group-hover:w-3/6'></span>
            <span className='absolute -bottom-1 right-1/2 w-0 transition-all h-1  bg-orange-600 group-hover:w-3/6'></span>
            Skills</Link>
            <Link to="Projects"  smooth={true} duration={500} className='md:px-1 lg:px-4  group relative w-max h-fit cursor-pointer'>
            <span className='absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-orange-600 group-hover:w-3/6'></span>
            <span className='absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-orange-600 group-hover:w-3/6'></span>
            Projects</Link>
            <Link to="Contact"  smooth={true} duration={500} className='md:px-1 lg:px-4  group relative w-max h-fit cursor-pointer'>
            <span className='absolute -bottom-1 left-1/2 w-0 transition-all h-1  bg-orange-600 group-hover:w-3/6'></span>
            <span className='absolute -bottom-1 right-1/2 w-0 transition-all h-1  bg-orange-600 group-hover:w-3/6'></span>
            Contact Me</Link>
         </ul>
         <button className='text-3xl md:hidden lg:hidden flex justify-end mt-4  mr-10 w-full' onClick={()=> setisClick(!isclick)}><FontAwesomeIcon icon={faBars} /></button>
         <div className={`absolute xl:hidden top-12 left transition ease-in duration-300 bg-white flex justify-center w-full h-fit items-center ${isclick ? "opacity:100" : "opacity-0" }`}>
         <ul className='flex flex-col sm:pr-0 md:pr-10 lg:pr-24 text-lg pt-3'>
            <Link to="/" className='md:px-1 lg:px-4 group relative w-max h-fit hover:text-orange-600'>
            Home</Link>
            <Link to="About"  smooth={true} duration={500}  className='py-2 hover:text-orange-600'>
            About</Link>
            <Link to="Skills"  smooth={true} duration={500}  className='py-2 hover:text-orange-600'>
            Skills</Link>
            <Link to="Projects"  smooth={true} duration={500} className='py-2 hover:text-orange-600'>
            Projects</Link>
            <Link to="Contact"  smooth={true} duration={500} className='py-2 pb-4 hover:text-orange-600'>
            Contact</Link>
         </ul>
         </div>
    </div>
  )
}

export default Navbar