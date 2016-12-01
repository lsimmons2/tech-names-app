import React, { Component } from 'react';
import NameContainer from './name-container';

class App extends Component {
  render(){
    return (
      <div id="header">
        Guess the tech names
        < NameContainer />
      </div>
    )
  }
}

export default App
