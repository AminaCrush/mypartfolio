import React from 'react';
import { Link } from 'react-router-dom';
import'./Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/My-experience">My experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;