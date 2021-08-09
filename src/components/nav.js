import React from 'react';

const Nav = ({ currentPage, handlePageChange }) => {
    
    const style = {}

    return (
        <ul className = "nav nav-tabs">
            <li className="nav-item">
                <a
                href= ""
                onClick={() => handlePageChange("")}

                >
                
                </a>
            </li>
            <li>
                <a
                href= ""
                onClick={() => handlePageChange("")}

                >
                
                </a>
            </li>
            <li>
                <a
                href= ""
                onClick={() => handlePageChange("")}

                >
                
                </a>
            </li>
            <li>
                <a
                href= ""
                onClick={() => handlePageChange("")}

                >
                
                </a>
            </li>
        </ul>
    )
}



export default Nav;