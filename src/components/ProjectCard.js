import React from 'react';
import projectList from '../assets/projectList';

const ProjectCard = ({ image, discription, title, github, deployed }) =>{
    return projectList.map(
        <div class="card" style="width: 18rem;">
            <img src={image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title"> {title} </h5>
                <p class="card-text"> {discription}</p>
            </div>
            <div class="card-body">
                <a href={github} class="card-link"></a>
                <a href={deployed} class="card-link"></a>
            </div>
        </div>
    )
}

export default ProjectCard;