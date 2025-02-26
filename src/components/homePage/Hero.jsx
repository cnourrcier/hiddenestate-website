import VideoPlayer from '../VideoPlayer';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    
    return (
        <section className="hero-section">
            <VideoPlayer />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="hero-text-container">
                    <h1>Your Desert Hideaway Awaits!</h1>
                    <p className='hero-subtitle'>Experience the Glamour of Hollywood's Golden Age</p>
                </div>
                <div className="hero-event-links">
                    <div className="event-links-grid">
                        <Link to="/contact" className="hero__event-link">
                            <span>Corporate Events</span>
                        </Link>
                        <Link to="/contact" className="hero__event-link">
                            <span>Weddings</span>
                        </Link>
                        <Link to="/contact" className="hero__event-link">
                            <span>Private Events</span>
                        </Link>
                        <Link to="/contact" className="hero__event-link">
                            <span>Vacation Rentals</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;