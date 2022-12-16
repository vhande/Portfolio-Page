import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { HashLink as NavLink} from 'react-router-hash-link'
import {Link} from 'react-router-dom'

function Header() {
    
    return (
        
        <>
        <Navbar className="justify-content-center fixed-top">
            <Nav variant="pills" defaultActiveKey="#home">
            <NavLink className="nav-link" to="/#home">Home</NavLink>
            <NavLink className="nav-link" to="/#work">Work</NavLink>
            <NavLink className="nav-link" to="/#contact">Contact</NavLink>
            <a className="nav-link" href="/resume">Resume</a> 
            </Nav>
            </Navbar>
      
        </>
    )
}

export default Header