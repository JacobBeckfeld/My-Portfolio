import React from 'react';
import "../style.css";

const About = () => {
    return (
            <div className="about card mb-3 text-white bg-dark w-75 p-3 mx-auto">
                <div className="row">
                    <div className="col-md-4">
                        <img src="IMG-4262.jpg" className="img-fluid rounded-circle" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">About me</h5>
                            <p className="card-text">My name is Jacob Beckfeld and I am a full-stack developer from minneapolis MN. </p>
                            <p className="card-text">I work with HTML/CSS, JavaScript, NodeJS, Express, MySQL, MongoDB and React.</p>
                            <p className="card-text">I have a passion for video games and hope to one day be working on developing them.</p>
                            <div className="row">
                                <a href="https://www.linkedin.com/in/jacob-beckfeld-2a6088213/" className="col-4">
                                    <img src="linkdin-icon.png" className="img-fluid"></img>
                                </a>
                                <a href="https://github.com/JacobBeckfeld" className="col-6">
                                    <img src="github-icon.png" className="img-fluid"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About
