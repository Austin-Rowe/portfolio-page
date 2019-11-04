import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import './Projects.css';

const Project = (props) => {
    const usedTechItems = props.resources.usedTech.map(item => <li key={item}>{item}</li>);
    return (  
        <div className="project-container">
            <h2 className="project-title" >{props.title}</h2>
            <div className="project-description-features">
                <p className="project-description">{props.description} <a href={props.gitLink} target="_blank" rel="noopener noreferrer">here.</a></p>
                <ul className="project-features-list">
                    <b>It uses:</b>
                    {usedTechItems}
                </ul>
            </div>
            
            <div className="project-image-gallery">
                <ImageGallery autoPlay={false} showNav={false} showFullscreenButton={true} slideInterval={5000} slideDuration={1000} items={props.resources.images} />
            </div>
        </div>
    );
}
 

class Projects extends Component {
    render() { 
        const bestCloserResources = {
            images: [
                {
                    original: "/best-closer-screenshots/login.JPG",
                    thumbnail: "/best-closer-screenshots/login.JPG",
                    description: ""
                },
                {
                    original: "/best-closer-screenshots/watch-live.JPG",
                    thumbnail: "/best-closer-screenshots/watch-live.JPG",
                    description: ""
                },
                {
                    original: "/best-closer-screenshots/watch-archive.JPG",
                    thumbnail: "/best-closer-screenshots/watch-archive.JPG",
                    description: ""
                }
            ],
            usedTech: [
                "ReactJS",
                "Redux",
                "NodeJS",
                "ExpressJS",
                "MongoDB",
                "Mongoose",
                "JSON Web Token Authentication",
                "Large file uploads/streaming",
                "Live video streaming",
                "Amazon EC2",
                "Digital Ocean Droplet",
                "Nginx",
                "PayPal Subscriptions"
            ]
        }
        const indictmentResources = {
            images: [
                {
                    original: "/indictment-screenshots/home-header.JPG",
                    thumbnail: "/indictment-screenshots/home-header.JPG",
                    description: ""
                },
                {
                    original: "/indictment-screenshots/home-footer.JPG",
                    thumbnail: "/indictment-screenshots/home-footer.JPG",
                    description: ""
                },
                {
                    original: "/indictment-screenshots/cart.JPG",
                    thumbnail: "/indictment-screenshots/cart.JPG",
                    description: ""
                }
            ],
            usedTech: [
                "ReactJS",
                "Redux",
                "NodeJS",
                "ExpressJS",
                "PayPal Payments",
                "Amazon EC2",
            ]
        }
        const extensionResources = {
            images: [
                {
                    original: "/price-sheet-screenshots/before-extension.png",
                    thumbnail: "/price-sheet-screenshots/before-extension.png",
                    description: "Before Extension"
                },
                {
                    original: "/price-sheet-screenshots/after-extension.png",
                    thumbnail: "/price-sheet-screenshots/after-extension.png",

                    description: "After Extension"
                }
            ],
            usedTech: [
                "Vanilla JavaScript",
                "DOM Manipulation"
            ]
        }
        const rugzillaResources = {
            images: [
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
            ],
            usedTech: [
                "ReactJS",
                "Redux",
                "NodeJS",
                "ExpressJS",
                "PayPal Payments"
            ]
        }
        return ( 
            <React.Fragment>
                <div id="projects-container">
                    <h1 id="projects-title">My Projects</h1>
                    <Project resources={bestCloserResources} title="Best Closer Show" gitLink="https://bestclosershow.com" description="Live streaming/archive playback website with user system requiring subscription to access resources(use promo code #CloserTrial to get access for 1 week). Due to the fact that it is live I can't share the repository but you can check it out live" />
                    <Project resources={indictmentResources} title="Indictment Clothing" gitLink="https://indictmentclothing.com" description="Minimalistic e-commerce clothing site I built freelancing. Due to the fact that it is live I can't share the repository but you can check it out live" />
                    <Project resources={rugzillaResources} title="RugZilla E-Commerce" gitLink="https://github.com/Austin-Rowe/rugzilla" description="This is a mock e-commerce site I built. You can check out the GitHub repository" />
                    <Project resources={extensionResources} title="Chrome Extension" gitLink="https://github.com/Austin-Rowe/unitex-chrome-ext" description="This is a Chrome extension that I built for my previous workplace so that we could create price sheets more efficiently and aesthetically. You can see the GitHub repository" />
                </div>
                <h2 id="current-repo">If you want to check out the current page's GitHub repository click <a href="https://github.com/Austin-Rowe/portfolio-page" target="_blank" rel="noopener noreferrer">here.</a></h2>
            </React.Fragment>
        );
    }
}
 
export default Projects;