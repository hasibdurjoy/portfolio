import React from 'react';
import { Card, Col, ProgressBar } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';

const Experience = ({ experience }) => {
    const { name, image, progress, variant } = experience;
    return (
        <Col>
            <Zoom>
                <Card className="h-100 border-0 shadow">
                    <Bounce>
                        <Card.Img className="p-2 w-50 mx-auto" variant="top" src={image} height="80px" />
                    </Bounce>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <ProgressBar animated now={parseInt(progress)} label={`${parseInt(progress)}%`} variant={variant} />
                    </Card.Body>
                </Card>
            </Zoom>
        </Col>
    );
};

export default Experience;