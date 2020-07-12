import React, { Component } from 'react';
import Park from './Park';
import ApiContext from './ApiContext';

export default class ParkList extends Component {
    static contextType = ApiContext;
    render(){
        const parks = this.context.parks;
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