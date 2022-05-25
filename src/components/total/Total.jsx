import React from 'react'
import Home from '../home/Home'
import About from '../about/About';
import Service from '../service/Service';
import Contact from '../contact/Contact';
// import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from '../navbar/Navbar';
import Signup from '../navbar/Signup';
import {Routes, Route,Navigate} from 'react-router-dom';
import './total.css'; 

const Total = () => {
  return (
    <>
    
     <Navbar />
     <Routes>
     
         <Route exact path='/home' element={<Home />} /> 
         <Route exact path='/about' element={<About />} /> 
         <Route exact path='/service' element={<Service />} /> 
         <Route exact path='/contact' element={<Contact />} /> 
        
         <Route exact path='/signup' element={<Signup />} /> 
         <Route exact path="/" element={<Navigate replace to="/home" />} />
    </Routes>
    
    </>
  )
}

export default Total;