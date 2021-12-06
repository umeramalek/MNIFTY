import React from "react";
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
// import Cart from "../../components/cart";

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div className="flex-row">
                <h4 className="mx-1">
                  <Link to="/orderHistory">
                      Purchase History
                  </Link>
                </h4>
                <h4 className="mx-1">
                  {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                  <a href="/" onClick={() => Auth.logout()}>
                      Logout
                  </a>
                </h4>
              </div>
            );
        } else {
            return(
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