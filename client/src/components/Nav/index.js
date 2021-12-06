import React from "react";
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
import './style.css'
// import Cart from "../../components/cart";

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div className="flex-row navbar menu-nav">
                <h4 className="mx-1">
                  <Link to="/orderHistory" className="links-nav">
                      Purchase History
                  </Link>
                </h4>
                <h4 className="mx-1">
                  {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                  <a className="links-nav" href="/" onClick={() => Auth.logout()}>
                      Logout
                  </a>
                </h4>
              </div>
            );
        } else {
            return(
                <ul className="flex-row  menu-nav ">
                <li className="mx-1">
                  <Link to="/signup" className="links-nav">
                    Signup
                  </Link>
                </li>
                <li className="mx-1">
                  <Link to="/login" className="links-nav">
                    Login
                  </Link>
                </li>
              </ul>     
                )
        }
    }
    return(
        <header className="flex-row px-1 navbar ">
        <h1>
          <Link to="/" className="links-nav mayMainNav">
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