import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Movies N Chill</h2>
        </header>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
