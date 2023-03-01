import React from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink to="/Menu">
                    <button>
                        Menu
                    </button>
                </NavLink>
                <NavLink to="/Seasonal">
                    <button>
                        Seasonal Dishes
                    </button>
                </NavLink>
                <NavLink to="/Inside">
                    <button>
                        Inside the Cafe
                    </button>
                </NavLink>
                <NavLink to="/FAQ">
                    <button>
                        Delivery FAQ
                    </button>
                </NavLink>
                <NavLink to="/About">
                    <button>
                        About Us
                    </button>
                </NavLink>
                <NavLink to="/Advocacy">
                    <button>
                        Our Advocacy
                    </button>
                </NavLink>
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