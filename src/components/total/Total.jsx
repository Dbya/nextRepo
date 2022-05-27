import React from 'react'
import Home from '../home/Home'

import Service from '../service/Service';
import Contact from '../contact/Contact';
// import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbars from '../navbar/Navbars';
import Signup from '../navbar/Signup';
import {Routes, Route,Navigate} from 'react-router-dom';
import './total.css'; 

const Total = () => {
  return (
    <>
    
     <Navbars />
     <Routes>
     
         <Route  path='/home' element={<Home />} /> 
         
         <Route path='/service' element={<Service />} /> 
         <Route  path='/contact' element={<Contact />} /> 
        
         <Route exact path='/signup' element={<Signup />} /> 
         <Route exact path="/" element={<Navigate replace to="/home" />} />
    </Routes>
    
    </>
  )
}

export default Total;