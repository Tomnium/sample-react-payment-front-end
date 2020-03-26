import apiClient, { setAuthHeader } from '../helpers/apiClient';
import { CURRENCY } from '../helpers/stripeConfig';
import { removeCart } from "../helpers/cartStorage";

export const getProducts = () => {
  return apiClient.get('api/product/getAll')
}

export const getProductsFromCart = idList => {
  const body = {
    idList
  }
  return apiClient.post('api/product/getCarts', body)
}

export const setRegistration = (username, email, password) => {
  const body = {
    username: username,
    email: email,
    password: password
  }
  return apiClient.post(`api/auth/signup`, body)
}

export const setLogin = (email, password) => {
  const body = {
    email: email,
    password: password
  }
  return apiClient.post(`api/auth/login`, body).then(({data}) => setAuthHeader(data.token))
}

export const setPay = (idList, amount, description, token) => {
  const body = {
    payment_info: {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: amount * 100
    },
    idList
  }
  return apiClient.post(`api/pay/test`, body).then(() => successPayment()).catch(err => errorPayment(err))
}

export const successPayment = () => {
  alert('Payment Successful');
  removeCart();
};

export const errorPayment = err => {
  alert('Payment Error:', err);
};