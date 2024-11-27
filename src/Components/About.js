import React from 'react';
import {AboutMe} from '../img/img'; 
import './About.css';

const About = () => {
    return (
      <>
        <h1>SOME STUFF</h1> 
        <div className="ImageWrapper">
          <img src={AboutMe} alt="About Me" /> 
        </div>
      </>
    );
};

export default About;
