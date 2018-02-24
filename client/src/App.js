import React, { Component } from 'react';
import NavBar from './NavBar';
import Activities from './Activities';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Activities />
      </div>
    );
  }
}

export default App;
