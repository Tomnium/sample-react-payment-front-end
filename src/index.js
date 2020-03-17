import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import { productReducer, initialState } from './redux/reducers/productReducer';
import { httpMiddleware } from './redux/middleware/middleware';

const reducers = {
  form: formReducer,
  products: productReducer
};
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, initialState, applyMiddleware(httpMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
