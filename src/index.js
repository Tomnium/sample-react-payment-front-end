import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { productReducer } from './redux/reducers/productReducer';
import { httpMiddleware } from './redux/middleware/middleware';
import logger from 'redux-logger';
import { cartReducer } from './redux/reducers/cartReducer';

const reducers = {
  form: formReducer,
  products: productReducer,
  cart: cartReducer
};

const rootReducer = combineReducers(reducers);

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(httpMiddleware, logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
