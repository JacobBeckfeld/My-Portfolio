import React from 'react';

const Nav = ({ currentPage, handlePageChange }) => {
    
    const style = {}

    return (
        <ul className = "nav nav-tabs">
            <li className="nav-item">
                <a
                className= "nav-link active"
                href= "#about"
                onClick={() => handlePageChange("About")}
                >
                About
                </a>
            </li>
            <li className="nav-item">
                <a 
                className= "nav-link active"
                href= "#contact"
                onClick={() => handlePageChange("Contact")}
                >
                Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                className= "nav-link active"
                href= "#projects"
                onClick={() => handlePageChange("Projects")}
                >
                Projects
                </a>
            </li>
            <li className="nav-item">
                <a
                className= "nav-link active"
                href= "#resume"
                onClick={() => handlePageChange("Resume")}
                >
                Resume
                </a>
            </li>
        </ul>
    )
}



export default Nav;