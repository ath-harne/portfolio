import React from 'react'
import about_image from '../assets/about_image.avif'
import { Form, useNavigate } from 'react-router-dom'



const About = () => {
   const navigation=useNavigate()
  return (
     <div>
    <div className=' sm:flex flex-col md:flex flex-row justify-items-center  mt-40 sm:gap-10 md:gap-6 '>


      <div className='w-full md:w-1/2 '>
     <img src={about_image} className='w-full rounded-3x1 px-10  md:px-10    '></img>
      </div>

      <div className='flex flex-col gap-6 md:max-w-1/2 px-4 '>
    <h1  className='text-3xl font-bold  '>Hii ,I'm Atharva Harne</h1>
    <p className='text-xl text-justify leading-relaxed md:leading-loose  text-gray-700'> I’m a passionate backend developer focused on building scalable, secure, and high-performance server-side applications.
      I enjoy designing robust APIs, working with databases, and optimizing system performance to deliver reliable solutions. 
      With a strong foundation in backend technologies and problem-solving, I strive to write clean, maintainable code that supports real-world applications
      and seamless user experiences. 
      I’m continuously learning and adapting to new tools and architectures to grow as a developer and contribute effectively to modern software systems.</p>
      </div>

    </div>
    <div className='flex justify-between items-center p-6 mt-30'>
      <div className='px-6'>
        <button onClick={()=>navigation('/')} className='rounded-2xl px-6 py-2 text-white border bg-gray-500 hover:scale-110 transition-all duration-300 cursor-pointer'>
         <p></p> <p>-Home</p></button>
      </div>

      <div >
        <button onClick={()=>navigation('/skills')} className='px-6 py-2 rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer bg-black text-white'>Skills</button>
      </div>
    </div>
    </div>
   
  )
}

export default About
