import React from 'react'

export default function Park(props) {
    return (
        <li>
            <h3>{props.park.name}</h3>
            <p>{props.park.description}</p>        
        </li>
    );
}