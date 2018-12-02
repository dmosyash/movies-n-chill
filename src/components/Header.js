import React from 'react';
import SearchBox from './search-box/SearchBox';

/**
 * @name Header
 * @description as name suggest it is Header of the whole App
 * It has two parts App's Logo and Search box for movies.
 */

const headerStyle = {
    backgroundColor: '#282c34',
    minHeight: '10vh',
    fontSize: 'calc(10px + 2vmin)',
    display: 'flex',
    color: 'white',
    padding: '0px 80px'
};

const searchBoxContainer = {
    position: 'absolute',
    right: '60px',
    top: '11px',
    zIndex: '200'
}

const Header = props => (
    <header style={headerStyle}>
        <div onClick={props.goHome} style={{cursor: 'pointer'}}><h2>Movies-n-Chill</h2></div>
        <div style={searchBoxContainer}><SearchBox goToMovie={props.goToMovie} /></div>
    </header>
);

export default Header;