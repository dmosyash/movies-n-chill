import React, { Component } from 'react';
import { getMovieDetails, getMovieCast } from '../services/apiService';
import MovieDetailView from './../components/MovieDetailView';
import MovieCastView from './../components/MovieCastView';

/**
 * @class MovieDetails
 * @description MovieDetails is a Container which get popular movies from API called in componentDidMount
 * and changing state so movies will get render.
 * State of this Container is Movie List
 * Grid is used to show the movie list 
 */
class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movieData: {},
            movieCast: [],
            movieData1: {
                "production_companies": [{
                    "id": 5,
                    "logo_path": "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
                    "name": "Columbia Pictures",
                    "origin_country": "US"
                },
                {
                    "id": 7505,
                    "logo_path": "/837VMM4wOkODc1idNxGT0KQJlej.png",
                    "name": "Marvel Entertainment",
                    "origin_country": "US"
                },
                {
                    "id": 34,
                    "logo_path": "/GagSvqWlyPdkFHMfQ3pNq6ix9P.png",
                    "name": "Sony Pictures",
                    "origin_country": "US"
                },
                {
                    "id": 31828,
                    "logo_path": null,
                    "name": "Avi Arad Productions",
                    "origin_country": "US"
                }
                ],
                "production_countries": [{
                    "iso_3166_1": "US",
                    "name": "United States of America"
                }]
            }
        };
    }

    componentDidMount() {
        getMovieDetails(this.props.match.params.id)
            .then(response => {
                this.setState({
                    loading: false,
                    movieData: response
                });
            });
        getMovieCast(this.props.match.params.id)
            .then(response => {
                this.setState({ movieCast: response.cast });
            });
    }

    render() {
        const { movieData, movieCast } = this.state;
        const styleContainer = {
            padding: '50px 80px',
            backgroundColor: '#dfdfdf'
        }

        const container = (
            <div style={styleContainer}>
                {
                    this.state.loading ? <h2> Loading... </h2> :
                        (
                            <React.Fragment>
                                <MovieDetailView movieData={movieData} />
                                <br />
                                <h4>Cast and Crew</h4>
                                <MovieCastView cast={movieCast} />
                            </React.Fragment>
                        )
                }
            </div>
        );
        
        return container;
    }
}

export default MovieDetails;