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
      loadingComment: "JUST A MOMENT",
      mobile: false
    }
    this.colorToggle = this.colorToggle.bind(this);
    this.triggerLoadScreen = this.triggerLoadScreen.bind(this);
    this.watchWindowResize = this.watchWindowResize.bind(this);
  }

  triggerLoadScreen(){
    if(!this.state.loading){
      this.setState({loading: true});
      setTimeout(()=>{
        this.setState({loading: false})
      }, 7000);
    } else {
      setTimeout(()=>{
        this.setState({loading: false})
      }, 7000);
    }
    switch(this.state.colorSwitchCount){
      case 1: this.setState({loadingComment: "LETS GET CREATIVE!"}); break;
      case 2: this.setState({loadingComment: "BACK TO BLAH"}); break;
      case 3: this.setState({loadingComment: "BACK TO BEAUTY"}); break;
      case 4: this.setState({loadingComment: "NOW YOU'RE WONDERING..."}); break;
      case 5: this.setState({loadingComment: "YOU'LL NEVER KNOW UNLESS YOU TRY"}); break;
      case 6: this.setState({loadingComment: "YOU SEEM COMMITED"}); break;
      case 7: this.setState({loadingComment: "VERY COMMITED"}); break;
      case 8: this.setState({loadingComment: "I LIKE THE DETERMINATION"}); break;
      case 9: this.setState({loadingComment: "NOW THIS IS GETTING RIDICULOUS"}); break;
      case 10: this.setState({loadingComment: "ALMOST THERE"}); break;
      case 11: this.setState({loadingComment: "JUST A LITTLE FURTHER"}); break;
      case 12: this.setState({loadingComment: "NEW LEVEL UNLOCKED"}); break;
      case 13: this.setState({loadingComment: "YOU HAVE ARRIVED AT THE END"}); break;
      case 14: this.setState({loadingComment: "HAHA JUST KIDDING"}); break;
      case 15: this.setState({loadingComment: "THERE IS NO END"}); break;
      default: break;
    }
    this.setState(state => ({colorSwitchCount: state.colorSwitchCount + 1}));
  }

  watchWindowResize(){
    if(this.state.mobile && window.innerWidth > 549){
      this.triggerLoadScreen();
      this.setState({mobile: false})
    } else if(!this.state.mobile && window.innerWidth < 550){
      this.triggerLoadScreen();
      this.setState({mobile: true})
    }
  }

  componentDidMount(){
    this.triggerLoadScreen();
    window.addEventListener('resize', this.watchWindowResize);
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
