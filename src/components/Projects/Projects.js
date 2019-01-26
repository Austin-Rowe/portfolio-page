import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import './Projects.css';

class Projects extends Component {
    state = {  }
    render() { 
        const extensionImages = [
            {
                original: "/price-sheet-screenshots/before.png",
                thumbnail: "/price-sheet-screenshots/before.png",
                description: "Before Extension"
            },
            {
                original: "/price-sheet-screenshots/after.png",
                thumbnail: "/price-sheet-screenshots/after.png",
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
            <a id="projects-container">
                <h1 id="projects-title">My Projects</h1>
                <div className="project-container">
                    <h2 className="project-title" >Chrome Extension</h2>
                    <div className="project-description-features">
                        <p className="project-description">This is a Chrome extension that I built for my current workplace so that we could create price sheets for our products more effeciently/aesthetically. You can check it out <a href="https://chrome.google.com/webstore/detail/price-sheet-processor/kibjjcncfioajehabcbdomochdolnkok" target="_blank">here.</a></p>
                        <ul className="project-features-list">
                            <b>It uses:</b>
                            <li>Vanilla JavaScript</li>
                            <li>DOM manipulation</li>
                            <li>OOJ</li>
                        </ul>
                    </div>
                    
                    <div className="image-gallery">
                        <ImageGallery items={extensionImages} showPlayButton={false}  />
                    </div>
                </div>
                <div className="project-container">
                    <h2 className="project-title" >RugZilla Ecommerce</h2>
                    <div className="project-description-features">
                        <p className="project-description">This is an ecommerce site I built. You can check it out <a href="http://ec2-18-188-129-119.us-east-2.compute.amazonaws.com:8000/" target="_blank">here.</a></p>
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
                    
                    <div className="image-gallery">
                        <ImageGallery items={rugzillaImages} showPlayButton={false}  />
                    </div>
                </div>
            </a>
        );
    }
}
 
export default Projects;