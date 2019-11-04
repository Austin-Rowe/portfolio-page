import React, {Component} from 'react';
import ReactGA from 'react-ga';

import './Nav.css';

class Nav extends Component {
  constructor(){
    super();
    this.state = {
      menuVisible: false,
      menuToggled: false
    }
    this.menuToggle = this.menuToggle.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  menuToggle(e){
    this.setState(state => ({menuVisible: !state.menuVisible, menuToggled: true}));
    if(e.target.parentNode.href && e.target.parentNode.href.includes('Austin-Rowe.pdf')){
      ReactGA.event({
        category: 'User-Action',
        action: 'User clicked to view resume'
      })
    }
  }

  hideMenu(){
    this.setState({menuVisible: false});
  }

  render() {
    return (
      <React.Fragment>
        <div id="drop-down-toggle" onClick={this.menuToggle}>
          <div className={this.props.color? "color drop-down-toggle-bar": "drop-down-toggle-bar"}></div>
          <div className={this.props.color? "color drop-down-toggle-bar": "drop-down-toggle-bar"}></div>
          <div className={this.props.color? "color drop-down-toggle-bar": "drop-down-toggle-bar"}></div>
        </div>
        <div className={this.state.menuVisible? "visible menu" : this.state.menuToggled? "hidden menu" : "menu"} onMouseLeave={this.hideMenu}>
          <a onClick={this.menuToggle} href="#projects-container"><h2 className={this.props.color? "color menu-option": "menu-option"}>PROJECTS</h2></a>
          <a onClick={this.menuToggle} href="#about-container" ><h2 className={this.props.color? "color menu-option": "menu-option"}>ABOUT</h2></a>
          <a onClick={this.menuToggle} href="/Austin-Rowe.pdf" target="_blank" rel="noopener noreferrer"><h2 className={this.props.color? "color menu-option": "menu-option"}>R&Eacute;SUM&Eacute;</h2></a>
          <a onClick={this.menuToggle} href="#contact-container" ><h2 className={this.props.color? "color menu-option": "menu-option"}>CONTACT</h2></a>
        </div>
      </React.Fragment>
    );
  }
}




export default Nav;

      