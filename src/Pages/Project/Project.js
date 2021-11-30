import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './Project.css';

const Project = ({ project }) => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleClick = id => {
        navigate(`/projects/${id}`)
    }
    return (
        <Col>
            <Card className="h-100 border-0 shadow-lg  rounded" onMouseEnter={() => { setShow(true) }} onMouseLeave={() => { setShow(false) }}>
                <img src={project.cardImage} alt="" />
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    {/* <Card.Text className={show ? "show" : "hide"}>
                        <ul>
                            {
                                project.description.map(tech => <li className="text-start">{tech}</li>)
                            }
                        </ul>
                    </Card.Text> */}
                    {/* <Card.Footer className="bg-light"> */}
                    <button onClick={() => { handleClick(project.id) }} className="btn btn-primary rounded-pill">See Details</button>
                    {/* </Card.Footer> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Project;