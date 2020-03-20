import { ActionType } from 'redux-promise-middleware';
import { ADD_TO_CART, CART_PRODUCTS, DELETE_FROM_CART } from '../constants/constants';

const initialState={
  idList: {}
}

export function cartReducer(state = initialState, action) {
  switch (action.type){
    case (ADD_TO_CART): {
      return {
        ...state,
        idList:{...state.idList, [action.result]: (state.idList[action.result] || 0) + 1}
      }
    }
    case (DELETE_FROM_CART): {
      let deleteProduct = state.cartProducts.find(p=>p.product._id === action.payload);
      return {
        ...state,
        idList: {...state.idList, [action.payload]: undefined},
        totalPrice: state.totalPrice-(deleteProduct.product.price*deleteProduct.quantity),
        cartProducts: state.cartProducts.filter(product=>product!==deleteProduct)
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
    default: return state;
  }
}