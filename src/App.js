import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Home from './containers/Home';
import MovieDetails from './containers/MovieDetails';
import CastDetails from './containers/CastDetails';
import Footer from './components/Footer';

/**
 * @name App
 * @description The main component of the app.
 * It contains three parts Header, Route part and Footer
 */

class App extends Component {
  
  goToMovie = id => this.props.history.push(`/movie/${id}`);

  goHome = () => this.props.history.push('/');
  
  render() {
      const styleContainer = {
        padding: '50px 80px',
        backgroundColor: '#dfdfdf',
        minHeight: '80vh'
      }
    
    return (
      <div>
        <Header goToMovie={this.goToMovie} goHome={this.goHome} />
        <div style={styleContainer}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page/:pageNo" component={Home} />
            <Route path="/movie/:id" component={MovieDetails} />
            <Route path="/cast/:id" component={CastDetails} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
