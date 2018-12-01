import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import { imageBaseUrl } from '../../services/apiService';

/**
 * @name MovieCastView
 * @description this component shows list of cast and crew in tabular form.
 * @param {*} cast it contains list of the cast members of the movie.
 * @param {function} onClick click event to show the clicked person's details.
 */

const renderCast = (cast, onClick) => {
    return cast.map(v => (
        <tr onClick={() => onClick(v.id)} key={v.id}>
            <td>{v.profile_path ? <img width="50" height="75" src={`${imageBaseUrl}w185${v.profile_path}`} alt="thumbnail" /> : '-NA-'}</td>
            <td>{v.name}</td>
            <td>{v.character}</td>
        </tr>
    ));
}

const MovieCastView = ({ cast, onClick }) => (
    <Table striped bordered condensed hover>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Character</th>
            </tr>
        </thead>
        <tbody>{renderCast(cast, onClick)}</tbody>
    </Table>
);

export default MovieCastView;