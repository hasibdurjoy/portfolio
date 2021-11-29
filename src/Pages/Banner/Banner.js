import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CarouselShow from '../CarouselShow/CarouselShow';
import './Banner.css';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import Navigation from '../Navigation/Navigation';
import image from '../../Utilities/wave.svg'

const Banner = () => {
    return (
        <>
            <Navigation />
            <div className="banner" id="home">
                <Container className="banner-container">
                    <Row xs={1} md={2} >
                        <Col className="d-flex flex-column justify-content-center text-start pb-5">
                            <h1>Hello , Welcome to <br />
                                <Bounce left cascade>
                                    <div className="text-danger fs-1 name zoom-in-zoom-out" style={{ fontWeight: 900, letterSpacing: 2 }}>Hasibur Rahman</div>
                                </Bounce>
                                world
                            </h1>
                            <h5>
                                <Zoom left cascade>
                                    <span style={{ fontSize: 40, fontWeight: 900, letterSpacing: 5 }}>
                                        <span className="text-success">M</span>
                                        <span className="text-warning">E</span>
                                        <span className="text-primary">R</span>
                                        <span className="text-success">N</span>
                                    </span>
                                </Zoom>
                                {'  '}stack web developer
                            </h5>
                            <Row xs={2} md={2} className="mt-3">
                                <Col>
                                    <a
                                        href="https://drive.google.com/file/d/1g637hbQOzwjLsLkPRwYnSp870VCUWl6j/view"
                                        target="_blank">
                                        <button className="btn btn btn-danger rounded-pill text-white">Download Resume</button>
                                    </a>
                                </Col>
                                <Col>
                                    <a
                                        href="https://www.linkedin.com/in/hasibur2571/"
                                        target="_blank">
                                        <button className="btn btn btn-outline-danger rounded-pill text-white">Hire Me</button>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Bounce right cascade big>
                                <img className="rounded-circle" src="https://raw.githubusercontent.com/hasibdurjoy/portfolio/main/src/Utilities/images/durjoy.png" alt="" height="350px" />
                            </Bounce>
                        </Col>
                    </Row>
                </Container>
                <img src={image} alt="" />
            </div>
        </>
    );
};

export default Banner;