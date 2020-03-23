import { ActionType } from 'redux-promise-middleware';
import { SIGNUP, LOGIN } from '../constants/constants';

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
    case `${LOGIN}_${ActionType.Pending}`: {
      return {
        ...state,
        loggingIn: true
      }
    }
    case `${LOGIN}_${ActionType.Fulfilled}`: {
      return {
        ...state,
        loggingIn: false,
        isLogin: true,
        loginError: false
      }
    }
    case `${LOGIN}_${ActionType.Rejected}`: {
      return {
        ...state,
        loggingIn: false,
        loginError: action.error
      }
    }
    default: return state;
  }
}