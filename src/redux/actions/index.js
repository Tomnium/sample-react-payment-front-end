// export const fetchProductsStart = () => {
//   return {
//     type: 'FETCH_PRODUCTS_START'
//   }
// }

// export const fetchProductsSuccess = () => {
//   return {
//     type: 'FETCH_PRODUCTS_SUCCESS'
//   }
// }

// export const fetchProductsFail = () => {
//   return {
//     type: 'FETCH_PRODUCTS_FAIL'
//   }
// }

// export const loginStart = () => {
//   return {
//     type: 'LOGIN_START'
//   }
// }

// export const loginSuccess = () => {
//   return {
//     type: 'LOGIN_SUCCESS'
//   }
// }

// export const loginFail = () => {
//   return {
//     type: 'LOGIN_FAIL'
//   }
// }

// export const signupStart = () => {
//   return {
//     type: 'SIGNUP_START'
//   }
// }

// export const signupSuccess = () => {
//   return {
//     type: 'SIGNUP_SUCCESS'
//   }
// }

// export const signupFail = () => {
//   return {
//     type: 'SIGNUP_FAIL'
//   }
// }

// export const logoutSuccess = () => {
//   return {
//     type: 'LOGOUT_SUCCESS'
//   }
// }

// export const checkUserToken = () => {
//   return {
//     type: 'CHECK_USER_TOKEN'
//   }
// }

import { PRODUCTS } from '../constants/constants';

export function httpAction(action) {
  const httpActionTemplate = {
    type: PRODUCTS,
    endpoint: null,
    verb: "GET",
    payload: null,
    headers: []
  };
  
  return {
    HTTP_ACTION: Object.assign({}, httpActionTemplate, action)
  };
}

export function getProducts() {
  return httpAction({
    type: PRODUCTS,
    endpoint: "http://localhost:3000/api/product/getAll"
  });
}