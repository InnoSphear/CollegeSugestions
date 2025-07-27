import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Footer from './components/Footer'
import MedicalTopTenGov from './Pages/MedicalTopTenGov'
import MedicalTopTenPvt from './Pages/MedicalTopTenPvt'



const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/toptengov' element={<MedicalTopTenGov/>}/>
        <Route path='/toptenpvt' element={<MedicalTopTenPvt/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
