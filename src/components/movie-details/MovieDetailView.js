import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { imageBaseUrl } from './../../services/apiService';
import './../Details.css';

const renderMultipleAnswers = (data = []) => {
    return data.map((item, i) => {
        return item.name + (i === data.length - 1 ? '.' : ', ');
    });
}

const convertInMillions = (amount = 0) => (parseInt(amount, 10) / 1000000).toFixed(2) + ' millions.';

const MovieDetailView = ({ movieData }) => {
    return (
        <Grid>
            <Row>
                <Col xs={12} md={3}>
                    <img width={240} height={364} src={`${imageBaseUrl}w500/${movieData.poster_path}`} alt="thumbnail" />
                </Col>
                <Col xs={12} md={9}>
                    <h2>{movieData.title}</h2>
                    <h6>{movieData.tagline}</h6>
                    <Row>
                        <Col xs={6} md={2}>
                            <span className="sub-key">Minutes:</span> {movieData.runtime}
                        </Col>
                        <Col xs={6} md={2}>
                            <span className="sub-key">Status:</span> {movieData.status}
                        </Col>
                        <Col xs={6} md={3}>
                            <span className="sub-key">Release Date:</span> {movieData.release_date}
                        </Col>
                        <Col xs={6} md={4}>
                            <span className="sub-key">genres:</span> {renderMultipleAnswers(movieData.genres)}
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={12} md={7}>
                            <span className="key">Ratings:</span>
                            <span className="value">{movieData.vote_average}</span> / 10
                                    <span style={{ fontSize: '10px' }}>({movieData.vote_count})</span>
                        </Col>
                    </Row>
                    {movieData.budget ? (<Row>
                        <Col xs={12} md={7}>
                            <span className="key">Budget:</span>
                            <span className="value">${convertInMillions(movieData.budget)}</span>
                        </Col>
                    </Row>) : null}
                    {movieData.revenue ? (<Row>
                        <Col xs={12} md={7}>
                            <span className="key">Box Office:</span>
                            <span className="value">${convertInMillions(movieData.revenue)}</span>
                        </Col>
                    </Row>) : null}
                    <Row>
                        <Col xs={12} md={7}>
                            <span className="key">Language:</span>
                            <span className="value">
                                {renderMultipleAnswers(movieData.spoken_languages)}
                            </span>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={12} md={12}>
                            <span className="key">Plot:</span>
                            <p className="value">{movieData.overview}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    );
}

export default MovieDetailView;