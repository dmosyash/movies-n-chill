import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import { imageBaseUrl } from '../services/apiService';

/**
 * @constant MovieCell
 * @param {Object} movie this has all details of Movie
 * thumbnail of movie is getting from TMDb server of 185px width 
 */

const MovieCell = ({ onClick, movie }) => (
    <Col xs={12} md={3} style={{ height: '380px' }} onClick={() => onClick(movie.id)}>
        <img style={{ width: '185px', height: '275px' }}
            src={`${imageBaseUrl}w185/${movie.poster_path}`}
            alt={movie.title}
        />
        <h4>{movie.title}</h4>
    </Col>
);

export default MovieCell;