import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import ParkList from './ParkList'
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: [],
      loading: false,
      error : null
    }
  }

  parkSearch = (event) => {
    event.preventDefault();

    this.setState({
      loading : true,
      parks:[]
    });

    const states = event.target.state.value;
    const results = event.target.results.value;
    console.log(states);
    console.log(results);

    const url = `https://developer.nps.gov/api/v1/parks?stateCode=${states}&limit=${results}&api_key=rvBOo36IQaVxFFaewQM48yiSC9LYJGAj6eFyBZE8`;
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          parks: data.data,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>National Parks Revisited</h1>
        </header>
        <main>
          <Form parkSearch={this.parkSearch}  />
          <ParkList parks={this.state.parks} />
          <Loading loading={this.state.loading}/>
        </main>
      </div>
    );
  }  
}

export default App;
