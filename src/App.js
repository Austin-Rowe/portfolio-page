import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import About from './components/About/About';

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Landing />
        <About />
      </React.Fragment>
    );
  }
}

export default App;
