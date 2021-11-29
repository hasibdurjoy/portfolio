import React from 'react';
import { Card, Col, ProgressBar } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';

const Experience = ({ experience }) => {
    const { name, image } = experience;
    return (
        <Zoom>
            <Col className="h-100">
                <Card className="border-0 shadow">
                    <Bounce>
                        <Card.Img className="p-3" variant="top" src={image} height="150px" />
                    </Bounce>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <ProgressBar animated now={90} label={`80%`} variant="danger" />
                    </Card.Body>
                </Card>
            </Col>
        </Zoom>
    );
};

export default Experience;