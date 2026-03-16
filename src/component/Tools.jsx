import React from 'react'
import visual_favicon from '../assets/visual_favicon.svg'
import git_favicon from '../assets/git_favicon.svg'
import github_favicon from '../assets/github_favicon.svg'
import tailwind_favicon from '../assets/tailwind_favicon.svg'
import workbench_favicon from '../assets/workbench_favicon.jpeg'
import postman_favicon from '../assets/postman_favicon.svg'

const Tools = () => {
  return (
    <div>
       <section className='px-6 py-'>
                        <h1 className=' text-center flex items-center justify-center font-bold text-2xl py-4 px-4'>TOOLS</h1>
                        <div className=' grid grid-cols-3 md:grid-cols-5 gap-12 place-items-center'>
                          
                          
                             <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
                       flex items-center justify-center' >
                        <img src={visual_favicon}
                        alt='node' 
                        className='w-20 h-20 object-contain'></img></div>
                      
            
                             <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
                       flex items-center justify-center' >
                        <img src={git_favicon}
                        alt='node' 
                        className='w-20 h-20 object-contain'></img></div>
                        
            
                             <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
                       flex items-center justify-center' >
                        <img src={github_favicon}
                        alt='node' 
                        className='w-20 h-20 object-contain'></img></div>
            
            
                         <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
                       flex items-center justify-center' >
                        <img src={workbench_favicon}
                        alt='node' 
                        className='w-20 h-20 object-contain'></img></div>
                        

                        
                         <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
                       flex items-center justify-center' >
                        <img src={postman_favicon}
                        alt='node' 
                        className='w-24 h-24 object-contain'></img></div>
                        </div>
                        
                      
              </section>
    </div>
  )
}

export default Tools
