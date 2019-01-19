import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Nav />
        <About />
      </React.Fragment>
    );
  }
}

export default App;
