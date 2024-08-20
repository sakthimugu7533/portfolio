import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import dp from '../../assets/dp.jpg'
import { Fade } from 'react-reveal'

function Home() {
    
  return (
    <div id='Home'>
    <div className='bg-black w-full h-screen flex'>
        <div className='hidden md:block pt-24 ml-6 md:pt-72 md:ml-24 lg:ml-14 lg:mt-10 xl:ml-24 xl:pt-60 w-full'>
          <Fade left>
        <h2 className='text-white font-Poppins text-lg md:text-2xl lg:text-4xl xl:text-4xl pb-2 '>Hello,It's Me</h2>
        </Fade>
        <Fade left>
        <h1 className='text-white font-Poppins text-lg md:text-2xl lg:text-7xl xl:text-8xl pb-2 lg:pb-4'>Mugunthan</h1>
        </Fade>
        <Fade left>
        <h2 className='text-white font-Poppins text-lg md:text-xl lg:text-2xl xl:text-4xl'>And I'm a <TypeAnimation sequence={[
            'Frontend Developer',1000,
        ]}
        speed={6}
        repeat={Infinity}></TypeAnimation> </h2>
        </Fade>
        <a href="#_" class="relative  items-center justify-start inline-block px-2 py-1 xl:px-6 xl:py-2 xl:mt-6 overflow-hidden font-bold rounded-full group mt-2">
        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">DOWNLOAD CV</span>
        <span class="absolute inset-0 border-2 border-white rounded-full"></span>
        </a>
    </div>
    <div className='w-full flex flex-col'>
      <Fade right>
        <img src={dp} alt="profile_pic" className='rounded-full border-8 border-yellow-300 border-solid w-3/4 md:w-3/4 md:ml-10 mx-auto  mt-40 md:mt-52  xl:mt-32 xl:w-4/6'/>
        </Fade>
        <Fade left>
        <h1 className='text-white flex justify-center text-3xl font-Satisfy mt-2 md:hidden'>Mugunthan</h1>
        <h2 className='text-white font-Poppins text-lg flex justify-center mt-3 md:hidden'>I'm a &nbsp;<TypeAnimation sequence={[
            'Frontend Developer',1000,
        ]}
        speed={6}
        repeat={Infinity}></TypeAnimation> </h2>
        </Fade>
        <a href="#_" class="relative flex items-center mx-auto  md:hidden px-2 py-2 overflow-hidden font-bold rounded-full group text-xs mt-6">
<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">DOWNLOAD CV</span>
<span class="absolute inset-0 border-2 border-white rounded-full"></span>
</a>
    </div>
    </div>
    </div>
   
   
  )
}

export default Home