import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
    CarouselProvider,
    Carousel,
} from "../../components/common/carouselNew";
import "./EventsPage.css";

const EventsPage = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    // Foundation event carousel data
    const foundationEventImages = [
        {
            id: "6-3-PSUSDF-DAL_0895",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0895/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0894",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0894/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0560",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0560/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0576",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0576/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0581",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0581/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0600",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0600/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0604",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0604/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0628",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0628/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0611",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0611/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0640",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0640/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0641",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0641/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0661",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0661/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0701",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0701/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0711",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0711/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0752",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0752/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0787",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0787/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0783",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0783/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0878",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0878/public`,
            alt: "",
        },
        {
            id: "6-3-PSUSDF-DAL_0839",
            source: `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/6-3-PSUSDF-DAL_0839/public`,
            alt: "",
        },
    ];

    const foundationCarouselOptions = {
        autoPlay: true,
        autoPlayInterval: 4000,
        loop: true,
        initialIndex: 0,
    };

    return (
        <main className="events-page">
            <Helmet>
                <title>Events Galleries</title>
            </Helmet>

            <div className="events__header-container">
                <h1 className="events__header">
                    Custom Events <span className="star">★</span> Extraordinary
                    Experiences <span className="star">★</span> Your Brand
                </h1>
            </div>
            <section className="top-section">
                <div className="historic-image-container">
                    <img
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736364893/Hidden%20Gable%20Estate/gardens%20page/Cactus_event_-_m_small_lgdphh.jpg`}
                        alt="Garden Tour 1929: Cactus and Succulent Society of America"
                        className="historic-image"
                    />
                    <h3 className="historic-image-title">Garden Tour 1929</h3>
                    <p className="historic-image-description">
                        Cactus and Succulant Society of America
                    </p>
                </div>

                <div className="right-column">
                    <div className="event-links">
                        <Link
                            to="/rental/corporateevents"
                            className="event-link"
                        >
                            Corporate Events
                        </Link>
                        <Link to="/rental/privateevents" className="event-link">
                            Private Events
                        </Link>
                        <Link to="/rental/privatetours" className="event-link">
                            Private Tours
                        </Link>
                    </div>

                    <ul className="events__features-list">
                        <li>
                            <span className="bullet"></span>Secluded and secure
                        </li>
                        <li>
                            <span className="bullet"></span>Beautiful mountain
                            views
                        </li>
                        <li>
                            <span className="bullet"></span>Stunning gardens and
                            courtyard spaces
                        </li>
                    </ul>
                </div>
            </section>

            <section className="events-showcase">
                <div className="event-card">
                    <h3 className="event-title">
                        The Foundation for Palm Springs Unified School District
                        2025 End of Year Event
                    </h3>
                    <CarouselProvider
                        items={foundationEventImages}
                        options={foundationCarouselOptions}
                        className="foundation-event-carousel"
                        ariaLabel="Foundation end of year event photo gallery"
                    >
                        <Carousel
                            direction="horizontal"
                            // aspectRatio="4/3"
                            showZoom={false}
                        />
                    </CarouselProvider>
                    <div className="foundation-card-bottom">
                        <img
                            style={{ width: "150px" }}
                            src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/f79cc279-5e0a-41fa-fef1-e1487055bf00/public`}
                            alt=""
                        />
                        <div className="foundation-gallery-text">
                            <p className="photo-attribution">
                                Photos by David A. Lee
                            </p>
                            <Link
                                to="foundation-for-psusd-2025"
                                className="view-gallery-link"
                                onClick={scrollToTop}
                            >
                                View full gallery
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="event-card wedding-shower-card">
                    <h3 className="event-title">April Wedding Shower</h3>
                    <div className="wedding-collage">
                        <img
                            src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/1571cc76-4843-4394-59c4-679c02f89700/public`}
                            alt="Soon to be bride posing while opening gifts"
                            className="collage-photo"
                        />
                        <img
                            src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/9b5d22df-9ee5-411e-80dc-22f44b98cd00/public`}
                            alt="Drinks for the wedding shower guests"
                            className="collage-photo"
                        />
                        <img
                            src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/5993b9e0-1415-40bc-2fa7-03595df36500/public`}
                            alt="Group of young ladies enjoying the pool - wedding shower"
                            className="collage-photo"
                        />
                        <img
                            src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/55358379-8570-4fb7-1a89-f803cc88eb00/public`}
                            alt="IMG_6270"
                            className="collage-photo"
                        />
                        <img
                            src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/ac032ab1-847a-4066-613b-7fbb62706600/public`}
                            alt="Soon to be bride posing"
                            className="collage-photo"
                        />
                    </div>
                </div>
                <div className="event-card">
                    <h3 className="event-title">
                        Modernism 2025 Featured Home Tour
                    </h3>
                    <div className="event-brochure-container">
                        <img
                            className="brochure-closed"
                            src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740960594/Hidden%20Gable%20Estate/events/modernism-2025-featured-home-tour/magazine-closed-transparentbg_small_us9e9k.png`}
                            alt="Modernism 2025 Featured Home Tour Brochure open"
                        />
                        <img
                            className="brochure-open"
                            src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740960594/Hidden%20Gable%20Estate/events/modernism-2025-featured-home-tour/magazine-open-transparentbg_small_s1t5fj.png`}
                            alt="Modernism 2025 Featured Home Tour Brochure open"
                        />
                    </div>
                    <div className="event-images">
                        <img
                            alt="iconic celebrity Nelda Linsk poolside"
                            src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740955678/Hidden%20Gable%20Estate/events/modernism-2025-featured-home-tour/pool-side-photo-bright_small_kewlsc.jpg`}
                            className="event-image"
                        />
                        <img
                            src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740955677/Hidden%20Gable%20Estate/events/modernism-2025-featured-home-tour/lady-in-yellow-with-packard-bright_small_fogi2e.jpg`}
                            alt="Modernism event photo 2"
                            className="event-image"
                        />
                    </div>
                    <p className="event-description">
                        Iconic celebrity Nelda Linsk indulges in poolside gossip
                        at the glamorous Hidden Estate
                    </p>
                </div>
            </section>
        </main>
    );
};

export default EventsPage;
