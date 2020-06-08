import React from 'react';
import BlackLineDivider from '../assets/blackFlowerDivider-Transparent-Cropped.png'
import TitleBorderTop from '../assets/goldOrnateLines-Top4-Transparent.png'
import TitleBorderBottom from '../assets/goldOrnateLines-Bottom4-Transparent.png'
import './About.css'

const About = () => {
  return (
    <section id="about">
        <div id="aboutContainer">
          <div id="aboutSectionTitle">
            <img src={TitleBorderTop} alt="gold ornamental border" id="aboutTitleTopBorder"/>
            <h1 id="aboutTitleText">About Us:</h1>
            <img src={TitleBorderBottom} alt="gold ornamental border" id="aboutTitleBottomBorder"/>
          </div>
          <div id="aboutRow1">
            <div id="aboutMission">
              <h2 className="aboutTitles">Our Mission:</h2>
                <img src={BlackLineDivider} alt="ornamental divider" className="aboutLineDivider"/>
                <h4>We've grown up eating <span className="aboutEmphasis">incredible French baked goods</span> and we wanted to share that with all of you.</h4><br/>
                <h4>
                  That's why our mission is to bring you incredible baked goods that are as <span className="aboutEmphasis">fresh</span> as possible and <span className="aboutEmphasis">made with love</span>, 
                  so you can have wonderful mornings, tasty breaks and surprising dining experiences.
                </h4><br/>
            </div>
            <div id="aboutServices">
              <h2 className="aboutTitles">Our Services:</h2>
              <img src={BlackLineDivider} alt="ornamental divider" className="aboutLineDivider"/>
              <h3 id="aboutServicesList">Catering, Wholesale, Events, Small Batch Orders</h3>
              <h4>
                Do you want a couple goodies for a quick breakfast? 
                Are you having an event? 
                Do you have a restaurant or cafe that sells things like pizza, bread, or sandwiches?
              </h4><br/>
              <h4>We would love to work with you to give you fresh, local options to treat your family, friends, colleagues and guests!</h4><br/>
              <h5 id="aboutServicesContact">Contact us on <a href="https://www.facebook.com/ArtisanBakeries/" className="aboutLink">Facebook</a> or by <a href="#contact" className="aboutLink">email</a> for more details about Catering, Wholesale, and Events</h5>
            </div>
          </div>
          <div id="aboutRow2">
            <div id="aboutHowWeMakeIt">
              <h2 className="aboutTitles">How We Make Our Goods:</h2>
              <img src={BlackLineDivider} alt="ornamental divider" className="aboutLineDivider"/>
              <h4>
                We work with <span className="aboutEmphasis">local</span> suppliers to source the <span className="aboutEmphasis">freshest and most authentic ingredients</span> to reduce the preservatives and flavorless, overly processed products in your food.
              </h4>
              <br/>
              <h4>
                We also use <span className="aboutEmphasis">old-fashioned techniques</span> to ensure the <span className="aboutEmphasis">highest quality</span>.
              </h4>
            </div>
            <div id="aboutHowToOrder">
              <h2 className="aboutTitles">How To Order Our Delicious Goods:</h2>
              <img src={BlackLineDivider} alt="ornamental divider" className="aboutLineDivider"/>
              <h3>You can:</h3>
              <ul className="aboutHowToList">
                <h4><li className="aboutHowToListItems">Message us on <a href="https://www.facebook.com/ArtisanBakeries/" className="aboutLink">Facebook</a></li></h4>
                <h4><li className="aboutHowToListItems">Use the <a href="#order" className="aboutLink">Order Form</a> on this webiste</li></h4>
                <h4><li className="aboutHowToListItems"><a href="#contact" className="aboutLink">Email us</a> (artisanbakeriesusa@gmail.com)</li></h4>
              </ul>
              <br/>
              <h4>When you order, please let us know the date and time you'd like your order buy and how many of which items you'd like.</h4>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;
