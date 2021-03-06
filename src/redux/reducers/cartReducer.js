import { ActionType } from 'redux-promise-middleware';
import { ADD_TO_CART, CART_PRODUCTS, DELETE_FROM_CART, CHECK_CART, PAY } from '../constants/constants';
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
      return {
        ...state,
        idList: action.idList,
        totalPrice: state.totalPrice-(action.deleteProduct.product.price * action.deleteProduct.quantity),
        cartProducts: action.cartProducts.filter(product=>product !== action.deleteProduct),
        saveCart: saveCart(action.idList)
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
      return {
        ...state,
        isPay: false,
        idList: {},
        cartProducts: [],
        totalPrice: 0
      }
    }
    case `${PAY}_${ActionType.Rejected}`: {
      return {
        ...state,
        isPay: false
      }
    }
    default: return state;
  }
}