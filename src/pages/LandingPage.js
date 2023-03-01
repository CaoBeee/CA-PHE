import React from 'react';
import logo from '../images/ca phe mock client profile transparent.png';
import facebookLogo from '../images/Facebook Logo.png';
import instagramLogo from '../images/Instagram Logo.png';
import twitterLogo from '../images/Twitter Logo.png';

import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <img className="LandingPage__Logo" src={logo} alt="logo" />
            <ul className="LandingPage__nav-links">
                <button>Menu</button>
                <button>Seasonal Dishes</button>
                <button>Inside the Cafe</button>
                <button>Delivery FAQ</button>
                <button>About Us</button>
                <button>Our Advocacy</button>
                <div className="LandingPage__nav-links-socials">
                    <img src={facebookLogo } alt="facebookLogo"/>
                    <img src={instagramLogo} alt="instagramLogo" />
                    <img src={twitterLogo} alt="twitterLogo" />
                </div>
            </ul>
        </div>
    );
};

export default LandingPage;