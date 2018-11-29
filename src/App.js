import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import SearchBox from './components/SearchBox';
import Home from './containers/Home';
import MovieDetails from './containers/MovieDetails';

class App extends Component {
  goToMovie = id => {
    console.log(this.props, id);
    this.props.history.push(`movie/${id}`);
  }
  
  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h2>Movies N Chill</h2>
            <div className="search-box-container"><SearchBox goToMovie={this.goToMovie} /></div>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={MovieDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
