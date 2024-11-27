import React from "react";
import image from "../img/experients.jpg";

const myExperience = () => {
  return (
    <div>
      <h1>
        <strong>MiniBoss</strong>
      </h1>
      <p>
        I won't prolong the introduction and will start by saying that I had to
        grow up quickly and begin working at a young age. Unfortunately or
        fortunately, I also matured earlier than my peers. I have worked in
        various fields and gained experience in sales, cosmetics, business, and
        multimedia. I have worked abroad and am an SMM specialist, mobile
        photographer, lash maker, and I also studied psychology for a while.
        Currently, I have three active businesses. I have been interested in
        sports since childhood: I am a former candidate for master of sports in
        boxing and have also practiced swimming, aikido, kickboxing, and
        athletics. At the moment, I am training in the gym and am a second-year
        student at Askar Salymbekov University. In conclusion, I can say that in
        my short life, I have learned a lot and gained experience in various
        areas. This helps me connect with people and easily integrate into a
        team. In the future, I will continue to grow and strive for more
        knowledge.
      </p>

      <img className="img_myexp" src={image} />
    </div>
  );
};

export default myExperience;
