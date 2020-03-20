import React from 'react';
import './CartList.scss';
import CartItem from './CartItem/CartItem';

const CartList = props => {
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
            return <CartItem key={index} product={product} />
          }) : null}
        </tbody>
      </table>
      <p className="CartList__price">Total Price: {props.total}</p>
    </div>
  )
}

export default CartList;