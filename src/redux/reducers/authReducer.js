import { ActionType } from 'redux-promise-middleware';
import { SIGNUP } from '../constants/constants';

const initialState = {
  isLogin: false,
  loggingIn: false,
  registerIn: false,
  loginError: false,
  registerError: false
};

export function authReducer(state = initialState, action) {
  switch (action.type){
    case `${SIGNUP}_${ActionType.Pending}`: {
      return {
        ...state,
        registerIn: true
      }
    }
    case `${SIGNUP}_${ActionType.Fulfilled}`: {
      return {
        ...state,
        registerIn: false,
        registerError: false
      }
    }
    case `${SIGNUP}_${ActionType.Rejected}`: {
      return {
        ...state,
        registerIn: false,
        registerError: action.error
      }
    }
    default: return state;
  }
}