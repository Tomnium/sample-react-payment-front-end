import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../../redux/actions';
import { cloneDeep } from 'lodash';
import './CartItem.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt);

const CartItem = props => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.cartProducts);
  const idList = cloneDeep(useSelector(state => state.cart.idList));

  const deleteHandler = (id, products, idList) => {
    dispatch(deleteFromCart(id, products, idList));
  }

  return (
      <tr className='cart-row'>
        <td>{props.product.product.title}</td>
        <td>{props.product.product.description}</td>
        <td>{props.product.product.price}</td>
        <td>{props.product.quantity}</td>
        <td>
          <button className='btn btn-outline-danger' onClick={() => deleteHandler(props.id, products, idList)} style={{borderWidth:0}}>
            <FontAwesomeIcon icon='trash-alt'/>
          </button>
        </td>
      </tr>
  )
}

export default CartItem;