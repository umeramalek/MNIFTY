import React from "react";
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
// import Cart from "../../components/cart";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div>
                    <Navbar
                        color="danger"
                        expand="md"
                        light
                    >
                        <NavbarBrand href="/">
                            <span role="img" aria-label="shopping bag"></span>
                            MNIFTY
                        </NavbarBrand>
                        <NavbarToggler onClick={function noRefCheck() { }} />
                        <Collapse navbar>
                            <Nav
                                className="me-auto"
                                navbar
                            >
                                <NavItem>
                                    <Link to="/orderHistory">
                                    Order History
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/" onClick={() => Auth.logout()}>
                                        Logout
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        {/* <Cart /> */}
                    </Navbar>
                </div>
            );
        } else {
            return(
                <Navbar>
                    <NavItem>
                        <Link to="/signup">
                        Signup
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/login">
                        Login
                        </Link>
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