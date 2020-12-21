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
                            <div id="homeBtnRow">
                                <a href="/About" id="homeAboutBtn" className="homeLink">Learn More</a>
                                <a href="/Menu" id="homeMenuBtn" className="homeLink">Our Menu</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </header>
        );
    };
};

export default Header;
