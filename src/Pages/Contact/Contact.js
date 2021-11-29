import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact py-4 mt-4" id="contact">
            <h1>Contact Me</h1>
            <Card style={{ maxWidth: "450px" }} className="mx-auto border-0 shadow-lg p-3">
                <Form onSubmit={e => e.preventDefault()}>
                    <Form.Group className="mb-5" controlId="formBasicEmail" className="text-start">
                        <Form.Label className="text-dark">Your Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="formBasicEmail" className="text-start">
                        <Form.Label className="mt-3 text-dark">Your Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" className="text-start">
                        <Form.Label className="mt-3 text-dark">Phone</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" className="text-start">
                        <Form.Label className="mt-3 text-dark">Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button type="submit" className="btn btn-danger rounded-pill mt-4">
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default Contact;