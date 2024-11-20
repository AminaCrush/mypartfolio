import React from "react";
import myPhoto from "../img/amina.jpg";

export const AboutMe = () => {
  return (
    <div>
      <img
        src={myPhoto}
        alt="Моя фотография"
        style={{ width: "300px", height: "auto" }}
      />
      <p>
        <strong>
          {" "}
          I am 17 years old, and I am a businesswoman. I have 3 active
          businesses, and I am studying at Salyimbekov College in my second
          year. Here, I study programming languages and have already completed
          several projects.
        </strong>
      </p>
    </div>
  );
};
