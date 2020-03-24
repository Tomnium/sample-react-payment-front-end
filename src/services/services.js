import apiClient from '../helpers/apiClient';
import { CURRENCY } from '../helpers/stripeConfig';
import { removeCart } from "../helpers/cartStorage";

export const getProducts = () => {
  return apiClient.get('api/product/getAll')
}

export const getProductsFromCart = idList => {
  let body = {
    idList
  }
  return apiClient.post('api/product/getCarts', body)
}

export const setRegistration = (username, email, password) => {
  let body = {
    username: username,
    email: email,
    password: password
  }
  return apiClient.post(`api/auth/signup`, body)
}

export const setLogin = (email, password) => {
  let body = {
    email: email,
    password: password
  }
  return apiClient.post(`api/auth/login`, body)
}

export const setPay = (idList, amount, description, token) => {
  let body = {
    payment_info: {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: amount * 100
    },
    idList
  }
  return apiClient.post(`api/pay/test`, body)
}

export const successPayment = () => {
  alert('Payment Successful');
  removeCart();
};

export const errorPayment = () => {
  alert('Payment Error');
};