import React, {Component} from 'react';

import './Nav.css';

class Nav extends Component {
  constructor(){
    super();
    this.state = {
      projectsVisible: false,
      aboutVisible: false,
      resumeVisible: false,
      contactVisible: false,
      menuToggled: false
    }
    this.menuToggle = this.menuToggle.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.toggleMenuOption = this.toggleMenuOption.bind(this);
  }

  toggleMenuOption(option, time){
    setTimeout(() => {this.setState(state => ({
      [option]: !state[option]
    }))}, time);
  }

  menuToggle(){
    let time = 0;
    Object.keys(this.state).forEach(option => {
      if(option === "menuToggled"){
        setTimeout(() => {this.setState({menuToggled: true})}, time);
      } else {
        this.toggleMenuOption(option, time);
      }
      time = time + 50;
    });
  }

  hideMenu(){
    let time = 0;
    Object.keys(this.state).forEach(option => {
      if(option === "menuToggled"){
        return;
      } else {
        setTimeout(() => {this.setState({[option]: false})}, time);
      }
      time = time + 50;
    })
  }

  render() {
    return (
      <React.Fragment>
        <div id="drop-down-toggle" onClick={this.menuToggle}>
          <div className={this.props.color? "color drop-down-toggle-bar": "drop-down-toggle-bar"}></div>
          <div className={this.props.color? "color drop-down-toggle-bar": "drop-down-toggle-bar"}></div>
          <div className={this.props.color? "color drop-down-toggle-bar": "drop-down-toggle-bar"}></div>
        </div>
        <div id="menu" onMouseLeave={this.hideMenu}>
          <a onClick={this.hideMenu} className={this.state.projectsVisible? "visible" : this.state.menuToggled? "menu-link hidden" : "menu-link"} href="#projects-container"><h2 className={this.props.color? "color menu-option": "menu-option"}>PROJECTS</h2></a>
          <a onClick={this.hideMenu} className={this.state.aboutVisible? "visible" : this.state.menuToggled? "menu-link hidden" : "menu-link"} href="#about-container" ><h2 className={this.props.color? "color menu-option": "menu-option"}>ABOUT</h2></a>
          <a onClick={this.hideMenu} className={this.state.resumeVisible? "visible" : this.state.menuToggled? "menu-link hidden" : "menu-link"} href="/Austin-Rowe.pdf" target="_blank" rel="noopener noreferrer"><h2 className={this.props.color? "color menu-option": "menu-option"}>R&Eacute;SUM&Eacute;</h2></a>
          <div id="contact-link" onClick={this.hideMenu} className={this.state.contactVisible? "visible" : this.state.menuToggled? "menu-link hidden" : "menu-link"} >
            <a href="#contact-container" ><h2 className={this.props.color? "color menu-option": "menu-option"}>CONTACT</h2></a>
            <a className={this.props.color? "sub-color sub-menu-option": "sub-menu-option"} href="tel:+1-205-807-4715">
                <img className="contact-icon" src="/phoneIcon.svg" alt=""/>
                <h3 className="sub-option-text">205-807-4715</h3>
            </a>
            <a className={this.props.color? "sub-color sub-menu-option": "sub-menu-option"} href="mailto:amrowe2018@gmail.com">
                <img className="contact-icon" src="/emailIcon.svg" alt=""/>
                <h3 className="sub-option-text">amrowe2018@gmail.com</h3>
            </a>
            <a className={this.props.color? "sub-color sub-menu-option": "sub-menu-option"} href="http://github.com/Austin-Rowe" target="_blank" rel="noopener noreferrer">
                <img className="contact-icon" src="/githubIcon.svg" alt=""/>
                <h3 className="sub-option-text">GitHub</h3>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}




export default Nav;

      