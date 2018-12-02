import React, { Component } from 'react';
import './SearchBox.css';
import { getSearchResults, imageBaseUrl } from '../../services/apiService';

/**
 * @class SearchBox
 * @description SearchBox is a Component which take text as input to search movies 
 * by calling search API.
 * It shows top 7 movies from search.
 * State of this Component will contain search text which is input and 
 * results which is response of the search API
 * UL is used to show the movie list 
 */

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            results: []
        }
        this.timer = null;
    }

    goToMovie = id => {
        this.setState({ results: [] });
        this.props.goToMovie(id)
    }

    renderResults = () => {
        if (!this.state.results || !this.state.results.length) return;
        let resultsToShow = this.state.results.slice(0, 7);
        return resultsToShow.map(result => {
            return (<li onClick={() => this.goToMovie(result.id)} key={result.id}>
                <img width="30" height="45" src={`${imageBaseUrl}w185${result.poster_path}`} alt={result.title} />
                <span style={{marginLeft: '15px'}}>{result.title}</span>
            </li>);
        });
    }

    handleSearchChange = (event) => {
        if (event.target.value.length) {
            this.setState({ searchText: event.target.value });
        } else {
            this.setState({ searchText: event.target.value, results: [] });
            return;
        }


        //calling API after 200ms, to avoiding unnecessary API calls
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.timer = setTimeout(() => {
            let params = {
                query: this.state.searchText
            }
            getSearchResults(params)
                .then(({ results }) => this.setState({ results }));
        }, 200);
    }

    render() {
        const resultBox = (
                <div className="result-section">
                    <ul>
                        {this.renderResults()}
                    </ul>
                </div>
        );

        const box = (
            <div>
                <div className="search-section">
                    <input type="search"
                        value={this.state.searchText}
                        onChange={this.handleSearchChange}
                        placeholder="Search..."
                    />
                    <span><i className="fa fa-search"></i></span>
                </div>
                {this.state.results.length ? resultBox : null}
            </div>
        );
        return box;
    }
}

export default SearchBox;