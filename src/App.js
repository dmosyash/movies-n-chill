import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import SearchBox from './components/searchBox';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Movies N Chill</h2>
          <div className="search-box-container"><SearchBox /></div>
        </header>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
