import React, {Component} from 'react';

import './Nav.css';

class Nav extends Component {
  state = {
    contactVisible: false,
    aboutVisible: false,
    projectsVisible: false,
    resumeVisible: false,
    menuHasBeenToggled: false,
  }
  menuToggle = this.menuToggle.bind(this);
  hideMenu = this.hideMenu.bind(this);
  
    menuToggle(){
      this.setState(state => ({
        aboutVisible: !state.aboutVisible
      }));
      setTimeout(() => {this.setState(state => ({
        projectsVisible: !state.projectsVisible
      }))}, 200);
      setTimeout(() => {this.setState(state => ({
        resumeVisible: !state.resumeVisible
      }))}, 300);
      setTimeout(() => {this.setState(state => ({
        contactVisible: !state.contactVisible
      }))}, 400);
      setTimeout(() => {this.setState({
        menuHasBeenToggled: true
      })}, 500);
    }

    hideMenu(){
      this.setState({
        aboutVisible: false
      });
      setTimeout(() => {this.setState({
        projectsVisible: false
      })}, 200);
      setTimeout(() => {this.setState({
        resumeVisible: false
      })}, 300);
      setTimeout(() => {this.setState({
        contactVisible: false
      })}, 400);
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
            <a href="#about-container"><h2 onClick={this.hideMenu} className={this.state.aboutVisible? "menu-option visible" : this.state.menuHasBeenToggled? 'menu-option hidden' : 'menu-option' } >About Me</h2></a>
            <h2 onClick={this.hideMenu} className={this.state.projectsVisible? "menu-option visible" : this.state.menuHasBeenToggled? 'menu-option hidden' : 'menu-option' } >Projects</h2>
            <h2 onClick={this.hideMenu} className={this.state.resumeVisible? "menu-option visible" : this.state.menuHasBeenToggled? 'menu-option hidden' : 'menu-option' } >My Resume</h2>
            <h2 onClick={this.hideMenu} className={this.state.contactVisible? "menu-option visible" : this.state.menuHasBeenToggled? 'menu-option hidden' : 'menu-option' } >Contact Me</h2>
          </div>
        </React.Fragment>
      );
    }
  }




export default Nav;

      