import React, { Component } from 'react';
import Park from './Park';

export default class ParkList extends Component {
    render(){
        const parks = this.props.parks;
        const listItems = parks.map((park, i) =>
            <Park key={i} park={park} />
        )
        return(
            <div className="ParkList">
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}