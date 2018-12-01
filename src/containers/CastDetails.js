import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { getCastDetails, getCastMovies } from './../services/apiService';
import CastDetailView from './../components/cast-details/CastDetailView';
import MoviesOfCast from '../components/cast-details/MoviesOfCast';

/**
 * @class CastDetails
 * @description CastDetails is a Container which show detail of the cast from API
 * called in componentDidMount and changing state so details get render.
 * It also call API for other movies of the person.
 * State of this Container is Person's Data, movie list of his/her. 
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
            
        window.scrollTo(0, 0);
    }

    goToMovie = id => this.props.history.push(`/movie/${id}`);

    render() {
        const { castData, movieList } = this.state;        

        const container = (
            <div>
                {
                    this.state.loading ? <h2> Loading... </h2> :
                        (
                            <React.Fragment>
                                <CastDetailView cast={castData} />
                                <br />
                                <h4>In Movies</h4>
                                <MoviesOfCast onClick={this.goToMovie} movieList={movieList} />
                            </React.Fragment>
                        )
                }
            </div>
        );
        
        return container;
    }
}

export default CastDetails;