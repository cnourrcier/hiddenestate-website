import React from 'react';
import './Hero.css';
import VideoPlayer from '../VideoPlayer';

const Hero = () => {
    
    return (
        <div className="hero-section">
            <VideoPlayer />
            {/* <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="hero-text-container">
                    <h1>Your Desert Hideaway Awaits!</h1>
                    <p className='hero-subtitle'>Experience the Glamour of Hollywood's Golden Age</p>
                </div>
                <div className="hero-event-links">
                    <div className="event-links-grid">
                        <a href="#corporate" className="event-link">
                            <span>Corporate Events</span>
                        </a>
                        <a href="#weddings" className="event-link">
                            <span>Weddings</span>
                        </a>
                        <a href="#private" className="event-link">
                            <span>Private Events</span>
                        </a>
                        <a href="#rentals" className="event-link">
                            <span>Vacation Rentals</span>
                        </a>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Hero;