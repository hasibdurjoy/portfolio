import React, { useEffect, useState } from 'react';
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
        <div>
            <h2>This is navigate {project.name}</h2>
            <a href={project.liveLink}><button>Live Site</button></a> <br />
            <img src={project.landingPage} alt="" width="50%" />
        </div>
    );
};

export default ProjectDetails;