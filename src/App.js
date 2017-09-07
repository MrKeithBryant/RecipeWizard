import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import navbar from './components/navbar.js'

class App extends Component {
  render() {
    return (
      <div className='nav'>
        <navbar className='nav-b'>
          <homepage />
          <kitchen />
          (Can anybody hear me?)

        </navbar>
      </div>
    );
  }
}

export default App;
