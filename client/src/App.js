import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import Jokes from './Jokes/Jokes'
import { Route, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/jokes' component={Jokes} />
      </div>
    );
  }
}

export default withRouter(App);
