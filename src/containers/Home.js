import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import { getPopularMovies } from './../services/apiService';
import MovieCell from './../components/movieCell';

/**
 * @class Home
 * @description Home is a Container which get popular movies from API called in componentDidMount 
 * and changing state so movies will get render.
 * State of this Container is Movie List
 * Grid is used to show the movie list 
 */
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            moviesData: []
        };
    }

    componentDidMount() {
        getPopularMovies()
            .then(response => {
                this.setState({ loading: false, moviesData: response.results });
            });
    }

    renderMovies = () => {
        return this.state.moviesData.map(movie => {
            return <MovieCell movie={movie} />
        })
    }

    render() {
        const styleContainer = {
            paddingTop: '50px'
        }

        const container = (<div style={styleContainer}>
            {this.state.loading ? <h2>Loading...</h2> : null}
            <Grid>
                <Row>
                    {this.renderMovies()}
                </Row>
            </Grid>
        </div>);
        
        return container;
    }
}

export default Home;