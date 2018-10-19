import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Auth/Signup';
import { Route, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
       <Route exact path='/Signup' component={Signup} />
      </div>
    );
  }
}

export default withRouter(App);
