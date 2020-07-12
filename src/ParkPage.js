import React, { Component } from 'react'
import ApiContext from './ApiContext'

export default class ParkPage extends Component {
    static contextType = ApiContext;
    
    render(){
        const park = this.context.parks.find(p =>
            p.id === this.props.match.params.parkId
          )
        return(
            <h2>{park.name}</h2>
        )
    }
}