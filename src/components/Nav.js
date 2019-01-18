import React, {Component} from 'react';

import './Nav.css';

class Nav extends Component {
    constructor(){
      super();
      this.state = {
        contactVisible: false,
        aboutVisible: false,
        projectsVisible: false,
        resumeVisible: false,
        menuHasBeenToggled: false
        
      }
      this.menuToggle = this.menuToggle.bind(this);
      this.hideMenu = this.hideMenu.bind(this);
    }
  
    menuToggle(){
      this.setState(state => ({
        contactVisible: !state.contactVisible
      }));
      setTimeout(() => {this.setState(state => ({
        aboutVisible: !state.aboutVisible
      }))}, 350);
      setTimeout(() => {this.setState(state => ({
        projectsVisible: !state.projectsVisible
      }))}, 700);
      setTimeout(() => {this.setState(state => ({
        resumeVisible: !state.resumeVisible
      }))}, 1050);
      setTimeout(() => {this.setState({
        menuHasBeenToggled: true
      })}, 1100);
    }

    hideMenu(){
      this.setState({
        contactVisible: false
      });
      setTimeout(() => {this.setState({
        aboutVisible: false
      })}, 350);
      setTimeout(() => {this.setState({
        projectsVisible: false
      })}, 700);
      setTimeout(() => {this.setState({
        resumeVisible: false
      })}, 1050);
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
            <h1 className={this.state.contactVisible? "menu-option visible" : this.state.menuHasBeenToggled? 'menu-option hidden' : 'menu-option' } >Contact Me</h1>
            <h1 className={this.state.aboutVisible? "menu-option visible" : this.state.menuHasBeenToggled? 'menu-option hidden' : 'menu-option' } >About Me</h1>
            <h1 className={this.state.projectsVisible? "menu-option visible" : this.state.menuHasBeenToggled? 'menu-option hidden' : 'menu-option' } >Projects</h1>
            <h1 className={this.state.resumeVisible? "menu-option visible" : this.state.menuHasBeenToggled? 'menu-option hidden' : 'menu-option' } >My Resume</h1>
          </div>
        </React.Fragment>
      );
    }
  }




export default Nav;

      