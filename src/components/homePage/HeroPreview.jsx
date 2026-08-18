import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import droneShot from "../../assets/overhead drone shot updated 2026.jpg";
import palmSpringsLogo from "../../assets/palm-springs-logo.png";
import "./HeroPreview.css";

const HeroPreview = () => {
    return (
        <section className="hero-section">
            <div className="hero-image-wrapper">
                <img
                    src={droneShot}
                    alt="Aerial view of Hidden Estate's pool, gardens, and Spanish Colonial Revival architecture"
                    className="hero-image"
                />
                <div className="hero-image-scrim" aria-hidden="true"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-tagline">
                    Experience the Glamour of Hollywood&rsquo;s Golden Age
                    <svg
                        className="hero-tagline-underline"
                        viewBox="0 0 300 20"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M2 12 C 40 4, 70 18, 110 10 S 180 2, 220 12 S 270 18, 298 8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                    </svg>
                </h1>

                <div className="hero-actions">
                    <div className="hero-buttons">
                        <Link to="/rental/weddings" className="hero-button">
                            Explore Weddings
                        </Link>
                        <Link
                            to="/rental/privateevents"
                            className="hero-button"
                        >
                            Plan an Event
                        </Link>
                    </div>

                    <div className="hero-links">
                        <Link to="/rental/filmlocation" className="hero-link">
                            Photo + Film
                            <ArrowRight size={18} strokeWidth={2} />
                        </Link>
                        <Link to="/rental/privatetours" className="hero-link">
                            Private Tour/Dinner
                            <ArrowRight size={18} strokeWidth={2} />
                        </Link>
                    </div>
                </div>

                <img
                    src={palmSpringsLogo}
                    alt="Palm Springs, California"
                    className="hero-badge"
                />
            </div>
        </section>
    );
};

export default HeroPreview;
