import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import { Route, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Signin} />
        <Route exact path='/signup' component={Signup} />
      </div>
    );
  }
}

export default withRouter(App);
