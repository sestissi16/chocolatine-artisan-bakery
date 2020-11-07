import React, { Component } from 'react';
import BlackLineDivider from '../assets/borders/black/blackFlowerDivider-Transparent-Cropped.png'
import './About.css'
import bakeryInfo from '../bakeryData'
import TitleFrame from '../assets/backgrounds/aboutUsDarkBrown.png'

class About extends Component {
    render(){
        var mission1Part1 = bakeryInfo.aboutUs.mission1Part1;
        var mission1Part2 = bakeryInfo.aboutUs.mission1Part2;
        var mission1Emphasis = bakeryInfo.aboutUs.mission1Emphasis;
        var mission2 = bakeryInfo.aboutUs.mission2;
        // var vision1 = bakeryInfo.aboutUs.vision1;
        // var vision2 = bakeryInfo.aboutUs.vision2;
        // var service1 = bakeryInfo.aboutUs.service1;
        // var service2 = bakeryInfo.aboutUs.service2;
        // var service3= bakeryInfo.aboutUs.service3;
        // var service4 = bakeryInfo.aboutUs.service4;
        // var process1 = bakeryInfo.aboutUs.process1;
        // var process2 = bakeryInfo.aboutUs.process2;
        // var order1 = bakeryInfo.aboutUs.order1;
        // var order2 = bakeryInfo.aboutUs.order2;
        // var order3= bakeryInfo.aboutUs.order3;
  return (
    <section id="about">
        <div id="aboutContainer">
          <div id="aboutSectionTitle">
            <img src={TitleFrame} alt="About Us Title with Vintage Frame" id="aboutTitleImage"/>
          </div>
          <div id="aboutRow1">
            <div id="aboutMission">
              <h2 className="aboutTitles">Our Mission:</h2>
                <img src={BlackLineDivider} alt="ornamental divider" className="aboutLineDivider"/>
                {/* <h4>We've grown up eating <span className="aboutEmphasis">incredible French baked goods</span> and we wanted to share that with all of you.</h4><br/>
                <h4>
                  That's why our mission is to bring you incredible baked goods that are as <span className="aboutEmphasis">fresh</span> as possible and <span className="aboutEmphasis">made with love</span>, 
                  so you can have wonderful mornings, tasty breaks and surprising dining experiences.
                </h4><br/> */}
                <h4>{mission1Part1}<span className="aboutEmphasis">{mission1Emphasis}</span>{mission1Part2}</h4><br></br>
                <h4>{mission2}</h4>
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
                <h4><li className="aboutHowToListItems">Use the <a href="#order" className="aboutLink smoothscroll">Order Form</a> on this webiste</li></h4>
                <h4><li className="aboutHowToListItems"><a href="#contact" className="aboutLink smoothscroll">Email us</a> (artisanbakeriesusa@gmail.com)</li></h4>
              </ul>
              <br/>
              <h4>When you order, please let us know the date and time you'd like your order by and how many of which items you'd like.</h4>
            </div>
          </div>
        </div>
    </section>
  );
}
};

export default About;
