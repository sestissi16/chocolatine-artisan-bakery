import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import './Header.css'

const Header = () => {
  return (
    <header id="home">
        <div id="headerContainer">
            <Navbar variant="dark" expand="lg" sticky="top" className="custom-navbar-bg">
                <Navbar.Brand href="#home" className="navbar-title">Chocolatine - Artisan Bakery</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="navLinksContainer">
                        <Nav.Link href="#about" className="navbar-link">About Us</Nav.Link>
                        <Nav.Link href="#menu" className="navbar-link">Menu</Nav.Link>
                        <Nav.Link href="#contact" className="navbar-link">Contact Us</Nav.Link>
                        <Nav.Link href="#order" className="navbar-link">Order</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div id="homeSection">
                <div id="homeInfo">
                    <h1>Welcome to <span className="spanTitle">Chocolatine</span></h1>
                    <br/>
                    <h2 id="homeTagline">We make French baked goods with love, so kickstart your day with us!</h2>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
