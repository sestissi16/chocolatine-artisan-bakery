import React, { Component } from 'react';
import { Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import CircleLogo from '../assets/Logos/chocolatineTransparentCircleLogo.png'
import { FaFacebookSquare, FaMapMarkerAlt } from 'react-icons/fa'
import './footer.css'

class Footer extends Component {
    render(){
        return (
            <Navbar variant="dark" expand="lg" sticky="bottom" className="custom-footer-bg">
                <Navbar.Brand href="/" className="footer-title">
                    <img
                        alt="Chocolatine Logo"
                        src={CircleLogo}
                        className="d-inline-block align-top footerLogo"
                    />{'  '}
                    Chocolatine
                </Navbar.Brand>
                <Nav className="footerSocial">
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-cart`}>
                                Facebook Link
                            </Tooltip>
                        }
                    >
                        <Nav.Link href="http://www.facebook.com/ArtisanBakeries" className="footer-link-fb">
                            <FaFacebookSquare className="footer-icon-fb"/>
                        </Nav.Link>
                    </OverlayTrigger>
                </Nav>
                <Nav className="footerContact">
                    <h5 className="contactItem1">
                        <FaMapMarkerAlt className="footer-icon-map"/> 8515 Iron Mountain Rd. <br/>
                        Las Vegas, NV <br/>
                        89143
                    </h5>
                    <h5 className="contactItem2">
                        <Nav.Link href="mailto:info@artisanbakeriesusa.com" className="footer-link-email">
                            info@artisanbakeriesusa.com 
                        </Nav.Link>
                        (702) 475-3715
                    </h5>
                </Nav>
                <Nav className="privacyPolicy">
                    <Nav.Link href="https://app.termly.io/document/cookie-policy/6c7276fa-a251-44bc-8e28-942dd3cea440" className="footer-link-privacy">
                        <h5>Privacy Policy</h5>
                    </Nav.Link>
                    <button class="termly-cookie-preference-button" type="button" style={{background: "#FBF2C0", width: 70 +"%", borderRadius: 5 + "px", border: 1 + "px solid #004385", fontFamily: "Roboto, Arial", fontSize: 1 + "em", color: "#004385", fontWeight: 600, boxSizing: "border-box", cursor: "pointer", padding: 1, outline: "none"}} onclick="displayPreferenceModal()">Manage Cookie Preferences</button>
                </Nav>
            </Navbar>
        );
    }
};

export default Footer;
