import React from 'react';
import './App.scss';
import Navbar from '../Navbar/Navbar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LogIn } from '../index';
import { SignUpContainer, HomeContainer, CartContainer } from '../../containers';
import Wrapper from '../Wrapper/Wrapper';

function App() {
  return (
    <Router>
      <Wrapper>
        <div className="App">
          <Navbar />
          <div className="main-wrapper">
            <Route exact path='/' component={HomeContainer}/>
            <Route exact path='/sign-in' component={LogIn}/>
            <Route exact path='/sign-up' component={SignUpContainer}/>
            <Route exact path='/cart' component={CartContainer}/>
          </div>
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
