import React from 'react';
import './Navbar.scss';
import { Link } from "react-router-dom";

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
              <Link className="nav-link" to={`/sign-in`}>SignIn</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/sign-up`}>SignUp</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/cart`}>SignUp</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;