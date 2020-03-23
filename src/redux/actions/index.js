import { PRODUCTS, ADD_TO_CART, CART_PRODUCTS, DELETE_FROM_CART, CHECK_CART, SIGNUP } from '../constants/constants';
import { getProducts, getProductsFromCart, setRegistration } from '../../services/services';
import { getCart } from "../../helpers/cartStorage";

export function productsRequest() {
  return {
    type: PRODUCTS,
    payload: getProducts()
  }
}

export function addToCart(productId){
  return {
      type: ADD_TO_CART,
      payload: productId
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

export function checkCartStorage(){
  let cartStorage = getCart();
  if(cartStorage){
      return function(dispatch){
          dispatch({type:CHECK_CART, cartStorage});
      }
  }
}

export function signUp(username, email, password){
  return {
      type: SIGNUP,
      payload: setRegistration(username, email, password)
  };
}