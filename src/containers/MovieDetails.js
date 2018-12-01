import React, { Component } from 'react';
import { getMovieDetails, getMovieCast, getSimilarMovies } from '../services/apiService';
import MovieDetailView from '../components/movie-details/MovieDetailView';
import MovieCastView from '../components/movie-details/MovieCastView';
import SimilarMovies from '../components/movie-details/SimilarMovies';

/**
 * @class MovieDetails
 * @description MovieDetails is a Container which show detail of the movie from API
 * called in componentDidMount and changing state so details get render.
 * It also call APIs for similar movies and its cast n crew.
 * State of this Container is Movie Data, cast of movie and similar movies. 
 */

class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movieData: {},
            movieCast: [],
            similarMovies: []
        };
    }

    componentDidMount() {
        this.callApis(this.props.match.params.id)
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.callApis(nextProps.match.params.id);
        }
    }

    callApis = id => {
        this.setState({ loading: true });
        getMovieDetails(id)
            .then(response => {
                this.setState({
                    loading: false,
                    movieData: response
                });
            });

        getMovieCast(id)
            .then(response => {
                this.setState({
                    movieCast: response.cast
                });
            });

        getSimilarMovies(id)
            .then(response => {
                this.setState({
                    similarMovies: response.results.slice(0, 10)
                });
            });
    }

    goToCast = id => this.props.history.push(`/cast/${id}`);

    goToMovie = id => this.props.history.push(`/movie/${id}`);

    render() {
        const { movieData, movieCast, similarMovies } = this.state;

        const container = (
            <div key={movieData.id}>
                {
                    this.state.loading ? <h2> Loading... </h2> :
                        (
                            <React.Fragment>
                                <MovieDetailView movieData={movieData} />
                                <br />
                                <h4>Similar Movies</h4>
                                <SimilarMovies onClick={this.goToMovie} list={similarMovies} />
                                <br />
                                <h4>Cast and Crew</h4>
                                <MovieCastView onClick={this.goToCast} cast={movieCast} />
                            </React.Fragment>
                        )
                }
            </div>
        );
        
        return container;
    }
}

export default MovieDetails;