import { Link } from "react-router-dom";
import weddingSectionImage from "../../assets/WeddingSectionImage.jpg";
import "./WeddingsSection.css";

const bookingUrl =
    "https://www.naturalretreats.com/property-detail-page?name=hidden-estate-7351";

const WeddingsSection = () => {
    return (
        <section className="weddings-section">
            <div className="weddings-section__image-wrapper">
                <img
                    src={weddingSectionImage}
                    alt="Floral lanterns lining the wedding aisle at Hidden Gable Estate"
                    className="weddings-section__image"
                />
            </div>
            <div className="weddings-section__content">
                <div className="weddings-section__text">
                    <h2 className="weddings-section__heading">
                        Weddings at Hidden Estate
                    </h2>
                    <p className="weddings-section__tagline">
                        Private, romantic, and unmistakably Palm Springs
                    </p>
                    <p>
                        From garden vows and poolside cocktails to dinner
                        beneath the palms, every part of your celebration can
                        unfold in one unforgettable setting that feels entirely
                        your own.
                    </p>
                    <p>
                        Ideally located just a short walk from downtown Palm
                        Springs, with several excellent hotels nearby for
                        guests.
                    </p>
                </div>
                <div className="weddings-section__actions">
                    <Link
                        to="/rental/weddings"
                        className="weddings-section__button weddings-section__button--outline"
                    >
                        Explore Weddings
                    </Link>
                    <a
                        href={bookingUrl}
                        className="weddings-section__button weddings-section__button--outline"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-umami-event="check-availability-click"
                        data-umami-event-location="weddings-section"
                    >
                        Check Availability
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WeddingsSection;
