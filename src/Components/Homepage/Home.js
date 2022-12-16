import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'


function Home() {
  return (
        <Container fluid id="home" className="section d-flex flex-column justify-content-center align-items-center">
         <img src="https://i.postimg.cc/brzqYsM8/6-FA29518-8-B55-423-A-8-B21-DA977295-FC47.jpg" className="img-fluid w-25 m-4"/>
        <div className="display-3">Hande Vanhove</div>
        <div className="display-6 py-1">Web Developer</div>
        <p className="lead px-4 py-2">The day where I made a basic calculator using C++, I came to a very important decision. I was going to become a developer. Since that day, I discover the world of programming, and I enjoy every second of it. The projects that you are about to see are the result of a great "passion" and "hard work".</p>

        </Container>
     
       
  )
}

export default Home