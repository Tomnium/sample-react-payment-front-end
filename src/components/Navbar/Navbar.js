import React from 'react';
import './Navbar.scss';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt, faUserCircle, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faSignInAlt, faUserCircle, faSignOutAlt);

function Navbar() {
  const idList = useSelector(state => state.cart.idList);
  const isLogin = useSelector(state => state.auth.isLogin);

  const counter = () => {
    let amount = 0;
    Object.keys(idList).map( id => { 
      if(idList[id]) {
        amount += idList[id]
      }
      return null
    });
    return amount;
  }

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={`/`}>Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {
              !isLogin ?
              <li className="nav-item">
                <Link className="nav-link" to={`/sign-in`}>SignIn <FontAwesomeIcon icon='sign-in-alt'/></Link>
              </li> :
              <li className="nav-item">
                <Link className="nav-link" to={`/`} alt='LogOut'>Logout <FontAwesomeIcon icon='sign-out-alt'/></Link>
              </li>
            }
            {
              !isLogin ?
              <li className="nav-item">
                <Link className="nav-link" to={`/sign-up`}>SignUp <FontAwesomeIcon icon='user-circle'/></Link>
              </li>
              : null
            }
            <li className="nav-item">
              <Link className="nav-link" to={`/cart`}><FontAwesomeIcon icon='shopping-cart'/>{counter()?<span className="circle">{counter()}</span>:null}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;