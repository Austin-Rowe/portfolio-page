import React, { Component } from 'react';

import './About.css';

class About extends Component {
    state = {  }
    render() { 
        return (
            <div id="about">
                <img src="https://placeimg.com/1000/1000/tech/grayscale" alt="failure" id="about-background-image" />
                <p className="about-text">
                    I am a self-taught software developer specializing in, but not completely limited to, front-end technologies, especially JavaScript.  
                </p>
            </div>
        );
    }
}
 
export default About;