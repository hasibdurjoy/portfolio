import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import video1 from '../../Utilities/Videos/travel-with-hrd-website.mp4';
import video2 from '../../Utilities/Videos/wall-wreath.mp4';

const Projects = () => {
    return (
        <Container className="mt-5" id="projects">
            <h2 className="mb-5 text-danger">Recent Projects</h2>

            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card className="border-0 shadow-lg p-3 rounded">
                        <video src={video1} autoPlay muted></video>
                        <Card.Body>
                            <Card.Title>Wall Wreath</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 shadow-lg p-3 rounded">
                        <video src={video2} autoPlay muted></video>
                        <Card.Body>
                            <Card.Title>Wall Wreath</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 shadow-lg p-3 rounded">
                        <video src={video2} autoPlay muted></video>
                        <Card.Body>
                            <Card.Title>Wall Wreath</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;