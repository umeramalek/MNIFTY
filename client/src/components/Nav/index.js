import React from 'react';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import '/style.css'
import Auth from "../../utils/auth";





function Nav() {

    function showNavigation() {

            return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/"> MNIFTY </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            )

    }
        return(
        <div>
            {showNavigation()}
        </div>
    )
}


export default Nav;






// import React from 'react';
// import {
//   Nav,
//   NavLink,
//   NavMenu,
//   NavBtn,
//   NavBtnLink
// } from './NavbarElements';

// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <NavLink to='/'>
//           MNIFTY
//         </NavLink>
//         <NavMenu>
//           <NavLink to='/orderHistory' activeStyle>
//             Order History
//           </NavLink>
//           <NavLink to='/signup' activeStyle>
//             Sign up
//           </NavLink>
//           <NavLink to='/signup' activeStyle>
//             Log In
//           </NavLink>
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//         </NavBtn>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;






// import React from "react";
// import { Link } from 'react-router-dom';
// import Auth from "../../utils/auth";
// import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';

// function Nav() {

//     function showNavigation() {
//         if (Auth.loggedIn()) {
//             return (
//                 <div>
//                     <Navbar
//                         color="danger"
//                         expand="md"
//                         light
//                     >

//                         <NavbarToggler onClick={function noRefCheck() { }} />
//                         <Collapse navbar>
//                             <Nav
//                                 className="me-auto"
//                                 navbar
//                             >
//                                 <NavItem>
//                                     <Link to="/orderHistory">
//                                     Order History
//                                     </Link>
//                                 </NavItem>
//                                 <NavItem>
//                                     <Link href="/" onClick={() => Auth.logout()}>
//                                         Logout
//                                     </Link>
//                                 </NavItem>
//                             </Nav>
//                         </Collapse>
//                     </Navbar>
//                 </div>
//             );
//         } else {
//             return(
//                 <Navbar
//                 color="danger"
//                         expand="md"
//                         light>
//                 <NavbarBrand href="/">
//                     MNIFTY
//                 </NavbarBrand>
//                     <NavItem>
//                         <Link to="/signup">
//                         Signup
//                         </Link>
//                     </NavItem>
//                     <NavItem>
//                         <Link to="/login">
//                         Login
//                         </Link>
//                     </NavItem>
//                 </Navbar>       
//                 )
//         }
//     }
//     return(
//         <Navbar>
//             {showNavigation()}
//         </Navbar>
//     )
// }

// export default Nav;