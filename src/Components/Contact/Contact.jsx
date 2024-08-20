import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp ,faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Fade, Bounce } from 'react-reveal';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_kjietqe', 
        'template_flp0uau',
         form.current, 
        {publicKey: '6sG_73CTBtRKHO5sr'})
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='Contact'>
    <div className='w-full h-80 md:h-96 lg:h-full bg-black'>
      <Bounce top>
        <h1 className='text-white flex justify-center text-4xl font-bold pt-5 underline underline-offset-8 decoration-yellow-400'>CONTACT</h1>
        </Bounce>
        <div className='lg:flex lg:justify-center mt-16 '>
        <div className='w-full lg:pl-10 lg:w-2/4 '>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col  w-fll lg:w-2/4 mt-0  lg:ml-16'>
          <Fade left duration={1000} delay={100}>
          <input type="text" name="user_name" placeholder='Name' className='w-2/3 lg:w-5/6 border border-black rounded-md mb-4 mx-auto mt-10 lg:p-3 ' />
          </Fade>
          <Fade left duration={1000} delay={500}>
          <input type="email" name="user_email" placeholder='Email Id'className='w-2/3 lg:w-5/6 border border-black rounded-md mb-4 mx-auto lg:p-3'/>
          </Fade>
          <Fade left duration={1000} delay={1000}>
          <textarea name="message" placeholder='Message' className='w-2/3 lg:w-5/6 mb-4 mx-auto rounded-sm lg:p-3 border border-black' />
          </Fade>
          <Fade left duration={1000} delay={1500}>
          <input type="submit" value="Send" className='text-white font-bold border border-black w-20 rounded-lg mx-auto bg-yellow-400 hover:bg-white hover:text-orange-600 lg:p-2'/>
          </Fade>
          </form>
        </div>
        <div className="md:hidden flex gap-2 mt-3">
          <Bounce right duration={1000} delay={100}>
        <a href="https://wa.me/7639000740" target='_blank'><FontAwesomeIcon icon={faWhatsapp} className='text-green-500 text-2xl ml-14'/></a>
        </Bounce>
        <Bounce right duration={1000} delay={500}>
        <a href="tel:7639000740" className='text-white text-md ml-1 mt-1 flex'><FontAwesomeIcon icon={faPhone} className='text-white mt-1 ml-0'/>+917639000740</a>
        </Bounce>
        <Bounce right duration={1000} delay={1000}>
        <a href="https://github.com/sakthimugu" target='_blank'><FontAwesomeIcon icon={faGithub} className='text-violet-500 text-2xl '/></a>
        </Bounce>
        <Bounce right duration={1000} delay={1500}>
        <a href="https://www.linkedin.com/in/mugunthan-m-28164a2b1/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='text-blue-500 text-2xl '/></a>
        </Bounce>
        </div>
        <div className="hidden md:flex lg:flex lg:flex-col lg-ml-0 mt-7 lg:mt-0 justify-center gap-5 lg:w-1/4">
        <Bounce right duration={1000} delay={100}>
        <a href="https://wa.me/7639000740" target='_blank'><button className='text-white border rounded-lg bg-green-500 px-2 py-1'><FontAwesomeIcon icon={faWhatsapp} className=''/>Whatsapp</button></a>
        </Bounce>
        <Bounce right duration={1000} delay={500}>
        <a href="tel:7639000740" className='text-white'><FontAwesomeIcon icon={faPhone} className='text-white'/>+917639000740</a>
        </Bounce>
        <Bounce right duration={1000} delay={1000}>
        <a href="https://github.com/sakthimugu" target='_blank'><button className='text-white border rounded-lg bg-violet-500 px-2 py-1'><FontAwesomeIcon icon={faGithub} className=''/>GitHub</button></a>
        </Bounce>
        <Bounce right duration={1000} delay={1500}>
        <a href="https://www.linkedin.com/in/mugunthan-m-28164a2b1/" target='_blank'><button className='text-white border rounded-lg bg-blue-500 px-2 py-1'><FontAwesomeIcon icon={faLinkedin} className=''/>Linkedin</button></a>
        </Bounce>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Contact