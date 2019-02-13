import React, { Component } from 'react';

import './Landing.css';

const Color = () => {
    return ( 
        <div id="landing-container">
            <div className="color-landing-background"></div>
            <h1 className="landing-quote">CREATIVITY is FREEDOM</h1>
        </div>
    );
}
 
const Grayscale = () => {
    return ( 
        <div id="landing-container" >
            <div className="gray-landing-background"></div>
            <h1 className="landing-quote code-font">CODE === LIFE</h1>
        </div>
    );
}

class Landing extends Component {
    constructor(){
        super();
    }

    render() {
        let landing = this.props.color? <Color /> : <Grayscale />;
        return(
            <React.Fragment>
                {landing}
            </React.Fragment>
        );
    }
}
 
export default Landing;