import React, { Component } from 'react';

export default class Form extends Component {
    render(){
        return(
            <form onSubmit={(event) => this.props.parkSearch(event)}>
                <h2>Enter states in two letter form separated by commas</h2>
                <label htmlFor="state">State</label>
                <input id="state" name="state" type="text"></input>
                <label htmlFor="results">Number of Results</label>
                <input id="results" name="results" type="text"></input>
                <button id="submit" type="submit">Submit</button>
            </form>
        );
    }
}