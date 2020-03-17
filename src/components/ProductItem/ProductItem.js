import React from 'react';
import './ProductItem.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faCartPlus);

const ProductItem = props => {
  return (
    <div className="ProductItem">
      <div className="card-content">
        <h5 className="card-content__title">{props.title}</h5>
        <label className="description">Description:</label>
        <p>{props.description}</p>
        <label className="description">Price:</label>
        <p>{props.price}₴</p>
        <div className="d-flex flex-row-reverse">
          <button className="btn btn-success">
            <FontAwesomeIcon icon='cart-plus'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;