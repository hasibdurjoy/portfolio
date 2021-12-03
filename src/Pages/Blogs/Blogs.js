import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className="mt-5 mb-3" id="blogs">
            <h1>Blogs</h1>
            <Card style={{ height: 400 }} className="d-flex align-items-center justify-content-center">
                <h2>Blogs Are Comming Soon</h2>
            </Card>
        </Container>
    );
};

export default Blogs;