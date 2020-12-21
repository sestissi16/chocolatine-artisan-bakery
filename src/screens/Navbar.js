import React, { Component } from 'react';
import { Nav, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import Badge from '@material-ui/core/Badge';
import { FiShoppingCart } from "react-icons/fi"
import yourOrder from "../yourOrder"
import './Navbar.css'

class Navigation extends Component {
    render(){
        console.log(this.props.orderCount)
        return (
            <Navbar variant="dark" expand="lg" fixed="top" className="custom-navbar-bg">
                <Navbar.Brand href="/" className="navbar-title">Chocolatine - Artisan Bakery</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="navLinksContainer">
                        <Nav.Link href="/About" className="navbar-link">About Us</Nav.Link>
                        <Nav.Link href="/Menu" className="navbar-link">Menu</Nav.Link>
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
