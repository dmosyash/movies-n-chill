import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import { imageBaseUrl } from './../services/apiService';

/**
 * @constant MovieCell
 * @param {Object} movie this has all details of Movie
 * thumbnail of movie is getting from TMDb server of 185px width 
 */

const MovieCell = ({ movie }) => (
    <Col xs={12} md={3} key={movie.id} style={{ height: '380px' }}>
        <img style={{ width: '185px', height: '275px' }}
            src={`${imageBaseUrl}w185/${movie.poster_path}`}
            alt={movie.title}
        />
        <h4>{movie.title}</h4>
    </Col>
);

export default MovieCell;