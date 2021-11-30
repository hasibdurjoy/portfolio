import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
    return (
        <Container>
            <h2>{project.name}</h2>
            <Row sx={1} md={2}>
                <Col>

                    <img src={project.landingPage} alt="" width="100%" />
                </Col>
                <Col>
                    <h5>Description</h5>
                    <ul>
                        {
                            project?.description?.map(des => <li className="text-start">{des}</li>)
                        }
                    </ul>
                    <h5>Technology Used</h5>
                    <ul>
                        {
                            project?.technology?.map(des => <li className="text-start">{des}</li>)
                        }
                    </ul>
                    <img src={project.image1} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectDetails;