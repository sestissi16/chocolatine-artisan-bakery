import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import Badge from '@material-ui/core/Badge';
import { FiShoppingCart } from "react-icons/fi"
import './Navbar.css'

class Navigation extends Component {
    render(){
        return (
            <Navbar variant="dark" expand="lg" fixed="top" className="custom-navbar-bg">
                <Navbar.Brand href="/" className="navbar-title">Chocolatine - Artisan Bakery</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="navLinksContainer">
                        <Nav.Link href="/About" className="navbar-link">About Us</Nav.Link>
                        {/* <Nav.Link href="/Menu" className="navbar-link">Menu</Nav.Link> */}
                        <NavDropdown title="Menu Options" className="navbar-link" id="menu-dropdown">
                            <NavDropdown.Item href="/Menu" className="navbar-menu-link">Small Batch / Catering</NavDropdown.Item>
                            <NavDropdown.Item href="/Wholesale" className="navbar-menu-link">Wholesale</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Contact" className="navbar-link">Contact Us</Nav.Link>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip id={`tooltip-cart`}>
                                    Your Cart.
                                </Tooltip>
                            }
                        >
                            <Nav.Link href="/Cart" className="navbar-link-cart">
                                <Badge badgeContent={this.props.orderCount} color="error">
                                    <FiShoppingCart />
                                </Badge>
                            </Nav.Link>
                        </OverlayTrigger>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default Navigation;
