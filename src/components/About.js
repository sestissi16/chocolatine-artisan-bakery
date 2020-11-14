import React, { Component } from 'react';
import BlackLineDivider from '../assets/borders/black/blackFlowerDivider-Transparent-Cropped.png'
import './About.css'
import bakeryInfo from '../bakeryData'
import TitleFrame from '../assets/backgrounds/aboutUsDarkBrown.png'
import TitleFrameSm from '../assets/backgrounds/aboutUsDarkBrownSm.png'
import servicesIcon from '../assets/Images/varietyMixOurServices.png'

class About extends Component {
    render(){
        var mission1Part1 = bakeryInfo.aboutUs.mission1Part1;
        var mission1Part2 = bakeryInfo.aboutUs.mission1Part2;
        var mission1Emphasis = bakeryInfo.aboutUs.mission1Emphasis;
        if(bakeryInfo.aboutUs.mission2) {
            var mission2 = bakeryInfo.aboutUs.mission2;
        }
        if(bakeryInfo.aboutUs.serviceList) {
            var serviceList = bakeryInfo.aboutUs.serviceList
        }
        if(bakeryInfo.aboutUs.serviceEx1) {
            var serviceEx1 = bakeryInfo.aboutUs.serviceEx1;
        }
        if(bakeryInfo.aboutUs.serviceEx2) {
            var serviceEx2 = bakeryInfo.aboutUs.serviceEx2;
        }
        if(bakeryInfo.aboutUs.serviceEx3) {
            var serviceEx3 = bakeryInfo.aboutUs.serviceEx3;
        }
        if(bakeryInfo.aboutUs.serviceSum) {
            var serviceSum = bakeryInfo.aboutUs.serviceSum;
        }
        // var process1 = bakeryInfo.aboutUs.process1;
        // var process2 = bakeryInfo.aboutUs.process2;
        // var order1 = bakeryInfo.aboutUs.order1;
        // var order2 = bakeryInfo.aboutUs.order2;
        // var order3= bakeryInfo.aboutUs.order3;
  return (
    <section id="about">
        <div id="aboutContainer">
            <div id="aboutItems">
                <div id="aboutSectionTitle">
                    <img src={TitleFrame} alt="About Us Title with Vintage Frame" id="aboutTitleImage" class="tabletDesktopSize"/>
                    <img src={TitleFrameSm} alt="About Us Title with Vintage Frame" id="aboutTitleImage" class="mobileSize"/>
                </div>
                <div id="aboutMission">
                    {/* <h4>We've grown up eating <span className="aboutEmphasis">incredible French baked goods</span> and we wanted to share that with all of you.</h4><br/>
                    <h4>
                    That's why our mission is to bring you incredible baked goods that are as <span className="aboutEmphasis">fresh</span> as possible and <span className="aboutEmphasis">made with love</span>, 
                    so you can have wonderful mornings, tasty breaks and surprising dining experiences.
                    </h4><br/> */}
                    
                    <h2 id="aboutMissionText">{mission1Part1}<span className="aboutEmphasis">{mission1Emphasis}</span>{mission1Part2}</h2><br></br>
                </div>
                <img src={BlackLineDivider} alt="ornamental divider" className="aboutLineDivider"/>
                <div id="aboutServiceRow">
                    <img src={servicesIcon} alt="Images of a bag of flour a croissant and a roll" id="aboutServicesIcon" />
                    <div id="aboutServices">
                        <h1 className="aboutTitles">Our Services:</h1>
                        <h3 id="aboutServicesList">{serviceList}</h3>
                        <h4>
                            {serviceEx1} <br/>
                            {serviceEx2} <br/>
                            {serviceEx3}
                        </h4><br/>
                        <h4>{serviceSum}</h4><br/>
                        <h5 id="aboutServicesContact">Contact us on <a href="https://www.facebook.com/ArtisanBakeries/" className="aboutLink">Facebook</a> or by <a href="/Contact" className="aboutLink">Email</a> for more details about Catering, Wholesale, and Events</h5>
                    </div>
                </div>
                <img src={BlackLineDivider} alt="ornamental divider" className="aboutLineDivider"/>
                <div id="aboutHowRow">
                    <div id="aboutHowWeMakeIt">
                        <h2 className="aboutTitles">How We Make Our Goods:</h2>
                        <h4>
                            We work with <span className="aboutEmphasis">local</span> suppliers to source the <span className="aboutEmphasis">freshest and most authentic ingredients</span> to reduce the preservatives and flavorless, overly processed products in your food.
                        </h4>
                        <br/>
                        <h4>
                            We also use <span className="aboutEmphasis">old-fashioned techniques</span> to ensure the <span className="aboutEmphasis">highest quality</span>.
                        </h4>
                    </div>
                </div>
                <img src={BlackLineDivider} alt="ornamental divider" className="aboutLineDivider"/>
                <div id="aboutOrderRow">
                    <div id="aboutHowToOrder">
                        <h2 className="aboutTitles">How To Order Our Delicious Goods:</h2>
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
        </div>
    </section>
  );
}
};

export default About;
