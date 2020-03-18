import { PRODUCTS, ADD_TO_CART } from '../constants/constants';

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

export function addToCart(productId){
  return {
      type: ADD_TO_CART,
      result: productId
  };
}