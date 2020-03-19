import { ActionType } from 'redux-promise-middleware';
import { ADD_TO_CART } from '../constants/constants';

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