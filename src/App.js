import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <p>Outer</p>
        <div className="App-outer">
          <p>inner</p>
          <div className="App-inner">
            <div className="App-first"></div>
            <div className="App-second">
            </div>
          </div>
        </div>
        <div className="App-outer2"></div>
      </div>
    );
  }
}

export default App;
