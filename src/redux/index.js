import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { productReducer } from './reducers/productReducer';
import logger from 'redux-logger';
import { cartReducer } from './reducers/cartReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { authReducer } from './reducers/authReducer';

const reducers = {
  form: formReducer,
  products: productReducer,
  cart: cartReducer,
  auth: authReducer
};

const rootReducer = combineReducers(reducers);

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, promise, logger)));

export default store;