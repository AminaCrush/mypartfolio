import React from 'react';
import {AboutMe} from '../img/img'; // Убедитесь, что путь к изображению правильный
import './About.css';

const About = () => {
    return (
      <>
        <h1>SOME STUFF</h1> 
        <div className="ImageWrapper">
          <img src={AboutMe} alt="About Me" /> {/* Используйте тег <img> */}
        </div>
      </>
    );
};

export default About;
