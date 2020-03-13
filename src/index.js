import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {reducer as formReducer} from 'redux-form';

const reducers = {
  form: formReducer
};
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
