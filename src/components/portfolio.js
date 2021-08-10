import React, { useState } from 'react';
import Nav from "./Nav";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About  from "./pages/About"

const Portfolio = () => {
    const[currentPage, setCurrentPage] = useState("About")
    const renderPage = () => {
        if (currentPage === "About") {
            return <About/>;
        }
        if (currentPage === "Contact") {
            return <Contact/>
        }
        if (currentPage === "Projects") {
            return <Projects/>
        }
        if (currentPage === "Resume") {
            return <Resume/>
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <main>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </main>
        
    )
}

export default Portfolio