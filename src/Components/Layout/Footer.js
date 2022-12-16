import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

function Footer() {
  return (
    <Navbar variant="dark" className="fixed-bottom justify-content-center p-0">
    <Nav>
    <Nav.Link className="nav-link" href="https://github.com/vhande" target="_blank" ><AiFillGithub fill="white" className="h3"/></Nav.Link>
    <Nav.Link className="nav-link" href="https://www.linkedin.com/in/hande-vanhove" target="_blank"><AiFillLinkedin fill="white" className="h3"/></Nav.Link>
    </Nav>
    </Navbar>
  )
}

export default Footer