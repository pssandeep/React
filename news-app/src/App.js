import React, { Component } from 'react';
import './App.css';
import NewsListing from './NewsListing';
import NewsSources from './NewsSources';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The News App</h1>
        <NewsSources />
        <NewsListing />
      </div>
    );
  }
}

export default App;
