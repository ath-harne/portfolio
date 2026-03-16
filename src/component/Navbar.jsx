import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav >
    <div className='nav  font-medium text- flex items-center justify-between px-8 py-8 absolute top-0 left-0 w-full z-50 
  
'>
        
    <ul className=' flex gap-6  font-medium'>

<NavLink to='/'>
    <li className='hover:text-yellow-400 cursor-pointer'>HOME</li>
    <hr/>
</NavLink>

<NavLink to='/about'>
    <li className='hover:text-yellow-400 cursor-pointer'>ABOUT</li>
    <hr/>
</NavLink>

<NavLink to='/skills'>
    <li className='hover:text-yellow-400 cursor-pointer' >SKILLS</li>
    <hr/>
</NavLink>

<NavLink to='/projects'>
    <li className='hover:text-yellow-400 cursor-pointer'>PROJECT</li>
    <hr/>
</NavLink>

<NavLink to='/contact' >
    <li className='hover:text-yellow-400 cursor-pointer'>CONTACT</li>
    <hr/>
</NavLink>


 </ul>
 
      
    </div>
    </nav>
  )
}

export default Navbar
