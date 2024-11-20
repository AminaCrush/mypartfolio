import React from 'react';
import'./Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 Nusupzhanova Amina. All rights reserved.</p>
            <div className="footer-links">
                <a href="/" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="/contact">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;