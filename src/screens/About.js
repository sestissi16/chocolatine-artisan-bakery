import React, { Component } from 'react';
import Navigation from './Navbar'
import './About.css'
import { FaCarSide, FaPeopleCarry } from 'react-icons/fa'
import { MdRestaurantMenu } from 'react-icons/md'
import bakeryInfo from '../bakeryData'
import yourOrder from '../yourOrder'
import CircleLogo from '../assets/Logos/chocolatineTransparentCircleLogo.png'
class About extends Component {
    render(){
        var orderCount = yourOrder.orderList.count
        const {
            missionTagline,
            missionDescript,
            missionDescript2,
            service1,
            service1Ex,
            service2,
            service2Ex,
            service3,
            service3Ex,
            service4,
            service5,
            service6,
            giveBack1,
            giveBack2,
            giveBack3,
            giveBack4,
            actionTitle,
            actionDescript
        } = bakeryInfo.aboutUs
  return (
    <section id="about">
        <Navigation orderCount={orderCount}/>
        <div id="aboutContainer">
            <div id="aboutSectionHeader">
                <div id="aboutSectionTitle">
                    <div id="aboutTitleDiv">
                        <h1 id="aboutTitleText">About Us</h1>
                        {/* <img src={TitleFrame} alt="Fancy frame with About written in it" id="aboutTitleImage"/> */}
                    </div>
                    <img src={CircleLogo} alt="chocolatine circle logo" id="aboutLogo" />
                    <h1 id="aboutTagline">{missionTagline}</h1>
                    <div id="aboutMissionText">
                        <h2 id="aboutMissionDescrip">{missionDescript}</h2>
                        <h3 id="aboutMissionOrder">{missionDescript2}</h3>
                    </div>
                </div>
            </div>
            <div id="aboutServiceRow">
                <div id="aboutServiceBg">
                    <div id="aboutServices">
                        <h1 className="aboutTitles">What We Do:</h1>
                        <div id="aboutServicesEx">
                            <div className="aboutServicesColumn">
                                <div className="aboutServiceItem">
                                    <h2 className="serviceTitle">{service1}</h2>
                                    <h3 className="serviceEx">{service1Ex}</h3>
                                </div>
                                <div className="aboutServiceItem">
                                    <h2 className="serviceTitle">{service2}</h2>
                                    <h3 className="serviceEx">{service2Ex}</h3>
                                </div>
                                <div className="aboutServiceItem">
                                    <h2 className="serviceTitle">{service3}</h2>
                                    <h3 className="serviceEx">{service3Ex}</h3>
                                </div>
                            </div>
                            <div className="aboutServicesColumn">
                                <div className="aboutServiceItem">
                                    <FaPeopleCarry className="serviceIcon" />
                                    <h2 className="serviceTitle">{service4}</h2>
                                </div>
                                <div className="aboutServiceItem">
                                    <FaCarSide className="serviceIcon" />
                                    <h2 className="serviceTitle">{service5}</h2>
                                </div>
                                <div className="aboutServiceItem">
                                    <MdRestaurantMenu className="serviceIcon" />
                                    <h2 className="serviceTitle">{service6}</h2>
                                </div>
                            </div>
                        </div>
                        <h4 id="aboutServicesContact">
                            Contact us on 
                            <a href="https://www.facebook.com/ArtisanBakeries/" className="aboutLink"> Facebook </a> 
                            or by 
                            <a href="/Contact" className="aboutLink"> Email </a> 
                            for more details about Catering, and Wholesale
                        </h4>
                    </div>
                </div>
            </div>
            <div id="aboutGiveBack">
                <div id="aboutGiveBackBg">
                    <h1 className="aboutTitles">How we want to give back:</h1>
                    <div className="aboutGiveRows">
                        <div className="aboutGiveItem"><h2>{giveBack1}</h2></div>
                        <div className="aboutGiveItem"><h2>{giveBack2}</h2></div>
                    </div>
                    <div className="aboutGiveRows">
                        <div className="aboutGiveItem"><h2>{giveBack3}</h2></div>
                        <div className="aboutGiveItem"><h2>{giveBack4}</h2></div>
                    </div>
                </div>
            </div>
            <div id="aboutAction">
                <div id="aboutActionBg">
                    <h2 id="aboutActionTitle" className="aboutTitles">{actionTitle}</h2>
                    <h3 id="aboutActionDescript">{actionDescript}</h3>
                    <a href="/Contact" id="aboutContactBtn">Contact Us</a>
                </div>
            </div>
            {/* <div id="aboutPhotoMosaic">
                
            </div> */}
        </div>
    </section>
  );
}
};

export default About;
