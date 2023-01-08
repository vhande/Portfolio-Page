import React from 'react'
import * as emailjs from 'emailjs-com';
import {Container, Form, Button,FloatingLabel} from 'react-bootstrap'
import {useRef} from 'react'

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.ENV.serviceID, process.ENV.templateID, form.current, process.ENV.publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <Container fluid id="contact" className="section d-flex flex-column justify-content-center align-items-center">
        <h6 className="h6 p-3">Contact</h6>
        <div className="h3 pt-4">Do you have a question or just want to say hi?</div>
        <div className="h4">I'd love to hear from you!</div>
        <Container className="bg-light m-4" style={{maxWidth: '600px'}}>
        <Form ref={form} onSubmit={sendEmail} className="p-3">
        <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" className="rounded-0" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="forEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="rounded-0" name="email" />
        <Form.Text className="text-muted">
          I'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="forMesaage">
        <Form.Label>Your message</Form.Label>
        <Form.Control as="textarea" placeholder="Type here" className="rounded-0" name="message"/>
      </Form.Group>
      <Button variant="primary" className="btn btn-dark" type="submit">
        Send
      </Button>
    </Form>
        </Container>
        </Container>
    
  )
}

export default Contact