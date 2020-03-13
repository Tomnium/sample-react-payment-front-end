import React from 'react';
import './App.scss';
import Navbar from '../Navbar/Navbar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProductList, CartList, LogIn, SignUp } from '../index';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-wrapper">
          <Route exact path='/' component={ProductList}/>
          <Route exact path='/sign-in' component={LogIn}/>
          <Route exact path='/sign-up' component={SignUp}/>
          <Route exact path='/cart' component={CartList}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
