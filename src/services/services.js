import apiClient from '../helpers/apiClient';

export const getProducts = () => {
  return apiClient.get('api/product/getAll')
}