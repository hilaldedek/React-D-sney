import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import About from '../pages/About/About'
import Details from '../pages/Details/Details'
import Home from '../pages/Home/Home'


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="detail" element={<Details/>}/>
            <Route path="about" element={<About/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter