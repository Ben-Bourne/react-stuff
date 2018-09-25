import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Timestable from './components/Timestable.js';
import Login from './components/Login.js';

class App extends Component {
  render() {
    return (
      <div>
        <a href='/timestable'>timestable</a><br/>
        <a href='/login'>login</a>
        <Router>
          <Switch>
            <Route exact path='/timestable' component={Timestable}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;