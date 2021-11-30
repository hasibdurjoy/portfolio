import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { projectId } = useParams();
    console.log(projectId);
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hasibdurjoy/portfolio/main/public/projects.json')
            .then(res => res.json())
            .then(data => {
                setProject(data.find(single => single.id == projectId));
            })
    }, [])
    console.log(project);
    return (
        <>
            <Container>
                <h2>{project.name}</h2>
                <Row xs={1} md={2}>
                    <Col>
                        <Card className="p-2 border-0 shadow-lg">
                            <h5>Description</h5>
                            <ul>
                                {
                                    project?.description?.map(des => <li className="text-start">{des}</li>)
                                }
                            </ul>
                            <h5>Technology Used</h5>
                            <div>
                                {
                                    project?.technology?.map(tech => <button className="btn btn-outline-secondary rounded-pill mx-2 my-2">{tech}</button>)
                                }
                            </div>
                            <div className="d-flex justify-content-around my-3">
                                <button className="btn btn-primary rounded-pill">Live Link </button>
                                <button className="btn btn-secondary rounded-pill">Client Side</button>
                                <button className="btn btn-dark rounded-pill">Server Side</button>
                            </div>
                        </Card>
                        <h2>Sample</h2>
                        <img src={project.image1} alt="" width="100%" />
                        <img src={project.image2} alt="" width="100%" />
                        <img src={project.image3} alt="" width="100%" />
                    </Col>

                    <Col>
                        <h2>Landing Page</h2>
                        <img src={project.landingPage} alt="" width="100%" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProjectDetails;