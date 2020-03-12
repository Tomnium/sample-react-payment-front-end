import React from 'react';
import './ProductList.scss';
import ProductItem from '../ProductItem/ProductItem';

export default function ProductList() {
  const {products, addToCart} = this.props;
  return (
    <div className="ProductList">
      {products.map((product, index) => {
        return <ProductItem key={index} product={product} addToCart={addToCart} />
      })}
    </div>
  )
}