import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import './Navbar.css'

const Navigation = () => {
  return (
        <Navbar variant="dark" expand="lg" fixed="top" className="custom-navbar-bg">
            <Navbar.Brand href="/" className="navbar-title">Chocolatine - Artisan Bakery</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
                <Nav className="navLinksContainer">
                    <Nav.Link href="/About" className="navbar-link">About Us</Nav.Link>
                    <Nav.Link href="/Menu" className="navbar-link">Menu</Nav.Link>
                    <Nav.Link href="/Order" className="navbar-link">Order</Nav.Link>
                    <Nav.Link href="/Contact" className="navbar-link">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
