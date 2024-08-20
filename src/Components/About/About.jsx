import React from 'react'
import { Zoom , Fade, Bounce} from 'react-reveal'
import dp from '../../assets/dp.jpg'

function About() {
  return (
    <div id="About">
      <div className='w-full bg-white h-screen'>
         <div className='about-passage pt-12 md:pt-12'>
          <Zoom up duration={1000} delay={100}>
            <h1 className=' text-4xl flex justify-center pt-10 underline underline-offset-8 decoration-yellow-400 text-black font-bold'>ABOUT ME</h1>
            </Zoom>
            
            <div className='flex flex-col md:flex md:flex-row pt-0 md:pt-10'>
            <Bounce left duration={1000} delay={600}>
            <img src={dp} alt="profile" className='w-3/4 md:w-2/6 xl:w-1/4 mt-10 ml-11 xl:ml-24 rounded-xl shadow-xl shadow-black' />
            </Bounce>
            <div className='flex flex-col pl-4'>
            <Bounce right duration={1000} delay={1000}>
            <p className=' text-sm text-left mt-10 px-2 md:mt-16 md:text-left lg:text-lg lg:mt-20 xl:text-2xl xl:mt-24 xl:pr-20 text-black'>Hi there! I'm <span className='text-orange-600 font-bold'>Mugunthan</span>, a passionate Front-End Developer with a keen eye for design and a love for crafting user-friendly web experiences. With a strong foundation in HTML, CSS, BootStrap, TailwindCSS, Javascript and React, I specialize in bringing creative ideas to life through clean, efficient code.</p>
            <p className=' hidden md:block px-2 pt-2 text-sm md:text-sm md:text-left lg:text-lg xl:text-2xl xl:pt-6 xl:pr-16 text-black'>I thrive in dynamic environments where I can collaborate with designers, back-end developers, and stakeholders to build responsive, accessible, and visually appealing websites. Whether it's developing a sleek landing page, enhancing a web application's user interface, or optimizing site performance, I approach each project with a focus on delivering exceptional user experiences.</p>
            </Bounce>
            </div>
            </div>
           
         </div>
      </div>
    </div>
  )
}

export default About