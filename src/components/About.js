import React, { Component } from 'react';
import BlackLineDivider from '../assets/borders/black/blackFlowerDivider-Transparent-Cropped.png'
import './About.css'
import bakeryInfo from '../bakeryData'
import TitleFrame from '../assets/backgrounds/aboutUsDarkBrown.png'
import TitleFrameSm from '../assets/backgrounds/aboutUsDarkBrownSm.png'
import servicesIcon from '../assets/Images/varietyMixOurServices.png'
import madeIcon from '../assets/Images/varietyMixHowMade.png'
import orderIcon from '../assets/Images/cashRegister.png'

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
        if(bakeryInfo.aboutUs.process1) {
            var process1 = bakeryInfo.aboutUs.process1;
        }
        if(bakeryInfo.aboutUs.process2) {
            var process2 = bakeryInfo.aboutUs.process2;
        }
        if(bakeryInfo.aboutUs.process3) {
            var process3 = bakeryInfo.aboutUs.process3;
        }
        if(bakeryInfo.aboutUs.processSum) {
            var processSum = bakeryInfo.aboutUs.processSum;
        }
        if(bakeryInfo.aboutUs.order1) {
            var order1 = bakeryInfo.aboutUs.order1;
            var order1Link = bakeryInfo.aboutUs.order1Link;
            var order1LinkName = bakeryInfo.aboutUs.order1LinkName;
        }
        if(bakeryInfo.aboutUs.order2) {
            var order2 = bakeryInfo.aboutUs.order2;
            var order2Link = bakeryInfo.aboutUs.order2Link;
            var order2LinkName = bakeryInfo.aboutUs.order2LinkName;
        }
        if(bakeryInfo.aboutUs.order3) {
            var order3 = bakeryInfo.aboutUs.order3;
            var order3Link = bakeryInfo.aboutUs.order3Link;
            var order3LinkName = bakeryInfo.aboutUs.order3LinkName;
        }
        if(bakeryInfo.aboutUs.orderExtraInfo) {
            var orderExtraInfo = bakeryInfo.aboutUs.orderExtraInfo;
        }
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
                        <h2 id="aboutServicesList">{serviceList}</h2>
                        <h3 id="aboutServicesEx">
                            <ul>
                                <li>
                                    <h3>{serviceEx1}</h3>
                                </li>
                                <li>
                                    <h3>{serviceEx2}</h3>
                                </li>
                                <li>
                                    <h3>{serviceEx3}</h3>
                                </li>
                            </ul>
                        </h3>
                        <h3>{serviceSum}</h3><br/>
                        <h4 id="aboutServicesContact">
                            Contact us on 
                            <a href="https://www.facebook.com/ArtisanBakeries/" className="aboutLink"> Facebook </a> 
                            or by 
                            <a href="/Contact" className="aboutLink"> Email </a> 
                            for more details about Catering, Wholesale, and Events
                        </h4>
                    </div>
                </div>
                <img src={BlackLineDivider} alt="ornamental divider" className="aboutLineDivider"/>
                <div id="aboutHowRow">
                    <div id="aboutHowWeMakeIt">
                        <h1 className="aboutTitles">How We Make Our Goods:</h1>
                        <h3>
                            <ul>
                                <li>
                                    <h3>{process1}</h3>
                                </li>
                                <li>
                                    <h3>{process2}</h3>
                                </li>
                                <li>
                                    <h3>{process3}</h3>
                                </li>
                            </ul>
                        </h3>
                        <h3>{processSum}</h3>
                        {/* <h4>
                            We work with <span className="aboutEmphasis">local</span> suppliers to source the <span className="aboutEmphasis">freshest and most authentic ingredients</span> to reduce the preservatives and flavorless, overly processed products in your food.
                        </h4> */}
                        {/* <h4>
                            We also use <span className="aboutEmphasis">old-fashioned techniques</span> to ensure the <span className="aboutEmphasis">highest quality</span>.
                        </h4> */}
                    </div>
                    <img src={madeIcon} alt="Images of grains of wheat, rolling pin, and whisk" id="aboutHowIcon" />
                </div>
                <img src={BlackLineDivider} alt="ornamental divider" className="aboutLineDivider"/>
                <div id="aboutOrderRow">
                    <img src={orderIcon} alt="Drawing of a cash register" id="aboutOrderIcon" />
                    <div id="aboutHowToOrder">
                        <h1 className="aboutTitles">How To Order Our Delicious Goods:</h1>
                        <h2>You can:</h2>
                        <ul className="aboutHowToList">
                            <h3><li className="aboutHowToListItems">{order1}<a href={order1Link} className="aboutLink">{order1LinkName}</a></li></h3>
                            <h3><li className="aboutHowToListItems">{order2}<a href={order2Link} className="aboutLink smoothscroll">{order2LinkName}</a></li></h3>
                            <h3><li className="aboutHowToListItems"><a href={order3Link} className="aboutLink smoothscroll">{order3LinkName}</a>{order3}</li></h3>
                        </ul>
                        <br/>
                        <h3>{orderExtraInfo}</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
};

export default About;
