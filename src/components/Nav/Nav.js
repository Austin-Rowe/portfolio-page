import React, {Component} from 'react';

import './Nav.css';

class Nav1 extends Component {
  constructor(){
    super();
    this.state = {
      menuToggled: false,
      aboutVisible: false,
      projectsVisible: false,
      contactVisible: false,
      resumeVisible: false
    }
    this.menuToggle = this.menuToggle.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  menuToggle(){
    this.setState(state => ({
      aboutVisible: !state.aboutVisible
    }));
    setTimeout(() => {this.setState(state => ({
      projectsVisible: !state.projectsVisible
    }))}, 50);
    setTimeout(() => {this.setState(state => ({
      contactVisible: !state.contactVisible
    }))}, 100);
    setTimeout(() => {this.setState(state => ({
      resumeVisible: !state.resumeVisible
    }))}, 150);
    setTimeout(() => {this.setState({
      menuToggled: true
    })}, 200);
  }

  hideMenu(){
    this.setState({aboutVisible: false});
    setTimeout(() => {this.setState({projectsVisible: false})}, 50);
    setTimeout(() => {this.setState({contactVisible: false})}, 100);
    setTimeout(() => {this.setState({resumeVisible: false})}, 150);
  }

 

  render() {
    return (
      <React.Fragment>
        <div id="drop-down-toggle" onClick={this.menuToggle}>
          <div className="drop-down-toggle-bar" ></div>
          <div className="drop-down-toggle-bar" ></div>
          <div className="drop-down-toggle-bar" ></div>
        </div>
        <div id="menu" onMouseLeave={this.hideMenu}>
          <a onClick={this.hideMenu} className={this.state.aboutVisible? "visible" : this.state.menuToggled? "menu-link hidden" : "menu-link"} href="#about-container" ><h2 className="menu-option">About Me</h2></a>
          <a onClick={this.hideMenu} className={this.state.projectsVisible? "visible" : this.state.menuToggled? "menu-link hidden" : "menu-link"} href="#projects-container"><h2 className="menu-option">Projects</h2></a>
          <a onClick={this.hideMenu} className={this.state.contactVisible? "visible" : this.state.menuToggled? "menu-link hidden" : "menu-link"} href="#contact-container" ><h2 className="menu-option">Contact Me</h2></a>
          <a onClick={this.hideMenu} className={this.state.resumeVisible? "visible" : this.state.menuToggled? "menu-link hidden" : "menu-link"}><h2 className="menu-option">Download My Resume</h2></a>
        </div>
      </React.Fragment>
    );
  }
}




export default Nav1;

      