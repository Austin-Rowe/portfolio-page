import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Landing />
        <About />
        <Projects />
      </React.Fragment>
    );
  }
}

export default App;
