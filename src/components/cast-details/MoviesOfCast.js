import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import { imageBaseUrl } from '../../services/apiService';

/**
 * @name MoviesOfCast
 * @description this component shows list of movies in which the person has worked.
 * @param {*} movieList it contains list of the movies of the person.
 * @param {function} onClick click event to show the clicked movie's details.
 */

const renderMovies = (movies, onClick) => {
    return movies.map(v => (
        <tr onClick={() => onClick(v.id)} key={v.id}>
            <td>{v.poster_path ? <img width="50" height="75" src={`${imageBaseUrl}w185${v.poster_path}`} alt="thumbnail" /> : '-NA-'}</td>
            <td>{v.title}</td>
            <td>{v.character}</td>
            <td>{v.release_date}</td>
        </tr>
    ));
}

const MoviesOfCast = ({ movieList, onClick }) => (
    <Table striped bordered condensed hover>
        <thead>
            <tr>
                <th>Image</th>
                <th>Movie</th>
                <th>As Character</th>
                <th>Release Date</th>
            </tr>
        </thead>
        <tbody>{renderMovies(movieList, onClick)}</tbody>
    </Table>
);

export default MoviesOfCast;