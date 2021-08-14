import React from 'react';
import  "./style.css"

//changing file
const ProjectCard = ({id, image, title, discription, github, deployed}) => {
    return (
        <div className="col-5 col-md-offset-2 p-2" key={id}>
            <div className="card">
                <img src={image} className="card-img-top height" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {title} </h5>
                    <p className="card-text"> {discription}</p>
                </div>
                <div className="card-body">
                    <a href={github} className="card-link">Github</a>
                    <a href={deployed} className="card-link">Deployed App</a>
                </div>
            </div>
        </div>
    )
    
}

export default ProjectCard;