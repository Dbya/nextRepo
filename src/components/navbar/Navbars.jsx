import React, { useState } from 'react'
import './navbar.css';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap';
import { NavLink } from 'react-bootstrap';

const Navbars = () => {
//   const[ modal, setModal] = useState(false);
//  const admit=()=>{
//    setModal(!modal);
  
//  }

  return (
     <>

<Navbar bg="light" expand="lg" fixed="top" >
  <Container fluid>
    <Navbar.Brand href="/">101<span>infoTech</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarscroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/service" >Service</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <NavDropdown title="More" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Carrer</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Work</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
           Teams
          </NavDropdown.Item>
          {/* <NavDropdown.Item href="#action5">
            Blogs
          </NavDropdown.Item> */}
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        {/* <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        /> */}
         <Nav.Link href="/signup"> <Button variant="outline-success">Login</Button></Nav.Link>
        {/* <Button variant="outline-success">Login</Button> */}
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
     </>
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//   <div className="container">
//     <NavLink className="navbar-brand" to="/">infoTech</NavLink>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <NavLink activeclassname="menu_item"  className="  nav-link "aria-current="page" to="/home" >Home</NavLink>
//         </li>
//         {/* <li className="nav-item">
//           <NavLink  activeclassname="menu_item" exact="true" className=" nav-link" to="/about">About</NavLink>
//         </li> */}
//         <li className="nav-item">
//           <NavLink activeclassname="menu_item"   className=" nav-link" to="/service">Service</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink activeclassname="menu_item"  className=" nav-link" to="/contact">Contact</NavLink>
//         </li>
        
        
//       </ul>
//       <form className="d-flex">
//         {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
//         <NavLink  className=" nav-link" to="/signup"><button className="btn btn-outline-success " type="button"  >SIGNUP</button></NavLink>
//         {/* <button className="btn btn-outline-success " onClick={admit} type="button"  >SIGNUP</button> */}
//       </form>
//     </div>
//   </div>
// </nav>
// {/* { modal && <Signup/> } */}
//     </div>
  )
}

export default Navbars