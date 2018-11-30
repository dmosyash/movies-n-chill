import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './SearchBox.css';
import { getSearchResults } from '../../services/apiService';

/**
 * @class SearchBox
 * @description SearchBox is a Component which take text as input to search movies 
 * by calling search API.
 * It only shows top 7 movies from search.
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

    renderResults = () => {
        let resultsToShow = this.state.results.slice(0, 7);
        return resultsToShow.map(result => {
            return <li onClick={() => this.props.goToMovie(result.id)} key={result.id}>{result.title}</li>
        });
    }

    handleSearchChange = (event) => {
        this.setState({ searchText: event.target.value });

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
            <BrowserRouter>
                <div className="result-section">
                    <ul>
                        {this.renderResults()}
                    </ul>
                </div>
            </BrowserRouter>
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