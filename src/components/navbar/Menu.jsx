import React from 'react'
import { Container, Navbar ,Nav  } from 'react-bootstrap'
import './menu.css'
import logo from '../../assets/logo.png'
import { FaCloudDownloadAlt } from "react-icons/fa";



const Menu = () => {
  return (
    <Navbar expand="lg" className='main_manu'>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#home">Service</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="donbtn">
        <a href="#"><FaCloudDownloadAlt className='icon' /> Download</a>
      </div>
    </Container>
  </Navbar>
  )
}

export default Menu
