import React from 'react'
import { skillsjson } from './skillsjson'
import {Box} from '@mui/material'
import { LinearProgress } from '@mui/material'
import { Bounce } from 'react-reveal'
import { Fade } from 'react-reveal'


function Skills() {
  return (
    <div id="Skills">
        <div className="bg-black md:bg-gradient-to-r from-black to-white  w-full h-screen mt-10">
          <Bounce top>
          <h1 className=' text-4xl pb-16 lg:pb-10 flex justify-center pt-14 underline underline-offset-8 decoration-yellow-400 font-bold text-white'>SKILLS</h1>
          </Bounce>
              <div>
                <div className='flex w-full'>
                  <div className='flex w-full flex-col ml-2 md:ml-14 md:mr-14 md:mt-5 lg:ml-40 lg:mr-40 lg:mt-7 '>
                  <Fade left smooth={true} duration={1000} delay={100}>
                  <div className='flex w-full md:ml-0'>
                  <img src={skillsjson.html.img} alt="html" className='w-10  ml-5 md:w-12 lg:w-16 xl:mt-0 content-center'  />
                  <Box className="w-full content-center ml-3">
                  <LinearProgress color='success' variant='determinate' value={99}/>
                  </Box>
                  <h1 className='flex my-auto ml-6 pr-5 text-white'>99%</h1>
                  </div>
                  </Fade>
                  
                  <Fade left smooth={true} duration={1000} delay={500}>
                  <div className='flex w-full mt-5 md:mt-7'>
                  <img src={skillsjson.css.img} alt="html" className='w-12  ml-4 md:w-14 lg:w-16 xl:mt-0 content-center'  />
                  <Box className="w-full content-center ml-3">
                  <LinearProgress color='success' variant='determinate' value={90}/>
                  </Box>
                  <h1 className=' flex my-auto ml-6 pr-5 text-white'>90%</h1>
                  </div>
                  </Fade>

                  <Fade left smooth={true} duration={1000} delay={1000}>
                  <div className='flex w-full mt-5 md:mt-7'>
                  <img src={skillsjson.js.img} alt="html" className='w-12  ml-5 md:w-14 lg:w-16 xl:mt-0 content-center'  />
                  <Box className="w-full content-center ml-3">
                  <LinearProgress color='warning' variant='determinate' value={70}/>
                  </Box>
                  <h1 className='flex my-auto ml-6 pr-5 text-white'>70%</h1>
                  </div>
                  </Fade>

                  <Fade left smooth={true} duration={1000} delay={1500}>
                  <div className='flex w-full mt-5 md:mt-7'>
                  <img src={skillsjson.Bootstrap.img} alt="html" className='w-12  ml-5 md:w-12 lg:w-16 xl:mt-0 content-center'  />
                  <Box className="w-full content-center ml-3">
                  <LinearProgress color='primary' variant='determinate' value={85}/>
                  </Box>
                  <h1 className='flex my-auto ml-6 pr-5 text-white'>85%</h1>
                  </div>
                  </Fade>

                  <Fade left smooth={true} duration={1000} delay={2000}>
                  <div className='flex w-full mt-5 md:mt-7'>
                  <img src={skillsjson.react.img} alt="html" className='w-12  ml-5 md:w-12 lg:w-16 xl:mt-0 content-center'  />
                  <Box className="w-full content-center ml-3">
                  <LinearProgress color='warning' variant='determinate' value={78}/>
                  </Box>
                  <h1 className='flex my-auto ml-6 pr-5 text-white'>78%</h1>
                  </div>
                  </Fade>
                  </div>  
                  <div className='text-white hidden md:block w-3/4'>
                    <img src={skillsjson.computer.img} className=' w-3/4 mr-10 mt-14 lg:mt-32 md:mt-32' />
                  </div>
                </div>
              </div>
          </div>
        </div>
  )
}

export default Skills