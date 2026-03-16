import React from 'react'
import node_favicon from '../assets/node_favicon.svg'
import tailwind_favicon from '../assets/tailwind_favicon.svg'
import react_favicon from '../assets/react_favicon.svg'
import exprees_favicon from '../assets/exprees_favicon.svg'

const Framework = () => {
  return (
    
       <section className='px-20 py-10'>
                  <h1 className=' text-center flex items-center justify-center font-bold text-2xl py-4 px-4'>FRAMEWORK</h1>
                  <div className=' grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center'>
                    
                    
                       <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
                 flex items-center justify-center' >
                  <img src={exprees_favicon}
                  alt='node' 
                  className='w-20 h-20 object-contain'></img></div>
                
      
                       <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
                 flex items-center justify-center' >
                  <img src={react_favicon}
                  alt='node' 
                  className='w-20 h-20 object-contain'></img></div>
                  
      
                       <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
                 flex items-center justify-center' >
                  <img src={node_favicon}
                  alt='node' 
                  className='w-20 h-20 object-contain'></img></div>
      
      
                   <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
                 flex items-center justify-center' >
                  <img src={tailwind_favicon}
                  alt='node' 
                  className='w-20 h-20 object-contain'></img></div>
                  </div>
                
        </section>
                  
              
    
  )
}

export default Framework
