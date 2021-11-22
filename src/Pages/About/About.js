import React from 'react';
import { Container } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const About = () => {
    return (
        <Container className="mt-4">
            <h1 style={{ fontSize: 50, fontWeight: 700 }}>About <span className="text-danger">Me</span></h1>

            <div className="row">
                <div className="col-md-6 p-5">
                    <img className="banner-image" className="img-fluid" src="https://i.ibb.co/n6fNXhp/durjoy.png" alt="" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <Zoom left cascade>
                        <p style={{ fontSize: 18, fontWeight: 700 }} className=" text-start text-dark">Hi This is me {' '}
                            <span className="text-danger" style={{ fontSize: 30, fontWeight: 900 }}>Hasibur Rahman</span>
                            {' '}. You can call me a tech enthusiast. Learning is my passion . I am also learning now. Currently I am living in Dhaka. I am a {' '}
                            <span style={{ fontSize: 25 }}>
                                <span className="text-success" >M</span>
                                <span className="text-warning" >E</span>
                                <span className="text-primary" >R</span>
                                <span className="text-success" >N</span>{' '}
                            </span>
                            stack web developer. As a{' '}
                            <span style={{ fontSize: 25 }}>
                                <span className="text-success" >M</span>
                                <span className="text-warning" >E</span>
                                <span className="text-primary" >R</span>
                                <span className="text-success" >N</span>{' '}
                            </span>
                            stack Developer I know
                            {' '}<span className="text-success" style={{ fontSize: 25 }}>MongoDb</span>{' '},
                            {' '}<span className="text-warning" style={{ fontSize: 25 }}>Express</span> {' '},
                            {' '}<span className="text-success" style={{ fontSize: 25 }}>NodeJs</span>{' '} and
                            {' '}<span className="text-primary" style={{ fontSize: 25 }}>ReactJs</span> very well. Personally I love to watch movies ans sports</p>
                    </Zoom>
                </div>
            </div>
        </Container>
    );
};

export default About;