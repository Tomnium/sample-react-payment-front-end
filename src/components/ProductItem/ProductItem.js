import React from 'react';
import './ProductItem.scss';
import { addToCart } from '../../redux/actions';
import { useDispatch } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faCartPlus);

const ProductItem = props => {

  const dispatch = useDispatch();
  
  function handleAddToCart(id) {
    dispatch(addToCart(id));
  
  }
  return (
    <div className="ProductItem">
      <div className="card-content">
        <h5 className="card-content__title">{props.title}</h5>
        <label className="description">Description:</label>
        <p>{props.description}</p>
        <label className="description">Price:</label>
        <p>{props.price}₴</p>
        <div className="d-flex flex-row-reverse">
          <button onClick={() => handleAddToCart(props.id)} className="btn btn-success">
            <FontAwesomeIcon icon='cart-plus'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;