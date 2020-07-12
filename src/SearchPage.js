import React, { Component } from 'react'
import Form from './Form'
import ParkList from './ParkList'
import Loading from './Loading'

export default class SearchPage extends Component {;
    render(){
        return(
            <>
                <Form />
                <ParkList />
                <Loading />
            </>
        )
    }
}