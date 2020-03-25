import { ActionType } from 'redux-promise-middleware';
import { ADD_TO_CART, CART_PRODUCTS, DELETE_FROM_CART, CHECK_CART, PAY } from '../constants/constants';
import { successPayment, errorPayment } from '../../services/services'

import { saveCart } from '../../helpers/cartStorage';

const initialState={
  idList: {}
}

export function cartReducer(state = initialState, action) {
  switch (action.type){
    case (ADD_TO_CART): {
      return {
        ...state,
        idList: {...state.idList, [action.payload]: (state.idList[action.payload] || 0) + 1}
      }
    }
    case (DELETE_FROM_CART): {
      let deleteProduct = state.cartProducts.find(p=>p.product._id === action.payload);
      let idList = {...state.idList, [action.payload]: undefined};
      saveCart(idList);
      return {
        ...state,
        idList: idList,
        totalPrice: state.totalPrice-(deleteProduct.product.price*deleteProduct.quantity),
        cartProducts: state.cartProducts.filter(product=>product!==deleteProduct)
      }
    }
    case (CHECK_CART): {
      return{
        ...state,
        idList: action.cartStorage
      }
    }
    case `${CART_PRODUCTS}_${ActionType.Pending}`: {
      return {
        ...state
      }
    }
    case `${CART_PRODUCTS}_${ActionType.Fulfilled}`: {
      return {
        ...state,
        cartProducts: action.payload.data.products,
        totalPrice: action.payload.data.totalPrice
      }
    }
    case `${CART_PRODUCTS}_${ActionType.Rejected}`: {
      return {
        ...state
      }
    }
    case `${PAY}_${ActionType.Pending}`: {
      return {
        ...state,
        isPay: true
      }
    }
    case `${PAY}_${ActionType.Fulfilled}`: {
      successPayment();
      return {
        ...state,
        isPay: false,
        idList: {},
        cartProducts: [],
        totalPrice: 0
      }
    }
    case `${PAY}_${ActionType.Rejected}`: {
      errorPayment();
      return {
        ...state,
        isPay: false
      }
    }
    default: return state;
  }
}