import React, { Component } from 'react';

import './Landing.css';

const Desktop = () => {
    return(
        <div id="landing-landscape">
            <img src="https://placeimg.com/1000/563/tech/grayscale" alt="failure" id="landing-background-image" />
            <h1 id="landing-quote-desktop">“It is not enough for code to work.” <br/>― Robert C. Martin</h1>
        </div>
    )
}

const Mobile = () => {
    return(
         <div id="landing-landscape">
            <img src="https://placeimg.com/563/1000/tech/grayscale" alt="failure" id="landing-background-image" />
            <h1 id="landing-quote">“It is not enough for code to work.” <br/>― Robert C. Martin</h1>
        </div>
    )
}

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            mobile: true
        }
        this.determineMobile = this.determineMobile.bind(this);
    }

    determineMobile(){
        this.setState({
            mobile: window.innerWidth < 769
        })
    }

    componentDidMount(){
        this.determineMobile();
        window.addEventListener('resize', this.determineMobile);
    }


    render() { 
        return (
            <React.Fragment>
                {this.state.mobile? <Mobile/> : <Desktop/>} 
            </React.Fragment>
        );
    }
}
 
export default Landing;