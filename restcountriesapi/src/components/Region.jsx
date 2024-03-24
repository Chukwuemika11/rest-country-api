import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Region = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="pageContainer">
        <div className="regionFilter">
            <div className="filterHeader" onClick={toggleAccordion}>
                <span>Filter by Region         </span>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className="regionLinks">
                    <Link to="/africa">Africa</Link>
                    <Link to="/america">America</Link>
                    <Link to="/asia">Asia</Link>
                    <Link to="/europe">Europe</Link>
                    <Link to="/oceania">Oceania</Link>
                </div>
            )}
        </div>
        <div className="content">
            {/* Your main content here */}
        </div>
    </div>
    
    );
};


export default Region
