import React, { Component } from 'react';
import Navigation from './Navbar'
import yourOrder from '../yourOrder'
import './Header.css'
import bakeryInfo from '../bakeryData'
import RectangleLogo from '../assets/Logos/chocolatineTransparentLogo.png'
class Header extends Component {
    
    render () {
        var orderCount = yourOrder.orderList.count
        if(bakeryInfo.tagline) {
            var tagline = bakeryInfo.tagline
        }
        return (
            <header id="home">
                <Navigation orderCount={orderCount}/>
                <div id="headerContainer">
                    <div id="homeInfo">
                        <div id="homeInfoText">
                            <div id="homeLogo">
                                <img src={RectangleLogo} alt="Chocolatine logo with a croissant icon" id="homeLogoImage"/>
                            </div>
                            <h1 id="homeTagline">{tagline}</h1>
                            <div id="homeMenuAction">
                                <h3 id="actionText">Treat yourself without breaking the bank today!</h3>
                                <a href="/Menu" id="homeMenuBtn" className="homeLightLink"><h4>Our Menu</h4></a>
                            </div>
                        </div>
                    </div>
                    <div id="homeBriefAbout">
                        <div id="homeAboutRow">
                            <div id="homeAboutText">
                                <h2 id="homeAboutTitle">We're Black Owned, Women Led, and Local! </h2>
                                <h5 id="homeAboutDescipt">
                                    We're a local Vegas family that immigrated from France, so we wanted to share the food magic with all of you!
                                    We started up this bakery in our garage so that we could provide fresh and affordable baked goods.
                                </h5>
                            </div>
                            <a href="/About" id="homeAboutBtn" className="homeLink"><h3>Learn More About Us</h3></a>
                        </div>
                    </div>
                    <div id="homeWhatWeBring">
                        <div id="benefitsBg">
                            <h2 id="benefitsTitle">What We Bring To The Table</h2>
                            <div id="benefitsCards">
                                <div id="benefit1">
                                    <h3>Everything is hand made with traditional recipes.</h3>
                                </div>
                                <div id="benefit2">
                                    <h3>We make all of our goods as affordable as possible.</h3>
                                </div>
                                <div id="benefit3">
                                    <h3>We'll deliver almost anywhere in the valley.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </header>
        );
    };
};

export default Header;
