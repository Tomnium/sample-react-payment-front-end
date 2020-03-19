import { PRODUCTS } from '../constants/constants';
import { getProducts } from '../../services/services';

export function productsRequest() {
  return {
    type: PRODUCTS,
    payload: getProducts()
  }
}

// export function addToCart(productId){
//   return {
//       type: ADD_TO_CART,
//       result: productId
//   };
// }