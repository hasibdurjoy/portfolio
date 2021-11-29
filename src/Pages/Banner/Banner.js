import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselShow from '../CarouselShow/CarouselShow';
import './Banner.css';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import Navigation from '../Navigation/Navigation';

const Banner = () => {
    return (
        <div className="banner" id="banner">
            <Navigation />
            <Zoom bottom cascade big >
                <Container className="pt-5">
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column  justify-content-center">
                            <h1>Hello , Welcome to <br />
                                <Bounce left cascade>
                                    <div className="text-danger fs-1 name zoom-in-zoom-out" style={{ fontWeight: 900, letterSpacing: 2 }}>Hasibur Rahman</div>
                                </Bounce>
                                world
                            </h1>
                            <h1>
                                <Zoom left cascade>
                                    <span style={{ fontSize: 40, fontWeight: 900, letterSpacing: 5 }}>
                                        <span className="text-success">M</span>
                                        <span className="text-warning">E</span>
                                        <span className="text-primary">R</span>
                                        <span className="text-success">N</span>
                                    </span>
                                </Zoom>
                                {'  '}stack web developer
                            </h1>


                        </div>
                        <Bounce right cascade big>
                            <div className="col-md-6 zoom-in-zoom-out">
                                <img className="banner-image zoom-in-zoom-out" className="img-fluid" src="https://i.ibb.co/n6fNXhp/durjoy.png" alt="" />
                            </div>
                        </Bounce>
                    </div>
                </Container >
            </Zoom>
        </div>
    );
};

export default Banner;