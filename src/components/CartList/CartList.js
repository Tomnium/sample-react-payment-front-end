import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './CartList.scss';
import CartItem from './CartItem/CartItem';
import Checkout from '../Checkout/Checkout';

const CartList = props => {
  const isLogin = useSelector(state => state.auth.isLogin);
  return (
    <div className="CartList">
      <div className="card-title">Shopping cart:</div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col"/>
          </tr>
        </thead>
        <tbody>
          {props.products ? props.products.map((product, index) => {
            return <CartItem key={index} product={product} id={product.product._id} />
          }) : null}
        </tbody>
      </table>
      <p className="CartList__price">Total Price: {props.total}</p>
      {
        isLogin ?
        <Checkout 
          name={'Payment'}
          description={'Products Pay'}
          amount={props.total}
        /> :
        <div className='auth-alert'>
          <span>Login for payment</span>
          <div className="links">
            <Link to='/sign-in'>LogIn</Link> / 
            <Link to='/sign-up'>Register</Link>
          </div>
        </div>
      }
    </div>
  )
}

export default CartList;