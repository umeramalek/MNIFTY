import React from "react";
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
// import Cart from "../../components/cart";
// import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                // <div>
                //     <Navbar
                //         color="danger"
                //         expand="md"
                //         light
                //     >
                //         <NavbarBrand href="/">
                //             <span role="img" aria-label="shopping bag"></span>
                //             MNIFTY
                //         </NavbarBrand>
                //         <NavbarToggler onClick={function noRefCheck() { }} />
                //         <Collapse navbar>
                //             <Nav
                //                 className="me-auto"
                //                 navbar
                //             >
                //                 <NavItem>
                //                     <Link to="/orderHistory">
                //                     Order History
                //                     </Link>
                //                 </NavItem>
                //                 <NavItem>
                //                     <Link href="/" onClick={() => Auth.logout()}>
                //                         Logout
                //                     </Link>
                //                 </NavItem>
                //             </Nav>
                //         </Collapse>
                //         {/* <Cart /> */}
                //     </Navbar>
                // </div>
                <ul className="flex-row">
                <li className="mx-1">
                  <Link to="/orderHistory">
                      Purchase History
                  </Link>
                </li>
                <li className="mx-1">
                  {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                  <a href="/" onClick={() => Auth.logout()}>
                      Logout
                  </a>
                </li>
              </ul>
            );
        } else {
            return(
                // <Navbar>
                //     <NavItem>
                //         <Link to="/signup">
                //         Signup
                //         </Link>
                //     </NavItem>
                //     <NavItem>
                //         <Link to="/login">
                //         Login
                //         </Link>
                //     </NavItem>
                // </Navbar>  
                <ul className="flex-row">
                <li className="mx-1">
                  <Link to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="mx-1">
                  <Link to="/login">
                    Login
                  </Link>
                </li>
              </ul>     
                )
        }
    }
    return(
        // <Navbar>
        //     {showNavigation()}
        // </Navbar>
        <header className="flex-row px-1">
        <h1>
          <Link to="/">
            MNIFTY
          </Link>
        </h1>
  
        <nav>
          {showNavigation()}
        </nav>
      </header>
    )
}

export default Nav;