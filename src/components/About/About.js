import React, { Component } from 'react';


import './About.css';


class About extends Component {
    render() { 
        return ( 
            <div id="about-container">
                <h1 id="about-title">About Me</h1>
                <h3 className="about-header">Professional</h3>
                <p className="about-text">
                    I started working at the age of 15 and have worked a few different jobs in the retail and food industries. That being said, I've always known I needed to use my talents and passion to make a larger impact on the world. That is why starting in 2018, I went from full-time to part-time work so that I would have the free time to pursue a software development career. I started out with Team Treehouse, completed their front-end developer track, and haven't looked back since. I would've never believed I would enjoy programming as much as I have and am thrilled to see what kind of impact I can make through technology!
                </p>
                <h3 className="about-header">Personal Life</h3>
                <p className="about-text">
                    In my free time, I enjoy primarily adventurous activities. I love traveling, climbing/parkour, riding motorcycles, and more. I am generally outgoing and enjoy meeting new people whenever the opportunity presents itself.   
                </p>
                {this.props.color? 
                    <div id="about-color-images-container">
                        <img className="about-color-image" src="/myImages/ActionColor1.JPG" alt=""/>
                        <img className="about-color-image" src="/myImages/ActionColor2.JPG" alt=""/>
                        <img className="about-color-image" src="/myImages/ActionColor3.JPG" alt=""/>
                    </div>
                    :
                    <img className="about-pic" src="/myImages/ActionGrey.JPG" alt=""/>
                }
                <p className="about-text">
                    If you have any questions or would like to set up an interview please use the contact information below. I look forward to hearing from you!
                </p>
            </div>
        );
    }
}
 
export default About;