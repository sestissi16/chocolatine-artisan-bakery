import React, { Component } from 'react';
import './Header.css'
import bakeryInfo from '../bakeryData'
import RectangleLogo from '../assets/Logos/chocolatineTransparentLogo.png'
class Header extends Component {
    
    render () {
        if(bakeryInfo.tagline) {
            var tagline = bakeryInfo.tagline
        }
        return (
            <header id="home">
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
