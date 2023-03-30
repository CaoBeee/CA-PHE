import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/ca phe mock client profile transparent.png';
import facebookLogo from '../public/images/Facebook Logo.png';
import instagramLogo from '../public/images/Instagram Logo.png';
import twitterLogo from '../public/images/Twitter Logo.png';
import styles from '../styles/LandingPage.module.css';

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <Image className={styles.LandingPage__Logo} src={logo} alt="logo" />
            <ul className={styles.LandingPage__navLinks}>
                <Link href="/Menu">
                    <button>
                        Menu
                    </button>
                </Link>
                <Link href="/Seasonal">
                    <button>
                        Seasonal Dishes
                    </button>
                </Link>
                <Link href="/Inside">
                    <button>
                        Inside the Cafe
                    </button>
                </Link>
                <Link href="/FAQ">
                    <button>
                        Delivery FAQ
                    </button>
                </Link>
                <Link href="/About">
                    <button>
                        About Us
                    </button>
                </Link>
                <Link href="/Advocacy">
                    <button>
                        Our Advocacy
                    </button>
                </Link>
                <div className={styles.socials }>
                    <Image src={facebookLogo} alt="facebookLogo" />
                    <Image src={instagramLogo} alt="instagramLogo" />
                    <Image src={twitterLogo} alt="twitterLogo" />
                </div>
            </ul>
        </div>
    );
};

export default LandingPage;