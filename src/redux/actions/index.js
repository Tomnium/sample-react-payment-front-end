import { PRODUCTS, ADD_TO_CART, CART_PRODUCTS, DELETE_FROM_CART, CHECK_CART, SIGNUP, LOGIN, CHECK_USER_TOKEN, CHECK_USER_TOKEN_FAILED, LOGOUT, PAY } from '../constants/constants';
import { getProducts, getProductsFromCart, setRegistration, setLogin, setPay } from '../../services/services';
import { getCart, removeCart } from "../../helpers/cartStorage";
import { setAuthHeader, removeToken } from "../../helpers/apiClient";

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

export function deleteFromCart(id, products, list) {
  const idList = list;
  delete idList[id];
  return {
    type: DELETE_FROM_CART,
    deleteProduct: products.find(el => el.product._id === id),
    idList: idList,
    cartProducts: products
  }
}

export function checkCartStorage(){
  const cartStorage = getCart();
  if(cartStorage){
    return function(dispatch){
      dispatch({type: CHECK_CART, cartStorage});
    }
  } else {
    return {
      type: null,
      payload: null
    }
  }
}

export function signUp(username, email, password){
  return {
    type: SIGNUP,
    payload: setRegistration(username, email, password)
  };
}

export function logIn(email, password){
  return {
    type: LOGIN,
    payload: setLogin(email, password)
  };
}

export function logOut() {
  removeToken();
  removeCart();
  return {
    type: LOGOUT
  };
}

export function checkIsLogin() {
  const token = localStorage.getItem('UserToken');
  if(token){
    setAuthHeader(token);
    return function(dispatch){
      dispatch({type: CHECK_USER_TOKEN});
    }
  } else {
    return function(dispatch){
      dispatch({type: CHECK_USER_TOKEN_FAILED});
    }
  }
}

export function pay(idList, amount, description, token) {
  return {
    type: PAY,
    payload: setPay(idList, amount, description, token)
  }
}
