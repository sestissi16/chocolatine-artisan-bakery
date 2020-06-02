import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import './Navbar.css'

const Navigation = () => {
  return (
        <Navbar variant="dark" expand="lg" fixed="top" className="custom-navbar-bg">
            <Navbar.Brand href="#home" className="smoothscroll navbar-title">Chocolatine - Artisan Bakery</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
                <Nav className="navLinksContainer">
                    <Nav.Link href="#about" className="smoothscroll navbar-link">About Us</Nav.Link>
                    <Nav.Link href="#menu" className="smoothscroll navbar-link">Menu</Nav.Link>
                    <Nav.Link href="#contact" className="smoothscroll navbar-link">Contact Us</Nav.Link>
                    <Nav.Link href="#order" className="smoothscroll navbar-link">Order</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
