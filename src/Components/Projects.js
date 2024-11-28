import React from "react";

const Projects = () => {
  return (
    <div className="container about-page">
      <div>
        <h1>Project Names</h1>

        <h3>1. Web Development Portfolio</h3>
        <a href="https://developer-cv.weblium.site" target="_blank" rel="noopener noreferrer">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/1/JV/RC/DY/67324322/222222222222-500x500.jpg"
            alt="Web Development Portfolio"
            style={{ width: "300px", height: "200px", marginBottom: "10px", borderRadius: "10px" }}
          />
        </a>
        <p>I was part of the team that developed this project, focusing on personal developer portfolios.</p>

        <h3>2. Video Production Site</h3>
        <a href="https://video-production.weblium.site" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.prod.website-files.com/624abc99aa49c14f336dc7a1/627431b2ba5fd01b31313998_video-production-services-filmmaking-studio-02.jpg"
            alt="Video Production"
            style={{ width: "300px", height: "200px", marginBottom: "10px", borderRadius: "10px" }}
          />
        </a>
        <p>I worked on designing and developing key elements for this site showcasing video production services.</p>

        <h3>3. Creative Art Showcase</h3>
        <a href="https://diogotc.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.saskatoonex.com/wp-content/uploads/2023/05/Creative-Art-1024x576.png"
            alt="Creative Art Showcase"
            style={{ width: "300px", height: "200px", marginBottom: "10px", borderRadius: "10px" }}
          />
        </a>
        <p>This project is an art portfolio site. I helped with front-end design and layout creation.</p>
      </div>
    </div>
  );
};

export default Projects;
