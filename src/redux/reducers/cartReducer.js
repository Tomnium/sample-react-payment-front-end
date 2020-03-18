import { ADD_TO_CART } from '../constants/constants';

const initialState={
  idList: {}
}

export function cartReducer(state = initialState, action) {
  switch (action.type){
    case(ADD_TO_CART): {
      return {
        ...state,
        idList:{...state.idList, [action.result]: (state.idList[action.result] || 0) + 1}
      }
    }
    default: return state;
  }
}