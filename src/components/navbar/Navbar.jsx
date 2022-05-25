import React, { useState } from 'react'

import { NavLink } from 'react-router-dom';
import './navbar.css';
import Signup from './Signup';

const Navbar = () => {
//   const[ modal, setModal] = useState(false);
//  const admit=()=>{
//    setModal(!modal);
  
//  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">
    <NavLink className="navbar-brand" to="/">infoTech</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeclassname="menu_item" exact="true" className="  nav-link "aria-current="page" to="/home">Home</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink  activeclassname="menu_item" exact="true" className=" nav-link" to="/about">About</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink activeclassname="menu_item" exact="true"  className=" nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeclassname="menu_item" exact="true" className=" nav-link" to="/contact">Contact</NavLink>
        </li>
        
        
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
        <NavLink exact="true" className=" nav-link" to="/signup"><button className="btn btn-outline-success " type="button"  >SIGNUP</button></NavLink>
        {/* <button className="btn btn-outline-success " onClick={admit} type="button"  >SIGNUP</button> */}
      </form>
    </div>
  </div>
</nav>
{/* { modal && <Signup/> } */}
    </div>
  )
}

export default Navbar