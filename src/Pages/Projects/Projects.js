import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import video1 from '../../Utilities/Videos/travel-with-hrd-website.mp4';
import video2 from '../../Utilities/Videos/wall-wreath.mp4';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <Container className="mt-5" id="projects">
            <h2 className="mb-5 text-danger">Recent Projects</h2>

            <Row xs={1} md={3} className="g-4">
                {
                    projects.map(project => <Project project={project}></Project>)
                }
            </Row>
        </Container>
    );
};

export default Projects;