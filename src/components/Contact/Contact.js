import React, { Component } from 'react';

import './Contact.css';


class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="contact-container">
                <h1 id="contact-title">Contact Me</h1>
                <img id={this.props.color? "color-contact-pic": "contact-pic"} src={this.props.color? "https://s3.us-east-2.amazonaws.com/austin-rowe/HeadShotColor.jpg":"https://s3.us-east-2.amazonaws.com/austin-rowe/HeadShotGreyScale1.jpg"} alt=""/>
                <div>
                    <div className="contact-link-container">
                        <a className="contact-link" href="tel:+1-205-807-4715">
                            <img className="contact-icon" src="/phoneIcon.svg" alt="call"/>
                            <h2 className="contact-text" >205-807-4715</h2>
                        </a>
                    </div>
                    <div className="contact-link-container">
                        <a className="contact-link" href="mailto:amrowe2018@gmail.com">
                            <img className="contact-icon" src="/emailIcon.svg" alt="email"/>
                            <h2 className="contact-text" >amrowe2018@gmail.com</h2>
                        </a>
                    </div>
                    <div className="contact-link-container">
                        <a className="contact-link" href="http://github.com/Austin-Rowe" target="_blank" rel="noopener noreferrer">
                            <img className="contact-icon" src="/githubIcon.svg" alt="github"/>
                            <h2 className="contact-text" >GitHub</h2>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;