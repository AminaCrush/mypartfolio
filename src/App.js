import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Navbar from './Components/Navbar.js';
// import Home from './Components/Home.js';
// import Footer from './Components/Footer.js';
// import About from './Components/About.js';
// import Projects from './Components/Projects.js';
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Footer from "./Components/Footer.js";
import About from "./Components/About.js";
import Projects from "./Components/Projects.js";
import MyExperience from "./Components/MyExperience.js";
import Contacts from "./Components/Contacts.js";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/My-experience" element={<MyExperience />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
