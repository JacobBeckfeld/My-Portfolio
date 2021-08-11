import React from 'react';


const ProjectCard = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="col-5">
                <div className="card" key={props.id}>
                    <img src={props.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title"> {props.title} </h5>
                        <p className="card-text"> {props.discription}</p>
                    </div>
                    <div className="card-body">
                        <a href={props.github} className="card-link">Github</a>
                        <a href={props.deployed} className="card-link">Deployed App</a>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default ProjectCard;