import React from 'react';
import projectList from '../../assets/projectList';
import ProjectCard from '../ProjectCard';

const Projects = () => {
    return(
        <main>
            { projectList.map( project => (
                <ProjectCard {...project} />
            ))}
        </main>

    )

}

export default Projects;