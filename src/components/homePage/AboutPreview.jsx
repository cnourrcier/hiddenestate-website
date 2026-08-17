import { Link } from "react-router-dom";
import PressQuote from "./PressQuote";
import "./AboutPreview.css";

const AboutPreview = () => {
    return (
        <section className="about-preview">
            <h2 className="about-preview__heading">
                Hidden Estate
                <span className="about-preview__subtitle">
                    A Storied Past &ndash; Hollywood&rsquo;s Desert Hideaway
                </span>
            </h2>
            <div className="about-preview__content-wrapper">
                <div className="about-preview__content-image-container">
                    <img
                        src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/2e2d2929-c302-4b51-c787-2de361d35000/public`}
                        alt="Hidden Estate"
                        className="about-preview__image"
                        loading="lazy"
                    />
                </div>
                <div className="about-preview__content-text">
                    <p>
                        Hidden Estate is a secluded historic estate in Palm
                        Springs&rsquo; Old Las Palmas neighborhood. Designed in
                        the 1920s and surrounded by mature gardens, Spanish
                        architecture and mountain views, the property offers a
                        distinctive private setting for weddings, celebrations,
                        corporate gatherings, photography and filming.
                    </p>
                    <p>
                        Its storied past steeped in Hollywood history, period
                        character and varied indoor and outdoor settings create
                        a unique experience.
                    </p>
                    <p>
                        Whether you&rsquo;re planning an elegant outdoor
                        wedding, an intimate gathering, or a high-end
                        soir&eacute;e, Hidden Estate delivers timeless charm and
                        exclusive privacy. Make your next event truly
                        unforgettable at one of Palm Springs&rsquo; most unique
                        and storied venues.
                    </p>
                </div>
            </div>
            <div className="about-preview__highlight-section">
                <div className="about-preview__divider">
                    <svg
                        className="about-preview__squiggle"
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
                </div>
                <div className="about-preview__content-highlight">
                    <p>
                        Transform yourself back in time as though it happened
                        one night, but make it your night in a celebrity Palm
                        Springs Estate.
                    </p>
                </div>
                <div className="about-preview__divider">
                    <svg
                        className="about-preview__squiggle"
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
                </div>
                <div className="about-preview__tags">
                    <Link to="/history" className="about-preview__tag">
                        History
                    </Link>
                    <Link to="/galleries/estate" className="about-preview__tag">
                        Architecture
                    </Link>
                </div>
            </div>
            <PressQuote />
        </section>
    );
};

export default AboutPreview;
