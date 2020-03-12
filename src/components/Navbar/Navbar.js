import React from 'react';
import './Navbar.scss';
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt, faUserCircle, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faSignInAlt, faUserCircle, faSignOutAlt);

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={`/`}>Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={`/sign-in`}>SignIn <FontAwesomeIcon icon='sign-in-alt'/></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/sign-up`}>SignUp <FontAwesomeIcon icon='user-circle'/></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/cart`}><FontAwesomeIcon icon='shopping-cart'/></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;