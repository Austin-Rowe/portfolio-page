import React, { Component } from 'react';

import './About.css';


class About extends Component {
    state = {  }
    render() { 
        return ( 
            <a id="about-container">
                <h1 id="about-title">About Me</h1>
                <h3 className="about-header">Professional</h3>
                <p className="about-text">
                    I have been working since I was 15 years old, and have had almost no lapses without work since. Starting at the beginning of 2018 I went from full-time to part-time work so that I would have the free time to pursue a software development career. I started out with Team Treehouse, completed their front-end developer track, and haven't looked back since! I didn't believe I would enjoy programming as much as I have!
                </p>
                <p className="about-text">
                    I am great with Javascript/ReactJS. I am good with HTML5, CSS3 and Linux Terminals. I also have a pretty good grasp on SQL databases, NodeJS and MVC framework patterns. I am hard working, self-motivated and always excited to learn something new. 
                </p>
                
                <h3 className="about-header">Personal Life</h3>
                <p className="about-text">
                In my free time I enjoy primarily adventurous activities. I love travelling, climbing/parkour, riding motorcycles, etc. I am generally outgoing and enjoy meeting new people whenever the opportunity presents itself. Although I am adventurous some of my favorite times are when I sit down to a nice meal with friends.    
                </p>
                <p className="about-text">
                I am a devout Christian and am always trying to emulate the life and love of Christ. One of my most meaningful seasons so far was when I went to the Harvest School in Pemba, Mozambique. The experience I had there taught me so much about the love of God for those who are lost and desperately in need of His touch through our lives as Christians. This understanding of God's love is my deepest motivation in all that I do and pursue.
                </p>
            </a>
        );
    }
}
 
export default About;