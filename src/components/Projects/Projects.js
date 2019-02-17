import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import './Projects.css';

class Projects extends Component {
    state = {  }
    render() { 
        const extensionImages = [
            {
                original: "/price-sheet-screenshots/before-extension.png",
                description: "Before Extension"
            },
            {
                original: "/price-sheet-screenshots/after-extension.png",
                description: "After Extension"
            }
        ]
        const rugzillaImages = [
            {
                original: "/rugzilla-screenshots/home-page.png",
                thumbnail:"/rugzilla-screenshots/home-page.png",
            },
            {
                original: "/rugzilla-screenshots/product-page.png",
                thumbnail:"/rugzilla-screenshots/product-page.png",
            },
            {
                original: "/rugzilla-screenshots/cart.png",
                thumbnail:"/rugzilla-screenshots/cart.png",
            },
            {
                original: "/rugzilla-screenshots/info-form.png",
                thumbnail:"/rugzilla-screenshots/info-form.png",
            },
            {
                original: "/rugzilla-screenshots/confirm-pay.png",
                thumbnail:"/rugzilla-screenshots/confirm-pay.png",
            },
            {
                original: "/rugzilla-screenshots/payment-confirmation.png",
                thumbnail:"/rugzilla-screenshots/payment-confirmation.png",
            }
        ]
        return ( 
            <React.Fragment>
                <div id="projects-container">
                    <h1 id="projects-title">My Projects</h1>
                    <div className="project-container">
                        <h2 className="project-title" >RugZilla E-commerce</h2>
                        <div className="project-description-features">
                            <p className="project-description">This is an e-commerce site I built. You can check it out in production <a href="http://ec2-18-188-129-119.us-east-2.compute.amazonaws.com:8000/" target="_blank" rel="noopener noreferrer">here</a> and see the GitHub repository <a href="https://github.com/Austin-Rowe/rugzilla" target="_blank" rel="noopener noreferrer">here.</a></p>
                            <ul className="project-features-list">
                                <b>It uses:</b>
                                <li>ReactJS</li>
                                <li>Redux</li>
                                <li>NodeJS w/ Express</li>
                                <li>PayPal Integration</li>
                                <li>Amazon EC2</li>
                                <li>Amazon S3</li>
                            </ul>
                        </div>
                        
                        <div className="project-image-gallery">
                            <ImageGallery autoPlay showNav={false} showFullscreenButton={false} slideInterval={5000} slideDuration={1000} items={rugzillaImages} />
                        </div>
                    </div>
                    <div className="project-container">
                        <h2 className="project-title" >Chrome Extension</h2>
                        <div className="project-description-features">
                            <p className="project-description">This is a Chrome extension that I built for my current workplace so that we can create price sheets more efficiently and aesthetically. You can check it out in production <a href="https://chrome.google.com/webstore/detail/price-sheet-processor/kibjjcncfioajehabcbdomochdolnkok" target="_blank" rel="noopener noreferrer">here</a> and see the GitHub repository <a href="https://github.com/Austin-Rowe/unitex-chrome-ext" target="_blank" rel="noopener noreferrer">here.</a></p>
                            <ul className="project-features-list">
                                <b>It uses:</b>
                                <li>Vanilla JavaScript</li>
                                <li>DOM manipulation</li>
                                <li>OOJ</li>
                            </ul>
                        </div>
                        <div className="project-image-gallery">
                            <ImageGallery autoPlay showPlayButton showThumbnails={false} showNav={false} showFullscreenButton={false} slideInterval={5000} slideDuration={1000} items={extensionImages} />
                        </div>
                    </div>
                </div>
                <h2 id="current-repo">If you want to check out the current page's GitHub repository click <a href="https://github.com/Austin-Rowe/portfolio-page" target="_blank" rel="noopener noreferrer">here.</a></h2>
            </React.Fragment>
        );
    }
}
 
export default Projects;