import React, { useEffect } from 'react';
import './Navbar.scss';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions';
import { saveCart } from '../../helpers/cartStorage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt, faUserCircle, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faSignInAlt, faUserCircle, faSignOutAlt);

const Navbar = () => {
  const dispatch = useDispatch();
  const idList = useSelector(state => state.cart.idList);
  const isLogin = useSelector(state => state.auth.isLogin);

  useEffect(() => {
    if(Object.keys(idList).length !== 0) {
      saveCart(idList);
    }
  })

  const counter = idList => 
    Object.values(idList).reduce((sum, cur) => {
        return sum + cur
    }, 0);

  const logOutHandler = () => {
    dispatch(logOut());
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
                <Link className="nav-link" to={`/`} onClick={() => logOutHandler()} alt='LogOut'>Logout <FontAwesomeIcon icon='sign-out-alt'/></Link>
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
              <Link className="nav-link" to={`/cart`}><FontAwesomeIcon icon='shopping-cart'/>{counter(idList)?<span className="circle">{counter(idList)}</span>:null}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;