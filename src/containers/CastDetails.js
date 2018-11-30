import React, { Component } from 'react';
import { getCastDetails, getCastMovies } from './../services/apiService';
import CastDetailView from './../components/cast-details/CastDetailView';
import CastInMoviesView from './../components/cast-details/CastInMoviesView';

/**
 * @class CastDetails
 * @description CastDetails is a Container which get popular movies from API called in componentDidMount
 * and changing state so movies will get render.
 * State of this Container is Movie List
 * Grid is used to show the movie list 
 */
class CastDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movieList: [],
            castData: {}
        };
    }

    componentDidMount() {
        getCastDetails(this.props.match.params.id)
            .then(response => {
                this.setState({
                    loading: false,
                    castData: response
                });
            });
        getCastMovies(this.props.match.params.id)
            .then(response => {
                this.setState({
                    movieList: response.cast
                });
            });
    }

    goToMovie = id => this.props.history.push(`/movie/${id}`);

    render() {
        const { castData, movieList } = this.state;
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
                                <CastDetailView cast={castData} />
                                <br />
                                <h4>In Movies</h4>
                                <CastInMoviesView onClick={this.goToMovie} movieList={movieList} />
                            </React.Fragment>
                        )
                }
            </div>
        );
        
        return container;
    }
}

export default CastDetails;