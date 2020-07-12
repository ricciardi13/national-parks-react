import React from 'react';
import { Link } from 'react-router-dom';

export default function Park(props) {
    return (
        <li>
            <h3>{props.park.name}</h3>
            <p>{props.park.description}</p>
            <Link to={`/park/${props.park.id}`}>Learn More</Link>
        </li>
    );
}