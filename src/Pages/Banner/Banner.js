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
                            <Bounce left cascade>
                                <h3>Hello!!! Welcome to <br />
                                    <span className="text-danger fs-1 name" style={{ fontWeight: 900, letterSpacing: 1 }}>Hasibur Rahman </span> world
                                </h3>
                            </Bounce>
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

                            <div className="d-flex gap-2 justify-content-start">
                                <a
                                    className="d-block"
                                    href="https://drive.google.com/file/d/1g637hbQOzwjLsLkPRwYnSp870VCUWl6j/view"
                                    target="_blank">
                                    <button className="btn btn btn-danger rounded-pill text-white p-3">Download Resume</button>
                                </a>
                                <a
                                    className="d-block"
                                    href="https://www.linkedin.com/in/hasibur2571/"
                                    target="_blank">
                                    <button className="btn btn btn-outline-danger rounded-pill text-white p-3">Hire Me</button>
                                </a>
                            </div>

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