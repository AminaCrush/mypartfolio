import React from 'react';
import { AboutMe } from '../img/img';

const Home = () => {
    return (
        <div className="container about-page">
            <h1>About Me</h1>
            <AboutMe/>
            
           

            <section className="team">
                <h2>Meet THE Team</h2>
                <p>Right now, my team and I are starting a new project for apartment rentals. 
                    My team includes Nusupzhanovaich Argen, Nusupzhanova Akmaral, and Kamila.</p>
                <div className="team-members">
                    <div className="team-member">
                        <h3>Nusupzhanova Amina</h3>
                        <p>Best businesswoman</p>
                    </div>
                   
                </div>
            </section>
        </div>
    );
};

export default Home;