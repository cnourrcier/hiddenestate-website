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
                        <Link to="/rental/corporateevents" className="hero__event-link">
                            <span>Corporate Events</span>
                        </Link>
                        <Link to="/rental/luxuryvacationrental" className="hero__event-link">
                            <span>Vacation Rentals</span>
                        </Link>
                        <Link to="/rental/privateevents" className="hero__event-link">
                            <span>Private Events</span>
                        </Link>
                        <Link to="/rental/privatetours" className="hero__event-link">
                            <span>Private Tours</span>
                        </Link>
                        <Link to="/rental/weddings" className="hero__event-link">
                            <span>Weddings</span>
                        </Link>
                        <Link to="/rental/dinnerparties" className="hero__event-link">
                            <span>Dinner Parties</span>
                        </Link>
                        <Link to="/rental/filmlocation" className="hero__event-link">
                            <span>Film Location</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;