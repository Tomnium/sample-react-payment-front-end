import React from 'react';
import './CartItem.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt);

const CartItem = () => {
  return (
      <tr className='cart-row'>
        <td>Product</td>
        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
        <td>20</td>
        <td>1</td>
        <td>
          <button className='btn btn-outline-danger' style={{borderWidth:0}}>
          <FontAwesomeIcon icon='trash-alt'/>
          </button>
        </td>
      </tr>
  )
}

export default CartItem;