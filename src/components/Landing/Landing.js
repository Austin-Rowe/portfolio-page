import React, { Component } from 'react';

import './Landing.css';

const GrayScale = () => {
    return(
         <div id="landing-container">
            <div className="landing-background"></div>
            <h1 className="landing-quote">“It is not enough for code to work.” <br/>― Robert C. Martin</h1>
        </div>
    )
}

class Landing extends Component {
    constructor(){
        super();
    }

    render() { 
        return (
           <GrayScale />
        );
    }
}
 
export default Landing;