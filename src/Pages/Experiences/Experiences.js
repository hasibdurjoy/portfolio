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
        fetch('https://raw.githubusercontent.com/hasibdurjoy/portfolio/main/public/experiences.json')
            .then(res => res.json())
            .then(data => setExperiences(data))
    }, [])
    return (
        <div className="experiences py-3 ">
            <Container className="mt-5" id="experiences">
                <h2 className="text-danger mb-5" style={{ fontSize: 50, fontWeight: 700 }}>Experiences</h2>
                <div className="row">
                    <div className="col-md-4 my-auto">
                        <img className="img-fluid experiences-image" src="https://raw.githubusercontent.com/hasibdurjoy/portfolio/main/src/Utilities/images/skills-features-img.png" alt="" />
                    </div>
                    <div className="col-md-8 pt-3">
                        <Row xs={2} md={4} className="g-4">
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