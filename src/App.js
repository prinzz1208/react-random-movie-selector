import React, { Component } from 'react';
import Selector from './container/Selector/Selector';


import './App.css';

class App extends Component {
  state= {
    rotate: false,
    movie:"default"
  }
 
  getMovieHandler = (movie) => {
    this.setState({movie:movie})
  }
  render(){
    return (
      <div className="App">
        <Selector />
        
      </div>
    );
  }

}

export default App;
