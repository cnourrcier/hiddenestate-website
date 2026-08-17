import { Link } from "react-router-dom";
import "./CustomEventsSection.css";

const CustomEventsSection = () => {
    return (
        <section className="custom-events">
            <p className="custom-events__eyebrow">
                Celebrations, dinners, receptions and branded gatherings
            </p>
            <div className="custom-events__image-wrapper">
                <img
                    src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/51ea0f1e-b9ac-4013-43c7-3fac61f20b00/public`}
                    alt="Poolside terrace set up for a branded corporate gathering at Hidden Gable Estate"
                    className="custom-events__image"
                />
            </div>
            <svg
                className="custom-events__squiggle"
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
            <p className="custom-events__tagline">
                Custom Events &bull; Extraordinary Experiences &bull; Your Brand
            </p>
            <div className="custom-events__links">
                <Link
                    to="/rental/privateevents"
                    className="custom-events__link"
                >
                    Plan an Event
                </Link>
                <Link
                    to="/rental/dinnerparties"
                    className="custom-events__link"
                >
                    Dinner Parties
                </Link>
                <Link to="/rental/privatetours" className="custom-events__link">
                    Private Tours
                </Link>
            </div>
        </section>
    );
};

export default CustomEventsSection;
