import React from 'react';
import projectList from '../../assets/projectList';
import ProjectCard from '../ProjectCard';

const Projects = () => {
    return(
        <div className="d-flex flex-wrap justify-content-center">
            { projectList.map( project => (
                <ProjectCard {...project} />
            ))}
        </div>

    )

}

export default Projects;
