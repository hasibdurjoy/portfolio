import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import CarouselShow from '../CarouselShow/CarouselShow';

const About = () => {
    return (
        <Container className="my-4" id="about">
            <h1 style={{ fontSize: 50, fontWeight: 700, borderBottom: "3px solid black" }}>About <span className="text-danger ">Me</span></h1>
            <Card className="border-0 mt-3 shadow-lg p-5">
                <Row xs={1} md={2}>
                    <Col className="px-5">
                        <img className="banner-image" className="img-fluid" src="https://i.ibb.co/n6fNXhp/durjoy.png" alt="" />
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <Zoom left cascade>
                            <p style={{ fontSize: 18, fontWeight: 700 }} className=" text-start text-dark">Hi, This is me {' '}
                                <span className="text-danger" style={{ fontSize: 30, fontWeight: 900 }}>Hasibur Rahman</span>
                                {' '}. You can call me a tech enthusiast. Learning is my passion . I am also learning now. Currently I am living in Dhaka. I am a {' '}
                                <span style={{ fontSize: 25 }}>
                                    <span className="text-dark" >MERN</span> {' '}
                                </span>
                                stack web developer. As a{' '}
                                <span style={{ fontSize: 25 }}>
                                    <span className="text-dark" >MERN</span> {' '}
                                </span>
                                stack Developer I know
                                {' '}<span className="text-dark" style={{ fontSize: 25 }}>MongoDb Express NodeJS ReactJS</span>{' '}
                                very well. Personally I love to watch movies ans sports</p>
                            <Zoom bottom big >
                                <CarouselShow />
                            </Zoom>
                        </Zoom>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default About;