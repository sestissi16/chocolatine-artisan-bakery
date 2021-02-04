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
                        Las Vegas, NV 89143
                    </h5>
                    <h5 className="contactItem2">
                        artisanbakeriesusa@gmail.com <br/>
                        (702) 475-3715
                    </h5>
                </Nav>
            </Navbar>
        );
    }
};

export default Footer;
