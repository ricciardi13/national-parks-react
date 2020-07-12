import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SearchPage from './SearchPage';
import ParkPage from './ParkPage';
import ApiContext from './ApiContext';

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
        console.log(data);
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
    const value = {
      parks: this.state.parks,
      loading: this.state.loading,
      error: this.state.error,
      parkSearch: this.parkSearch,
    }

    return (
      <BrowserRouter>
        <ApiContext.Provider value={value}>
          <div className="App">
            <header>
            <h1><Link to='/'>National Parks Revisited</Link></h1>
            </header>
            <main>
              <Route exact path='/' component={SearchPage} />
              <Route path='/park/:parkId' component={ParkPage} />
            </main>
          </div>
        </ApiContext.Provider>        
      </BrowserRouter>      
    );
  }  
}

export default App;
