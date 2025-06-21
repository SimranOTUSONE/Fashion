import React from 'react';
import { Link } from 'react-router-dom';
import './HeroBanner.css';
import background from "../../assets/images/background.avif";

const HeroBanner = ({
    title = "Welcome to Our Site",
    subtitle = "Explore the world of knowledge",
    buttonText = "Get Started",
    buttonLink = "/start",
    backgroundImage = background
}) => {
    return (
        <div
            className="hero-banner"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="hero-content" style={{ backgroundColor: 'transparent' }}>
                <div className="hero-text" style={{ backgroundColor: 'transparent' }}>
                    {subtitle && <h3 className="hero-subtitle" style={{ backgroundColor: 'transparent' }}>{subtitle}</h3>}
                    <h2 className="hero-title" style={{ backgroundColor: 'transparent' }}>{title}</h2>
                    <Link to={buttonLink} className="hero-button">
                        {buttonText}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;