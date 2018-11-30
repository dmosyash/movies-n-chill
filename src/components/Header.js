import React from 'react';
import SearchBox from './search-box/SearchBox';

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
        <h2>Movies N Chill</h2>
        <div style={searchBoxContainer}><SearchBox goToMovie={props.goToMovie} /></div>
    </header>
);

export default Header;