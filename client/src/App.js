import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar></Navbar>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/tasks" component={Home}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
