import React from 'react'
import html_favicon from '../assets/html_favicon.svg'
import css_favicon from '../assets/css_favicon.svg'
import mysql_favicon from '../assets/mysql_favicon.svg'
import cplusplus_favicon from '../assets/cplusplus_favicon.svg'
import javascript_favicon from '../assets/javascript_favicon.svg'
import python_favicon from '../assets/python_favicon.svg'
import Framework from '../component/Framework'
import Tools from '../component/Tools'
// import node_favicon from '../assets/node_favicon.svg'
const Skills = () => {
  return (
    <section className='py-20 px-80'>
        <h1 className='flex items-center justify-center text-center mt-16 py-4 font-bold text-2xl'>LANGUAGES</h1>
        <div className='grid grid-cols-3 md:grid-cols-6  gap-8'> 

           

          
               <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
           flex items-center justify-center'>
            <img src={cplusplus_favicon}
            alt='c++'
            className='w-20 h-20 object-contain'></img>
           </div>

             <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
           flex items-center justify-center'>
            <img src={python_favicon}
            alt='python'
            className='w-20 h-20 object-contain'></img>
           </div>

          <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
           flex items-center justify-center'>
            <img src={javascript_favicon}
            alt='js'
            className='w-20 h-20 object-contain'></img>
           </div>

             <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
           flex items-center justify-center'>
            <img src={mysql_favicon}
            alt='mysql'
            className='w-20 h-20 object-contain'></img>
           </div>

            <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
           flex items-center justify-center' >
            <img src={html_favicon}
            alt='html' 
            className='w-20 h-20 object-contain'></img>
            
           </div>

           <div className='w-28 h-28 bg-white rounded-xl shadow-xl hover:scale-120 transition transform duration-300
           flex items-center justify-center'>
            <img src={css_favicon}
            alt='css'
            className='w-20 h-20 object-contain'></img>
           </div>

          </div>

             
        
<Framework/>
<Tools/>
    </section>
    
   
  )
}

export default Skills
