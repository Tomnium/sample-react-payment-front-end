import React from 'react';
import './CartItem.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt);

const CartItem = props => {
  return (
      <tr className='cart-row'>
        <td>{props.product.product.title}</td>
        <td>{props.product.product.description}</td>
        <td>{props.product.product.price}</td>
        <td>{props.product.quantity}</td>
        <td>
          <button className='btn btn-outline-danger' style={{borderWidth:0}}>
          <FontAwesomeIcon icon='trash-alt'/>
          </button>
        </td>
      </tr>
  )
}

export default CartItem;