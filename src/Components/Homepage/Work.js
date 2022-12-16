import React from 'react'
import {Card,Container} from 'react-bootstrap'
import { SiNetlify} from 'react-icons/si';
import {AiFillGithub} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import {GrLinkPrevious,GrLinkNext} from 'react-icons/gr';


function Work() {
  return (
   <Container id="work" fluid className="section d-flex flex-column justify-content-center align-items-center"> 
   <h6  className="h6 p-3">Work</h6>
   <div className="h2 text-center p-4">Some things I've built</div>
   <Carousel className="p-4" slide={false} variant="dark" interval={null} nextIcon={<GrLinkNext/>} prevIcon={<GrLinkPrevious/>}>
   <Carousel.Item>
    <Card className="d-block mx-auto my-2" style={{maxWidth: '500px'}}>
      <Card.Body>
        <Card.Title>Immo End Project</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Full Stack</Card.Subtitle>
        <Card.Text className="justify-text">
      It's a full stack recreation of a real estate website.<br/>
      <strong>
      Important Note: As I use the free plan of Render, it takes the server 30 seconds to spin up again after a period of inactivity. You'll be able to see the ads that I added to the database in 30 seconds after you click on the link. Thank you for your patience!</strong><br/>
      <strong>Technologies:</strong><br/>
      MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS)<br/>
      Front-end: Ant Design, Bootstrap, Formik, Yup, React Icons, React Router<br/>
      Back-end: bcryptjs, cors, dotenv, firebase-admin, jsonwebtoken, mongoose, multer<br/>
      Photo hosting: Cloud Storage for Firebase<br/>
      Front-end hosting: Netlify<br/>
      Back-end hosting: Render
        </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-around'>
      <a href="https://immo-endproject.netlify.app" className="text-decoration-none text-dark" target='_blank' rel="noreferrer"><SiNetlify/> Check it out</a>
      <a href="https://github.com/vhande/Immo_Project_Backend" className="text-decoration-none text-dark" target='_blank' rel="noreferrer"><AiFillGithub/> GitHub</a> 
      </Card.Footer>
    </Card>
    </Carousel.Item>
    <Carousel.Item>
     <Card className="d-block mx-auto my-2" style={{maxWidth: '500px'}}>
      <Card.Body>
        <Card.Title>Fortune Teller</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">React</Card.Subtitle>
        <Card.Text>
        A frontend game app to find your future husband/wife.<br/>
        <strong>What you can do:</strong><br/>

*Find out the name, age and the location of your future husband/wife.<br/>
*See a photo of your future husband/wife.<br/>
*Be directed to the website sky scanner and check the flights departing from your country to the country of your future husband/wife.<br/>

<strong>Technologies</strong><br/>
React Bootstrap<br/>
Fakerjs<br/>

<strong>APIs:</strong><br/>
Apify API<br/>
IP-API<br/>
Agify.io API<br/>
Nationalise.io API<br/>
Thispersondoesnotexist API

        </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-around'>
      <a href="https://my-fortune-teller.netlify.app" className="text-decoration-none text-dark" target='_blank' rel="noreferrer"><SiNetlify/> Check it out</a>
      <a href="https://github.com/vhande/Fortune-Teller-App" className="text-decoration-none text-dark" target='_blank' rel="noreferrer"><AiFillGithub/> GitHub</a> 
      </Card.Footer>
     </Card>
    </Carousel.Item>
    <Carousel.Item>
     <Card className="d-block mx-auto my-2" style={{maxWidth: '500px'}}>
      <Card.Body>
        <Card.Title>Books and Quiz</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">React</Card.Subtitle>
        <Card.Text>
        A frontend project with ReactJS.<br/>

<strong>What you can do:</strong><br/>
*Search books using the customised search bar by category and name.<br/>
*Do a 10 question quiz to test your knowledge about books.<br/>

<strong>APIs:</strong><br/>
Google Books API<br/>
Open Trivia Database API<br/>

<strong>Technologies:</strong><br/>
React Bootstrap<br/>
React Router Dom<br/>
React Icons<br/>
React Multi Carousel

        </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-around'>
      <a href="https://my-books-project.netlify.app" className="text-decoration-none text-dark" target='_blank' rel="noreferrer"><SiNetlify/> Check it out</a>
      <a href="https://github.com/vhande/Books-Quiz-Frontend" className="text-decoration-none text-dark" target='_blank' rel="noreferrer"><AiFillGithub/> GitHub</a> 
      </Card.Footer>
     </Card>
    </Carousel.Item>
    </Carousel>
   </Container>
  )
}

export default Work