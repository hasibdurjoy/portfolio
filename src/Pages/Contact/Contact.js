import Button from '@restart/ui/esm/Button';
import React, { useRef } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();
    const sendEmail = e => {
        console.log(form);
        e.preventDefault();
        emailjs.sendForm('service_b0i25l8', 'template_51ruuxe', form.current, 'user_sErBQNLogooRI05er7xbK')
            .then((result) => {
                console.log(result.text);
                if (result.text.toLowerCase() == "ok") {
                    alert("Successfully Sent Email")
                }
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className="contact py-4 mt-4" id="contact">
            <h1 className="mb-5">Contact Me</h1>
            <Container>
                <Row sx={1} md={2}>
                    <Col className="mx-auto">
                        <iframe width="350" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=azimpur&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </Col>
                    <Col>
                        <Card style={{ maxWidth: "450px" }} className="mx-auto border-0 shadow-lg p-3">
                            <Form ref={form} onSubmit={sendEmail}>
                                <Form.Group className="mb-5" controlId="formBasicEmail" className="text-start">
                                    <Form.Control required type="text" name="user_name" placeholder="your name" className="mt-3" />
                                </Form.Group>
                                <Form.Group className="mb-5" controlId="formBasicEmail" className="text-start">
                                    <Form.Control required type="email" name="user_email" placeholder="your email" className="mt-3" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail" className="text-start">
                                    <Form.Control required type="text" name="subject" placeholder="Subject" className="mt-3" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail" className="text-start">
                                    <Form.Control required as="textarea" rows={3} name="message" placeholder="Body" className="mt-3" />
                                </Form.Group>
                                <Button type="submit" className="btn btn-primary rounded-pill mt-4">
                                    Send E-mail
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;