import { PRODUCTS, ADD_TO_CART, CART_PRODUCTS, DELETE_FROM_CART } from '../constants/constants';
import { getProducts, getProductsFromCart } from '../../services/services';

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

export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    payload: id
  }
}