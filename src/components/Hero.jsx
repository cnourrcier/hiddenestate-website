import React, { useState, useEffect } from 'react';
import { fetchPexelsVideo } from '../utils/pexelsAPI';
import './Hero.css';
import FadingCategories from './FadingCategories';

const Hero = () => {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const loadVideo = async () => {
            const url = await fetchPexelsVideo();
            setVideoUrl(url);
        };
        loadVideo();
    }, []);

    return (
        <div className="hero-section">
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
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Clark Gable's <br />Palm Springs Resort</h1>
                <p>Your Desert Hideaway Awaits!</p>
                <FadingCategories />
                <h3>Experience the Glamour of Hollywood's Golden Age</h3>
            </div>
        </div>
    )
}

export default Hero;