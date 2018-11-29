import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import { imageBaseUrl } from '../services/apiService';

const renderCast = cast => {
    return cast.map(v => (
        <tr key={v.id}>
            <td>{v.profile_path ? <img width="50" height="75" src={`${imageBaseUrl}w185${v.profile_path}`} alt="thumbnail" /> : '-NA-'}</td>
            <td>{v.name}</td>
            <td>{v.character}</td>
        </tr>
    ));
}

const MovieCastView = ({ cast }) => (
    <Table striped bordered condensed hover>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Character</th>
            </tr>
        </thead>
        <tbody>{renderCast(cast)}</tbody>
    </Table>
);

export default MovieCastView;