import React from "react";
import Auth from "../../utils/auth";
import { Navbar, NavbarBrand,NavbarToggler,Collapse,NavItem,NavLink } from 'reactstrap';

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div>
                    <Navbar
                        color="light"
                        expand="md"
                        light
                    >
                        <NavbarBrand href="/">
                            <span role="img" aria-label="shopping bag">🛍️</span>
                            MNIFTY
                        </NavbarBrand>
                        <NavbarToggler onClick={function noRefCheck() { }} />
                        <Collapse navbar>
                            <Nav
                                className="me-auto"
                                navbar
                            >
                                <NavItem>
                                    <NavLink to="/orderHistory">
                                    Order History
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/" onClick={() => Auth.logout()}>
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            );
        } else {
            return(
                <Navbar>
                    <NavItem>
                        <NavLink to="/signup">
                        Signup
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/login">
                        Login
                        </NavLink>
                    </NavItem>
                </Navbar>       
                )
        }
    }
    return(
        <Navbar>
            {showNavigation()}
        </Navbar>
    )
}

export default Nav;