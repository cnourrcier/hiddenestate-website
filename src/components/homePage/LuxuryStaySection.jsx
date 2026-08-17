import { Link } from "react-router-dom";
import "./LuxuryStaySection.css";

const bookingUrl =
    "https://www.naturalretreats.com/property-detail-page?name=hidden-estate-7351";

const LuxuryStaySection = () => {
    return (
        <section className="luxury-stay">
            <div className="luxury-stay__panel">
                <h2 className="luxury-stay__title">Luxury Stay</h2>
                <p className="luxury-stay__subtitle">
                    A private Palm Springs retreat for overnight guests
                </p>
                <div className="luxury-stay__image-wrapper">
                    <img
                        src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/61cc08c2-97c5-4a2e-028d-a07089ab8700/public`}
                        alt="Guests relaxing in the pool with inflatable floats at Hidden Estate"
                        className="luxury-stay__image"
                        loading="lazy"
                    />
                </div>
                <div className="luxury-stay__links">
                    <Link
                        to="/rental/luxuryvacationrental"
                        className="luxury-stay__link"
                    >
                        Explore the Stay
                    </Link>
                    <a
                        href={bookingUrl}
                        className="luxury-stay__link"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-umami-event="check-availability-click"
                        data-umami-event-location="luxury-stay-section"
                    >
                        Check Availability
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LuxuryStaySection;
