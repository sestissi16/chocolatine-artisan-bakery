import React, { Component } from 'react';
import Navigation from './Navbar'
import yourOrder from '../yourOrder'
import './Header.css'
import bakeryInfo from '../bakeryData'
import RectangleLogo from '../assets/Logos/chocolatineTransparentLogo.png'
import { GiChefToque, GiTakeMyMoney } from 'react-icons/gi'
import { FaPeopleCarry } from 'react-icons/fa'
class Header extends Component {
    
    render () {
        var orderCount = sessionStorage.getItem('orderCount');
        const { 
            tagline, 
            taglineAction, 
            headerAboutTitle, 
            headerAboutDescript, 
            headerBenefitsTitle,
            headerBenefit1,
            headerBenefit1Ex,
            headerBenefit2,
            headerBenefit2Ex,
            headerBenefit3,
            headerBenefit3Ex,
            headerWholesaleTitle,
            headerWholesaleDescript
        } = bakeryInfo.home
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
                                <h3 id="actionText">{taglineAction}</h3>
                                <a href="/Menu" id="homeMenuBtn" className="homeLightLink"><h4>Our Menu</h4></a>
                            </div>
                        </div>
                    </div>
                    <div id="homeBriefAbout">
                        <div id="homeAboutRow">
                            <div id="homeAboutText">
                                <h2 id="homeAboutTitle">{headerAboutTitle}</h2>
                                <h3 id="homeAboutDescipt">{headerAboutDescript} </h3>
                            </div>
                            <a href="/About" id="homeAboutBtn" className="homeLink"><h3>Learn More About Us</h3></a>
                        </div>
                    </div>
                    <div id="homeWhatWeBring">
                        <div id="benefitsBg">
                            <h2 id="benefitsTitle">{headerBenefitsTitle}</h2>
                            <div id="benefitsCards">
                                <div id="benefit1">
                                    <GiChefToque id="chefHatIcon"/>
                                    <h3 className="benefitTitle">{headerBenefit1}</h3>
                                    <h4 className="benefitDescrip">{headerBenefit1Ex}</h4>
                                </div>
                                <div id="benefit2">
                                    <GiTakeMyMoney id="moneyIcon"/>
                                    <h3 className="benefitTitle">{headerBenefit2}</h3>
                                    <h4 className="benefitDescrip">{headerBenefit2Ex}</h4>
                                </div>
                                <div id="benefit3">
                                    <FaPeopleCarry id="carryingIcon"/>
                                    <h3 className="benefitTitle">{headerBenefit3}</h3>
                                    <h4 className="benefitDescrip">{headerBenefit3Ex}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="homeWorkWithUs">
                        <div id="homeWorkWithUsBg">
                            <h2 id="homeWholesaleTitle">{headerWholesaleTitle}</h2>
                            <h3 id="homeWholesaleDescrip">{headerWholesaleDescript}</h3>
                            <a href="/Wholesale" id="homeWholesaleBtn" className="homeLink">Work With Us</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    };
};

export default Header;
