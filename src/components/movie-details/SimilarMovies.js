import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { imageBaseUrl } from '../../services/apiService';

/**
 * @name SimilarMovies
 * @description this dumb component shows similar movies to the selected movie.
 * @param {*} list it has list of similar movies come as a prop.
 * @param {function} onClick click event to show details of clicked Movie.
 */

const renderMovies = (list, onClick) => {
    return list.map(movie => (
        <Col key={movie.id}
            xs={4} md={1}
            style={{ height: '130px' }}
            onClick={() => onClick(movie.id)}>
                <img width="50" height="75" src={`${imageBaseUrl}w185${movie.poster_path}`}
                    alt={movie.title} />
                <div style={{height: '50px', fontSize: '12px', overflow: 'hidden'}}>{movie.title}</div>
        </Col>
    ));
}

const SimilarMovies = ({ list, onClick }) => (
    <Grid>
        <Row>{renderMovies(list, onClick)}</Row>
    </Grid>
);

export default SimilarMovies;