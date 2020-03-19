import apiClient from '../helpers/apiClient';

export const getProducts = () => {
  return apiClient.get('api/product/getAll')
}

export const getProductsFromCart = idList => {
  return apiClient.post('api/product/getCarts', idList)
}