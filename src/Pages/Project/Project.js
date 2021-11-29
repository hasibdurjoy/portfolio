import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './Project.css';

const Project = ({ project }) => {
    const [show, setShow] = useState(false);
    return (
        <Col>
            <Card className="h-100 border-0 shadow-lg p-3 rounded" onMouseEnter={() => { setShow(true) }} onMouseLeave={() => { setShow(false) }}>
                <img src={project.cardImage} alt="" className={show ? "hide" : "show"} />
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text className={show ? "show" : "hide"}>
                        <ul>
                            {
                                project.description.map(tech => <li className="text-start">{tech}</li>)
                            }
                        </ul>
                    </Card.Text>
                    <Card.Footer>
                        <button className="btn btn-primary rounded-pill">See Details</button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Project;