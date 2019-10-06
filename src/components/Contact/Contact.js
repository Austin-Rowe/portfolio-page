import React, { Component } from 'react';
import ReactGA from 'react-ga';

import './Contact.css';


class Contact extends Component {
    constructor(props){
        super(props);

        this.googleAnalytics = this.googleAnalytics.bind(this);
    }

    googleAnalytics(e){
        switch(true){
            case e.target.parentNode.href.includes('tel'): 
                ReactGA.event({
                    category: "User-Action",
                    action: "User clicked phone number"
                });
                break;
            case e.target.parentNode.href.includes('mailto'): 
                ReactGA.event({
                    category: "User-Action",
                    action: "User clicked email"
                });
                break;
            case e.target.parentNode.href.includes('linkedin'): 
                ReactGA.event({
                    category: "User-Action",
                    action: "User clicked linkedin"
                });
                break;
            case e.target.parentNode.href.includes('github'): 
                ReactGA.event({
                    category: "User-Action",
                    action: "User clicked github"
                });
                break;
            default: console.log("Something unexpected occurred in the googleAnalytics switch statement in the contact component.");
        }
    }

    render() { 
        return ( 
            <div id="contact-container">
                <h1 id="contact-title">Contact Me</h1>
                <img id={this.props.color? "color-contact-pic": "contact-pic"} src={this.props.color? "/myImages/HeadShotColor.jpg" : "/myImages/HeadShotGreyScale1.jpg"} alt=""/>
                <div>
                    <div className="contact-link-container">
                        <a className="contact-link" href="tel:+1-205-807-4715" onClick={this.googleAnalytics} >
                            <img className="contact-icon" src="/phoneIcon.svg" alt="call"/>
                            <h2 className="contact-text" >205-807-4715</h2>
                        </a>
                    </div>
                    <div className="contact-link-container">
                        <a className="contact-link" href="mailto:amrowe2018@gmail.com" onClick={this.googleAnalytics} >
                            <img className="contact-icon" src="/emailIcon.svg" alt="email"/>
                            <h2 className="contact-text" >amrowe2018@gmail.com</h2>
                        </a>
                    </div>
                    <div className="contact-link-container">
                        <a className="contact-link" href="https://www.linkedin.com/in/austin-rowe-09552617a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXsLBHvFmQNS0gXUsPFaD9w%3D%3D" target="_blank" rel="noopener noreferrer"  onClick={this.googleAnalytics} >
                            <img className="contact-icon" src="/linkedinIcon.svg" alt="linkedIn"/>
                            <h2 className="contact-text" >LinkedIn</h2>
                        </a>
                    </div>
                    <div className="contact-link-container">
                        <a className="contact-link" href="http://github.com/Austin-Rowe" target="_blank" rel="noopener noreferrer"  onClick={this.googleAnalytics} >
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