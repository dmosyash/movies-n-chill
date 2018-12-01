import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { imageBaseUrl } from './../../services/apiService';
import './../Details.css';

/**
 * @name CastDetailView
 * @description this is dumb component used to show the Person's data using Grid of Bootstrap.
 * @param {*} cast : Contains all the details of the person required to show on the page. 
 */

const CastDetailView = ({ cast }) => {
    return (
        <Grid>
            <Row>
                <Col xs={12} md={3}>
                    <img width={240} height={364} src={`${imageBaseUrl}w500/${cast.profile_path}`} alt="thumbnail" />
                </Col>
                <Col xs={12} md={9}>
                    <h2>{cast.name}</h2>
                    {cast.also_known_as.length ? <h6>{cast.also_known_as[0]}</h6> : null}
                    <Row>
                        <Col xs={6} md={12}>
                            <span className="key">Profession:</span>
                            <span className="value"> {cast.known_for_department}</span>
                        </Col>
                        <Col xs={6} md={4}>
                            <span className="key">Birthday:</span>
                            <span className="value">{cast.birthday}</span>
                        </Col>
                        <Col xs={6} md={8}>
                            <span className="key">Born at:</span>
                            <span className="value">{cast.place_of_birth}</span>
                        </Col>
                        {cast.deathday ? (<Col xs={6} md={6}>
                            <span className="key">Death:</span>
                            <span className="value">{cast.deathday}</span>
                        </Col>) : null}
                    </Row>
                    <br />
                    <Row>
                        <Col xs={12} md={12}>
                            <span className="key">Biography:</span>
                            <p className="value">{cast.biography}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    );
}

export default CastDetailView;