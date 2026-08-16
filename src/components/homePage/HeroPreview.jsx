import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import droneShot from "../../assets/overhead drone shot updated 2026.jpg";
import "./HeroPreview.css";

const HeroPreview = () => {
    return (
        <section className="hero-section">
            <div className="hero-image-wrapper">
                <img
                    src={droneShot}
                    alt="Aerial view of Hidden Gable Estate's pool, gardens, and Spanish Colonial Revival architecture"
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

                <svg
                    className="hero-badge"
                    viewBox="0 0 160 160"
                    role="img"
                    aria-label="Palm Springs, California"
                >
                    <defs>
                        <path
                            id="hero-badge-arc"
                            d="M 20,80 A 60,60 0 1 1 140,80"
                            fill="none"
                        />
                    </defs>
                    <circle
                        cx="80"
                        cy="80"
                        r="76"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                    />
                    <text className="hero-badge-text">
                        <textPath
                            href="#hero-badge-arc"
                            startOffset="50%"
                            textAnchor="middle"
                        >
                            Palm Springs &middot; California
                        </textPath>
                    </text>
                    <g
                        className="hero-badge-palms"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                    >
                        <line x1="60" y1="120" x2="60" y2="88" />
                        <path d="M60 88 C 50 82, 44 84, 38 78" />
                        <path d="M60 88 C 52 78, 52 70, 46 64" />
                        <path d="M60 88 C 62 76, 58 68, 62 58" />
                        <path d="M60 88 C 68 78, 68 70, 74 64" />
                        <path d="M60 88 C 70 82, 76 84, 82 78" />

                        <line x1="90" y1="120" x2="90" y2="94" />
                        <path d="M90 94 C 82 90, 78 92, 74 88" />
                        <path d="M90 94 C 84 86, 84 80, 80 76" />
                        <path d="M90 94 C 92 84, 89 78, 92 70" />
                        <path d="M90 94 C 98 86, 98 80, 102 76" />
                        <path d="M90 94 C 100 90, 104 92, 108 88" />
                    </g>
                </svg>
            </div>
        </section>
    );
};

export default HeroPreview;
