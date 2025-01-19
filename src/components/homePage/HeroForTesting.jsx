import React, { useState, useEffect } from 'react';
import './Hero.css';
import VideoPlayer from '../VideoPlayer';

const HeroForTesting = () => {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const loadVideo = async () => {
            const url = '/video/HiddenGableEstate.mp4';
            setVideoUrl(url);
        };
        loadVideo();
    }, []);

    return (
        <div className="hero-section">
            {console.log(videoUrl)}
            {videoUrl ? (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img
                    src="https://via.placeholder.com/1920x1080.png?text=Palm+Springs+Retreat"
                    alt="Palm Springs Historic House"
                    className="hero-image"
                />
            )}
            {/* <VideoPlayer /> */}
            <div className="hero-overlay"></div>
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
            </div>
        </div>
    )
}

export default HeroForTesting;