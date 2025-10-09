import { Helmet } from "react-helmet-async";
import claudeMonetInspiration from "../assets/claude-monet-inspiration.svg";
import { useModal } from "../context/ModalContext";
import "./NewHomePage.css";

function NewHomePage() {
    const { openModal } = useModal();

    return (
        <main className="homepage">
            <Helmet key={location.pathname}>
                <title>Palm Springs Luxury Vacation Rental</title>
            </Helmet>
            <section className="homepage-hero-section">
                <div className="hero-content-section">
                    <div className="hero-image-container">
                        <img
                            src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736519291/Hidden%20Gable%20Estate/gardens%20page/Untitled-23_small_ejizoz.jpg`}
                            alt="Historic Spanish Colonial Revival Estate"
                        />
                        <div className="hero-overlay-text">
                            <p className="hero-tagline">
                                If these walls could talk!
                            </p>
                        </div>
                    </div>
                    <div className="hero-historical-details">
                        <div className="hero-details-grid">
                            <div className="hero-detail-item">
                                <div className="hero-detail-label">
                                    Est. 1925
                                </div>
                                <div className="hero-detail-text">
                                    <strong>Spanish Colonial Revival</strong>{" "}
                                    architecture and the glamour of{" "}
                                    <strong>Hollywood's golden era.</strong>
                                </div>
                            </div>
                            <div className="hero-detail-item">
                                <div className="hero-detail-label">
                                    Created By
                                </div>
                                <div className="hero-detail-text">
                                    <strong>Fashion icon</strong> Agnes Swobdi,
                                    <strong>
                                        {" "}
                                        couturier to Hollywood's silent film
                                        stars.
                                    </strong>
                                </div>
                            </div>
                        </div>

                        <div className="hero-divider"></div>

                        <p className="hero-description">
                            Today, it remains a{" "}
                            <strong>private sanctuary</strong> where timeless
                            architecture, lush gardens, cinematic backdrops,
                            curated interiors and historic charm set the stage
                            for unforgettable moments.{" "}
                            <strong>Limited availability</strong>
                        </p>

                        <div className="event-categories">
                            <div className="event-row">
                                <span className="event-item">
                                    Charity Galas & Fundraisers
                                </span>
                                <span className="event-separator">◇</span>
                                <span className="event-item">
                                    Private Celebrations
                                </span>
                            </div>
                            <div className="event-row">
                                <span className="event-item">
                                    Historic & Cultural Experiences
                                </span>
                                <span className="event-separator">◇</span>
                                <span className="event-item">
                                    Film & Photography
                                </span>
                            </div>
                        </div>

                        <p className="hero-century-tagline">
                            <em>
                                A Century of Elegance, Exclusivity, and
                                Celebrity
                            </em>
                        </p>

                        <button className="homepage-cta-button">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className="homepage-garden-image-container">
                    <img
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1741571246/Hidden%20Gable%20Estate/gardens%20page/_I1A0280_small_nyjxxh.jpg`}
                        alt=""
                    />
                </div>
            </section>
            <section>
                <div className="homepage-highlight">
                    <p>
                        Transform yourself back in time as though it happened
                        one night, but make it your night in a celebrity Palm
                        Springs Estate.
                    </p>
                </div>
            </section>
            <section>
                <div className="homepage-car-image-container">
                    <img
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1741378878/Hidden%20Gable%20Estate/home%20page/_I1A0391_xn500l.jpg`}
                        alt=""
                    />
                </div>
            </section>
            <section className="about">
                <blockquote className="about__quote">
                    <h4 className="about__quote-title">
                        "Frankly darling, you will give a damn."
                    </h4>
                    <cite className="about__quote-source">
                        - Lauran Piro, GOOD HOUSEKEEPING Oct 2, 2014
                    </cite>
                    <p>
                        "We love a good pink house, but a rosy-hued home that
                        once belonged to one of Hollywood's dreamiest actors
                        makes us especially giddy. It's like the real-estate
                        equivalent of a strapping gentleman in a pink polo shirt
                        – oddly, it just works.
                    </p>
                    <p className="about__quote-highlight">
                        <span>Clark Gable</span> and actress{" "}
                        <span>Carole Lombard</span> once called this Spanish
                        Colonial in Palm Springs their home.
                    </p>
                    <p>
                        And it's rife with perplexing famous-people details,
                        like half a dozen bathrooms, a saltwater pool, and a
                        guest house cutely called a <i>'casita'</i>. But,
                        exposed wooden beams, intricate tilework, and a master
                        bedroom with outdoor access make this house a timeless
                        classic (much like Gable himself)."
                    </p>
                </blockquote>
            </section>
            <section>
                <div className="succulent-society-image-container">
                    <img
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736364893/Hidden%20Gable%20Estate/gardens%20page/Cactus_event_-_m_small_lgdphh.jpg`}
                        alt=""
                    />
                </div>
                <p className="succulent-society-description">
                    <strong>Cactus and Succulent Society of America - </strong>{" "}
                    Hidden Estate has hosted Palm Spring's most distinguished
                    gatherings since
                    <strong>the roaring twenties</strong>
                </p>
            </section>
            <section>
                <div className="monet-container">
                    <h3 className="monet-title">Claude Monet Inspiration</h3>
                    <p>(Click image for more)</p>
                    <img
                        className="monet-image"
                        src={claudeMonetInspiration}
                        alt="Claude Monet - House Among the Palms"
                        onClick={() => openModal("monet-inspiration")}
                    />
                    <cite className="monet-quote">
                        “Color is my daylong obsession, joy, and torment”{" "}
                        <span>- Claude Monet</span>
                    </cite>
                </div>
            </section>

            <section className="events-section">
                <div className="container">
                    {/* Header */}
                    <h1 className="main-heading">
                        Custom Events * Extraordinary Experiences * Your Brand
                    </h1>

                    {/* Weddings Section */}
                    <div className="weddings-section">
                        <div className="weddings-content">
                            <h2 className="section-heading">
                                Weddings & Private Celebrations
                            </h2>
                            <p className="section-text">
                                Create unforgettable memories in a setting where
                                old-world romance meets modern sophistication.
                                Host an intimate gathering that feels both
                                timeless and entirely your own.
                            </p>
                            <div className="wedding-image-small">
                                <img
                                    src="https://placehold.co/400x300/FFC0CB/FFFFFF?text=Floral+Table+Setting"
                                    alt="Elegant floral table setting"
                                />
                            </div>
                        </div>
                        <div className="weddings-image-large">
                            <img
                                src="https://placehold.co/600x450/D4A574/FFFFFF?text=Outdoor+Wedding+Ceremony"
                                alt="Outdoor wedding ceremony"
                            />
                            <p className="image-caption">Digitally Staged</p>
                        </div>
                    </div>

                    {/* Corporate Section */}
                    <div className="corporate-section">
                        <div className="corporate-image-left">
                            <img
                                src="https://placehold.co/400x500/8B7355/FFFFFF?text=Tasting+Event"
                                alt="Corporate tasting event"
                            />
                        </div>
                        <div className="corporate-content">
                            <h2 className="section-heading">
                                Corporate & Charity Events
                            </h2>
                            <p className="section-text">
                                From executive retreats to high-profile galas,
                                Hidden Estate provides an exclusive backdrop
                                that balances prestige with privacy. With a
                                century of heritage, the estate is the perfect
                                stage for{" "}
                                <strong>
                                    fundraisers, brand activations, and intimate
                                    corporate gatherings
                                </strong>
                                .
                            </p>
                        </div>
                        <div className="corporate-image-right">
                            <img
                                src="https://placehold.co/600x450/87CEEB/FFFFFF?text=Outdoor+Gathering"
                                alt="Outdoor corporate gathering"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="event-experiences">
                <div className="experiences-container">
                    {/* Hero Image */}
                    <div className="hero-image">
                        <img
                            src="https://placehold.co/1200x400/4A7C59/FFFFFF?text=Aerial+Estate+View"
                            alt="Aerial view of Hidden Estate"
                        />
                    </div>

                    {/* Film & Photography Section */}
                    <div className="film-section">
                        <div className="film-image">
                            <img
                                src="https://placehold.co/600x500/D4A574/FFFFFF?text=Spanish+Architecture"
                                alt="Historic Spanish architecture with mountain backdrop"
                            />
                        </div>
                        <div className="film-content">
                            <h2 className="section-heading">
                                Film & Photography Productions
                            </h2>
                            <p className="section-text">
                                Cinematic landscapes, architectural character,
                                and curated interiors. Hidden Estate offers{" "}
                                <strong>
                                    authentic Palm Springs backdrops
                                </strong>{" "}
                                for fashion editorials, film productions, and
                                commercial shoots.
                            </p>
                        </div>
                    </div>

                    {/* Historic & Cultural Section */}
                    <div className="historic-section">
                        <div className="historic-content">
                            <h2 className="section-heading">
                                Historic & Cultural Experiences
                            </h2>
                            <p className="section-text">
                                Step into Palm Springs' living history. Private
                                tours and cultural programs reveal the estate's
                                remarkable past, from its roots in Hollywood's
                                silent era to its enduring role as a gathering
                                place for creativity and culture.
                            </p>
                        </div>
                        <div className="historic-image">
                            <img
                                src="https://placehold.co/600x450/8FBC8F/FFFFFF?text=Estate+Grounds"
                                alt="Palm-lined estate grounds"
                            />
                        </div>
                    </div>

                    {/* Plan Your Event Section */}
                    <div className="plan-event-section">
                        <h2 className="section-heading">Plan Your Event</h2>
                        <p className="section-text">
                            We host a{" "}
                            <strong>
                                limited number of private events each year
                            </strong>{" "}
                            to preserve the intimacy and exclusivity of the
                            estate. What ever the moment, make it unforgettable!
                        </p>
                        <p className="section-text">
                            <strong>Contact us today</strong> to schedule a
                            private tour and reserve your date at Palm Springs'
                            most historic luxury venue.
                        </p>
                        <button className="homepage-cta-button">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default NewHomePage;
