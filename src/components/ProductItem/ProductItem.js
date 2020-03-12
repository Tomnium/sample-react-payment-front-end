import React from 'react';
import './ProductItem.scss';

export default function ProductItem() {
  const {product, addToCart} = this.props;
  return (
    <div className="ProductItem">
      {/* <div className="card">
        <h5 className="card__title">{product.title}</h5>
        <label className="description">Description:</label>
        <p>{product.description}</p>
        <label className="description">Price:</label>
        <p>{product.price}₴</p>
        <div className="card__button-wrapper">
          <button className="card__button" onClick={() => {addToCart(product.id)}}>
            <FontAwesomeIcon icon='cart-plus'/>
          </button>
        </div>
      </div> */}
    </div>
  )
} 