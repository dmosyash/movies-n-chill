import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { imageBaseUrl } from '../../services/apiService';

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

const MovieCastView = ({ list, onClick }) => (
    <Grid>
        <Row>{renderMovies(list, onClick)}</Row>
    </Grid>
);

export default MovieCastView;