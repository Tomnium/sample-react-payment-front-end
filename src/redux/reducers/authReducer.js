import { ActionType } from 'redux-promise-middleware';
import { SIGNUP, LOGIN, LOGOUT, CHECK_USER_TOKEN, CHECK_USER_TOKEN_FAILED } from '../constants/constants';
import { setAuthHeader, removeToken } from '../../helpers/apiClient';

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
      setAuthHeader(action.payload.data.token);
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
    case LOGOUT: {
      removeToken()
      return {
        ...state,
        isLogin: false
      }
    }
    case CHECK_USER_TOKEN: {
      return {
        ...state,
        isLogin: true
      };
    }
    case CHECK_USER_TOKEN_FAILED: {
      return {
        ...state,
        isLogin: false
      }
    }
    default: return state;
  }
}