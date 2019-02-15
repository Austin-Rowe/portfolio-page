import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Loading from './components/Loading/Loading';

class App extends Component {
  constructor(){
    super();
    this.state = {
      color: false,
      loading: true,
      colorSwitchCount: 0,
      loadingComment: "JUST A MOMENT"
    }
    this.colorToggle = this.colorToggle.bind(this);
    this.triggerLoadScreen = this.triggerLoadScreen.bind(this);
  }

  triggerLoadScreen(){
    if(!this.state.loading){
      this.setState({loading: true});
      setTimeout(()=>{
        this.setState({loading: false})
      }, 5000);
    } else {
      setTimeout(()=>{
        this.setState({loading: false})
      }, 5000);
    }
    switch(this.state.colorSwitchCount){
      case 1: this.setState({loadingComment: "LETS GET CREATIVE!"}); break;
      case 2: this.setState({loadingComment: "BACK TO BLAH"}); break;
      case 3: this.setState({loadingComment: "RETURNING TO BEAUTY"}); break;
      case 4: this.setState({loadingComment: "MAKING THINGS BLAND... AGAIN"}); break;
      case 5: this.setState({loadingComment: "WOW YOU'RE SWITCHING A LOT"}); break;
      case 6: this.setState({loadingComment: "IT'S STARTING TO WORRY ME"}); break;
      case 7: this.setState({loadingComment: "PERHAPS YOU SHOULD CALL ME"}); break;
      case 8: this.setState({loadingComment: "OKAY, YOU SHOULD DEFINITELY CALL ME"}); break;
      default: break;
    }
    this.setState(state => ({colorSwitchCount: state.colorSwitchCount + 1}));
  }

  componentDidMount(){
    this.triggerLoadScreen();
  }

  colorToggle(){
    this.setState(state =>({color: !state.color}));
    this.triggerLoadScreen();
  }

  render() {
    let {color, loading} = this.state;
    return (
      <div style={this.state.color? { "fontFamily": "'Cinzel', serif",}:{ "fontFamily": "'Source Code Pro', monospace" }}>
        <div id="theme-toggle-container">
          <button className={color? "de-colorize": "colorize"} id="theme-toggle-button" onClick={this.colorToggle} style={this.state.color? { "fontFamily": "'Source Code Pro', monospace" }:{ "fontFamily": "'Cinzel', serif",}}>{color? "De-Colorize": "Colorize"}</button>
        </div>
        <Loading loading={loading} color={color} comment={this.state.loadingComment} />
        <Nav color={this.state.color} />
        <Landing color={this.state.color} />
        <Projects color={this.state.color} />
        <About color={this.state.color} />
        <Contact color={this.state.color} />
      </div>
    );
  }
}

export default App;
