import React from 'react';
import "./style.css";

const Nav = ({ currentPage, handlePageChange }) => {
    

    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active link-style"
                    href="#about"
                    onClick={() => handlePageChange("About")}>
                    About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-style" 
                    href="#projects"
                    onClick={() => handlePageChange("Projects")}>
                    Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link-style" 
                    href="#resume"
                    onClick={() => handlePageChange("Resume")}>
                    Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}



export default Nav;
