import React from 'react';
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div id="headerContainer">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Chocolatine</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#about" className="nav-link">About Us</Nav.Link>
                <Nav.Link href="#menu" className="nav-link">Menu</Nav.Link>
                <Nav.Link href="#contact" className="nav-link">Contact Us</Nav.Link>
                <Nav.Link href="#order" className="nav-link">Order</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  );
};

export default Header;
