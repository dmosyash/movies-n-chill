import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Home from './containers/Home';
import MovieDetails from './containers/MovieDetails';
import CastDetails from './containers/CastDetails';
import Footer from './components/Footer';

class App extends Component {
  goToMovie = id => {
    console.log(this.props, id);
    this.props.history.push(`/movie/${id}`);
  }
  
  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <div>
          <Header goToMovie={this.goToMovie} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page/:pageNo" component={Home} />
            <Route path="/movie/:id" component={MovieDetails} />
            <Route path="/cast/:id" component={CastDetails} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
