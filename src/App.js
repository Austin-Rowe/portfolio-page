import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Landing />
        <About />
        <Projects />
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
