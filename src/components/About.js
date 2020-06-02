import React from 'react';
import './About.css'

const About = () => {
  return (
    <section id="about">
        <div id="aboutContainer">
          <div id="aboutRow1">
            <div id="aboutMission">
              <h2>Our Mission:</h2>
            </div>
            <div id="aboutServices">
              <h2>Our Services:</h2>
            </div>
          </div>
          <div id="aboutRow2">
            <div id="aboutHowWeMakeIt">
              <h2>How We Make Our Goods:</h2>
            </div>
            <div id="aboutHowToOrder">
              <h2>How To Order Our Delicious Goods:</h2>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;
