import { ActionType } from 'redux-promise-middleware';
import { PRODUCTS } from '../constants/constants';

const initialState = {
  products: []
}

export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case `${PRODUCTS}_${ActionType.Pending}`:
      return {
        ...state
      }
    case `${PRODUCTS}_${ActionType.Fulfilled}`:
      console.log({action})
      return {
        ...state,
        products: action.payload.data
      }
    case `${PRODUCTS}_${ActionType.Rejected}`:
      return {
        ...state
      }
    default:
      return state
  }
}