import { PRODUCTS, ADD_TO_CART, CART_PRODUCTS } from '../constants/constants';
import { getProducts, getCartProducts } from '../../services/services';

export function productsRequest() {
  return {
    type: PRODUCTS,
    payload: getProducts()
  }
}

export function addToCart(productId){
  return {
      type: ADD_TO_CART,
      result: productId
  };
}

export function getCartProducts(idList) {
  return {
    type: CART_PRODUCTS,
    payload: getProductsFromCart(idList)
  }
}