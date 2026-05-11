import React from 'react'
import background_home_image from '../assets/background_home_image.png'

const Home = () => {
  return (
    <section className='min-h-screen bg-no-repeat bg-center w-full bg-cover flex items-center' style={{backgroundImage:`url(${background_home_image})`}}>
    <div className='px-28 py-24 '> 


      <h5 className='text-4xl text-black mb-4 font-medium'>Hi, I'm Atharva Harne! </h5>
      <h1 className='text-6xl font-bold text-gray-600'>Backend Developer</h1>

      <p className="mt-4 max-w-xl text-gray-600 ">
        Passionate backend developer focused on building scalable, efficient, and secure server-side applications.
         Constantly learning new technologies and best practices to improve system performance, 
        reliability, and code quality.
      </p>
      <a
        href="/resume.pdf"
        download="Atharva_Harne_Resume.pdf"
        className='mt-8 inline-block text-lg font-bold border border-gray-500 rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-300'
      >
        Get Resume ↓
      </a>
    </div>
    </section>
  )
}

export default Home
