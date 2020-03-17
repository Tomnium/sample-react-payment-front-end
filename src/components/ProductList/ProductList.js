import React from 'react';
import './ProductList.scss';
import ProductItem from '../ProductItem/ProductItem';
import { useSelector } from 'react-redux';

export default function ProductList() {
  return (
    <div className="ProductList">
      <h3 className="ProductList__title">Products:</h3>
      <div className="ProductList__items">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  )
}