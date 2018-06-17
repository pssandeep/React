import React, { Component } from 'react';
import './App.css';
import NewsListing from './NewsListing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The News App</h1>
        <NewsListing />
      </div>
    );
  }
}

export default App;
