import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import { getPopularMovies } from './../services/apiService';
import MovieCell from '../components/MovieCell';

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
            moviesData: [],
            currentPage: 1,
            totalPages: 1
        };
    }

    componentDidMount() {
        this.callApi();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.pageNo !== nextProps.match.params.pageNo) {
            this.callApi({ page: nextProps.match.params.pageNo });
            ReactDom.findDOMNode(this).scrollIntoView();
        }
    }

    callApi = (params = {}) => {
        this.setState({ loading: true });
        getPopularMovies(params)
            .then(response => {
                this.setState({
                    loading: false,
                    moviesData: response.results,
                    currentPage: response.page,
                    totalPages: response.total_pages
                });
            });
    }

    renderMovies = () => {
        return this.state.moviesData.map(movie => {
            return <MovieCell key={movie.id} movie={movie} onClick={this.goToMovie}/>
        })
    }

    goToMovie = id => this.props.history.push(`/movie/${id}`);

    goPrevious = () => this.props.history.push(`/page/${this.state.currentPage - 1}`);

    goNext = () => this.props.history.push(`/page/${this.state.currentPage + 1}`);

    render() {
        const styleContainer = {
            paddingTop: '50px',
            backgroundColor: '#dfdfdf'
        }

        const previousBtn = {
            float: 'left',
            margin: '10px 40px'
        }

        const nextBtn = {
            float: 'right',
            margin: '10px 40px'
        }

        const container = (<div style={styleContainer}>
            {this.state.loading ? <h2>Loading...</h2> : null}
            <Grid>
                <Row>
                    {this.renderMovies()}
                </Row>
            </Grid>
            <ButtonToolbar>
                {this.state.currentPage > 1 ?
                    <Button bsStyle="success" bsSize="large" style={previousBtn} onClick={this.goPrevious}> {`<< Previous Page`}</Button>
                    : null}
                {this.state.currentPage < this.state.totalPages ?
                    <Button bsStyle="success" bsSize="large" style={nextBtn} onClick={this.goNext}>{`Next Page >>`}</Button>
                    : null}
            </ButtonToolbar>
        </div>);
        
        return container;
    }
}

export default Home;