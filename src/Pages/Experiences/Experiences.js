import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import Experience from '../Experience/Experience';
import './Experiences.css';

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        fetch('./Experiences.json')
            .then(res => res.json())
            .then(data => setExperiences(data))
    }, [])
    return (
        <div className="experiences py-3">
            <Container className="mt-5" id="experiences">
                <h2 className="text-danger mb-5">Experiences</h2>
                <div className="row">
                    <div className="col-md-4 my-auto">
                        <img className="w-100" src="https://i.ibb.co/MMJcFNZ/skills-features-img.png" alt="" />
                    </div>
                    <div className="col-md-8">

                        <Row xs={1} md={4} className="g-4">
                            {
                                experiences.map(experience => <Experience key={experience.id} experience={experience} />)
                            }
                        </Row>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Experiences;