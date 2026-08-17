import { Link } from "react-router-dom";
import "./CustomEventsSection.css";

const CustomEventsSection = () => {
    return (
        <section className="custom-events">
            <div className="custom-events__content">
                <h2 className="custom-events__eyebrow">
                    Celebrations, dinners, receptions and branded gatherings
                </h2>
                <p className="custom-events__tagline">
                    Custom Events &bull; Extraordinary Experiences &bull; Your
                    Brand
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
                    <Link
                        to="/rental/privatetours"
                        className="custom-events__link"
                    >
                        Private Tours
                    </Link>
                </div>
            </div>
            <div className="custom-events__image-wrapper">
                <img
                    src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/51ea0f1e-b9ac-4013-43c7-3fac61f20b00/public`}
                    alt="Poolside terrace set up for a branded corporate gathering at Hidden Estate"
                    className="custom-events__image"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default CustomEventsSection;
