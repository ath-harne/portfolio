import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import About from './pages/About'
import Navbar from './component/Navbar'

const App = () => {
  return (
  
    <div className='port '>
      <Navbar/>
    <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/contact' element={<Contact/>} />
   <Route path='/skills' element={<Skills/>} />
   <Route path='/projects' element={<Projects/>} />
   <Route path='/about' element={<About/>} />
   


    </Routes>
    </div>
  )
}

export default App
