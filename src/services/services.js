import apiClient from '../helpers/apiClient';

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
  console.log(body);
  return apiClient.post(`api/auth/signup`, body)
}