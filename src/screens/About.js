import React, { Component } from 'react';
import Navigation from './Navbar'
import BlackLineDivider from '../assets/borders/black/blackFlowerDivider-Transparent-Cropped.png'
import './About.css'
import bakeryInfo from '../bakeryData'
import yourOrder from '../yourOrder'
import CircleLogo from '../assets/Logos/chocolatineTransparentCircleLogo.png'
import TitleFrame from '../assets/backgrounds/AboutUsBrownTitle.png'
import TitleFrameSm from '../assets/backgrounds/aboutUsDarkBrownSm.png'
import servicesIcon from '../assets/Images/varietyMixOurServices.png'
import madeIcon from '../assets/Images/varietyMixHowMade.png'
import orderIcon from '../assets/Images/cashRegister.png'

class About extends Component {
    render(){
        var orderCount = yourOrder.orderList.count
        var missionTagline = bakeryInfo.aboutUs.missionTagline
        var missionTitle = bakeryInfo.aboutUs.missionTitle
        var missionDescript = bakeryInfo.aboutUs.missionDescript
        var missionOrderDescript = bakeryInfo.aboutUs.missionOrderDescript
        if(bakeryInfo.aboutUs.service1) {
            var service1 = bakeryInfo.aboutUs.service1;
            var service1Ex = bakeryInfo.aboutUs.service1Ex;
        }
        if(bakeryInfo.aboutUs.service2) {
            var service2 = bakeryInfo.aboutUs.service2;
            var service2Ex = bakeryInfo.aboutUs.service2Ex;
        }
        if(bakeryInfo.aboutUs.service3) {
            var service3 = bakeryInfo.aboutUs.service3;
            var service3Ex = bakeryInfo.aboutUs.service3Ex;
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
        <Navigation orderCount={orderCount}/>
        <div id="aboutContainer">
            <div id="aboutSectionHeader">
                {/* <img src={TitleFrame} alt="About Us Title with Vintage Frame" id="aboutTitleImage" class="tabletDesktopSize"/>
                <img src={TitleFrameSm} alt="About Us Title with Vintage Frame" id="aboutTitleImage" class="mobileSize"/> */}
                <div id="aboutSectionTitle">
                    <div id="aboutTitleDiv">
                        <img src={TitleFrame} alt="Fancy frame with About written in it" id="aboutTitleImage"/>
                    </div>
                    <h1 id="aboutTagline">{missionTagline}</h1>
                </div>
            </div>
            <div id="aboutMission">
                <div id="aboutMissionText">
                    <h2 id="aboutMissionTitle">{missionTitle}</h2>
                    <h3 id="aboutMissionDescrip">{missionDescript}</h3>
                    <h3 id="aboutMissionOrder">{missionOrderDescript}</h3>
                </div>
                <img src={CircleLogo} alt="chocolatine circle logo" id="aboutLogo" />
            </div>
            <div id="aboutServiceRow">
                <div id="aboutServiceBg">
                    <div id="aboutServices">
                        <h1 className="aboutTitles">What We Do:</h1>
                        <div id="aboutServicesEx">
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
            {/* <div id="aboutPhotoMosaic">
                
            </div> */}
        </div>
    </section>
  );
}
};

export default About;
