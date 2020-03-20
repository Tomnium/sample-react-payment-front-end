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