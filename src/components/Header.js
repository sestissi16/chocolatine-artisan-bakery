import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import './Header.css'

const Header = () => {
  return (
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
    </div>
  );
};

export default Header;
