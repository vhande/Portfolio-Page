import React from 'react'
import Home from './Components/Homepage/Home.js'
import Work from './Components/Homepage/Work.js'
import Contact from './Components/Homepage/Contact.js'
import {Container} from 'react-bootstrap'


function Homepage() {

  return (
      <Container>
        <Home/>
        <Work/>
        <Contact/>
      </Container>
    
  )
}

export default Homepage