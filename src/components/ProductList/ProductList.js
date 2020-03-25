import React from 'react';
import './ProductList.scss';
import ProductItem from '../ProductItem/ProductItem';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector(state => state.products.products);
  return (
    <div className="ProductList">
      <h3 className="ProductList__title">Products:</h3>
      <div className="ProductList__items">
        {
          products ?
          products.map(product => {
            return <ProductItem 
              key={product._id}  
              title={product.title} 
              description={product.description}
              price={product.price}
              id={product._id}
              />
          })
          : null
        }
      </div>
    </div>
  )
}

export default ProductList;