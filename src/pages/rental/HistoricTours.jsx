import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Rental.css";

const HistoricTours = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/inquire");
    };

    const privateTourFeatureList = [
        {
            emoji: "🌟",
            name: 'Exclusive Estate Tour: Discover the Desert Hideaway where celebrities escaped Hollywood to experience life as "normal folks."',
        },
        {
            emoji: "🌟",
            name: "Step Into Old Las Palmas: Imagine a springtime stroll through the neighborhood, where you might have run into Kirk Douglas, Bing Crosby, Clark Gable, or Lucille Ball in their heyday.",
        },
        {
            emoji: "🌟",
            name: "Architectural & Garden Insights: Explore the stunning Spanish Revival design, lush gardens, and period furnishings that make this estate an architectural gem.",
        },
    ];

    const privateTourDetailList = [
        {
            emoji: "🕰",
            detail: "Scheduling",
            description:
                "Tours are typically held mid-week, based on availability.",
        },
        {
            emoji: "⏳",
            detail: "Duration",
            description:
                "Standard tours last 45 minutes but can be tailored to your needs.",
        },
        {
            emoji: "🍸",
            detail: "Enhance Your Experience",
            description:
                "Customize your tour with cocktail hours, lunch, or dinner (indoors or outdoors).",
        },
    ];

    const specializedTourList = [
        {
            name: "Celebrity History Tour",
            description: "Learn about the estate’s star-studded past.",
        },
        {
            name: "Architectural Tour",
            description:
                "Discover the design and craftsmanship behind this Spanish Revival masterpiece.",
        },
        {
            name: "Garden Tour",
            description:
                "Stroll through the lush grounds and experience the estate’s breathtaking landscape.",
        },
    ];

    return (
        <main className="rental">
            <Helmet>
                <title>Palm Springs Historic Tours</title>
            </Helmet>

            <div className="rental__hero-banner">
                <div
                    className="rental__hero-image"
                    style={{
                        backgroundImage: `url(https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1741380108/Hidden%20Gable%20Estate/home%20page/5649_cb7wn4.jpg)`,
                    }}
                ></div>
            </div>

            <div className="rental__content-container">
                <section className="rental__primary-section">
                    <div className="rental__header">
                        <h1>
                            Historic Tours – Palm Springs Celebrity & Spanish
                            Architecture Experience
                        </h1>
                        <h2>
                            <em>
                                Step back in time and experience the Hollywood
                                glamour and architectural beauty of The Hidden
                                Estate
                            </em>
                        </h2>
                        <p className="rental__tagline">
                            A Palm Springs treasure steeped in celebrity History
                        </p>
                    </div>

                    <div className="rental__details">
                        <h2 className="rental__title red">
                            A Legacy of Stars: The Spanish Revival Masterpiece
                        </h2>
                        <p>
                            Designed in the Roaring Twenties by master architect
                            McNeal Swasey for renowned fashion designer Swobdi,
                            this exquisite Spanish Revival estate has been home
                            to some of Hollywood’s most iconic figures,
                            including Clark Gable & Carole Lombard, Bing & Dixie
                            Crosby, Sammy Davis Jr., Maurice Chevalier, and
                            more.
                        </p>
                        <p>
                            Once owned by the Douglas family, the estate even
                            retains the handcrafted pool table made for movie
                            star Kirk Douglas—a true piece of cinematic history.
                        </p>
                    </div>

                    <div className="rental__primary-content-wrapper">
                        <div className="rental__list-container">
                            <h3 className="red">
                                What to Expect on Your Private Tour
                            </h3>
                            <ul className="rental__list-with-emoji">
                                {privateTourFeatureList.map(
                                    (feature, index) => (
                                        <li
                                            key={index}
                                            className="rental__list-item-with-emoji"
                                        >
                                            <span className="emoji">
                                                {feature.emoji}
                                            </span>
                                            <span>{feature.name}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div className="rental__list-container">
                            <h3>Tour Details & Customization</h3>
                            <ul className="rental__list-with-emoji">
                                {privateTourDetailList.map((item, index) => (
                                    <li
                                        key={index}
                                        className="rental__list-item-with-emoji"
                                    >
                                        <span className="emoji">
                                            {item.emoji}
                                        </span>
                                        <span>
                                            <strong>{item.detail}: </strong>
                                            {item.description}
                                        </span>
                                    </li>
                                ))}
                                <li className="rental__list-item-with-emoji">
                                    <span className="emoji">🏛</span>
                                    <span>
                                        <strong>
                                            Specialized Tours Available:{" "}
                                        </strong>
                                        <ul className="rental__sublist">
                                            {specializedTourList.map(
                                                (tour, index) => (
                                                    <li
                                                        key={index}
                                                        className="rental__list-item"
                                                    >
                                                        <em>{tour.name}</em> –{" "}
                                                        {tour.description}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="rental__booking-section">
                    <div className="rental__list-container">
                        <h3 className="red">Curate Your Private Tour</h3>
                        <p>
                            Whether you're a history buff, architecture
                            enthusiast, or simply looking for a one-of-a-kind
                            experience, The Hidden Estate promises an
                            unforgettable journey into the heart of Palm
                            Springs’ Golden Age.
                        </p>
                        <p className="rental__booking-contact-message">
                            <strong>
                                Contact us for per-person rates, docent fees,
                                and to discuss any special requests.
                            </strong>
                        </p>
                        <button
                            onClick={handleClick}
                            className="rental__booking-button"
                        >
                            Contact Us
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default HistoricTours;
