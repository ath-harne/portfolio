import React from 'react'
import about_image from '../assets/about_image.jpg'
import { Form, useNavigate } from 'react-router-dom'



const About = () => {

  return (
    <div>
      <div className=' flex flex-col md:flex-row items-start mt-40 gap-4'>


        <div className='w-full md:w-[45%]  flex justify-center '>
          <img src={about_image} className='w-full max-w-sm h-[420px] object-cover rounded-xl shadow-lg  '></img>
        </div>

        <div className='flex flex-col gap-4 md:max-w-1/2 px-4 '>
          <h1 className='text-3xl font-bold  '>Hii ,I'm Atharva Harne</h1>
          <p className='text-xl text-justify leading-relaxed md:leading-loose  text-gray-700'> I’m a passionate backend developer focused on building scalable, secure, and high-performance server-side applications.
            I enjoy designing robust APIs, working with databases, and optimizing system performance to deliver reliable solutions.
            With a strong foundation in backend technologies and problem-solving, I strive to write clean, maintainable code that supports real-world applications
            and seamless user experiences.
            I’m continuously learning and adapting to new tools and architectures to grow as a developer and contribute effectively to modern software systems.</p>

         
        </div>



      </div>



    </div>

  )
}

export default About
