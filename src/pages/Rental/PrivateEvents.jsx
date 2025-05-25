import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Rental.css";

const PrivateEvents = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact");
    };

    const privateVenueList = [
        { emoji: "✨", name: "Movie Premieres" },
        { emoji: "🍸", name: "Cocktail Receptions" },
        { emoji: "🎉:", name: "Private Parties (Small & Large)" },
        { emoji: "💍", name: "Anniversaries & Showers" },
        { emoji: "🎂", name: "Birthday Celebrations" },
        { emoji: "🎓", name: "Graduations & Reunions" },
        { emoji: "💼", name: "Retirement Parties & Mixers" },
        { emoji: "🖼", name: "Art Exhibits & Showcases" },
    ];

    const privateThemeList = [
        { emoji: "🎭", name: "The Roaring Twenties & Flapper Era" },
        { emoji: "🎩", name: "The Great Gatsby & Classic Hollywood" },
        { emoji: "🃏", name: "Casino Night & Rat Pack Glamour" },
        { emoji: "🖤", name: "Casablanca & Vintage Romance" },
        { emoji: "🚀", name: "The Space Race & WWII Era Elegance" },
        { emoji: "👩 💼", name: "Women Leaders & Influencers Celebrations" },
    ];

    const privateRecreationList = [
        "Pickleball & Bocce Ball",
        "Swimming Pool & Hot Tub",
        "Outdoor BBQ & Dining",
    ];

    return (
        <main className="rental">
            <Helmet>
                <title>Palm Springs Private Events</title>
            </Helmet>

            <div className="rental__hero-banner">
                <div
                    className="rental__hero-image"
                    style={{
                        backgroundImage: `url(https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1741378878/Hidden%20Gable%20Estate/home%20page/_I1A0391_xn500l.jpg`,
                    }}
                ></div>
            </div>

            <div className="rental__content-container">
                <section className="rental__primary-section">
                    <div className="rental__header">
                        <h1>
                            Private Events at Hidden Estate – A Palm Springs
                            Icon
                        </h1>
                        <h2>
                            <em>
                                Custom Events • Extraordinary Experiences • Your
                                Brand
                            </em>
                        </h2>
                    </div>

                    <div className="rental__primary-content-wrapper">
                        <div className="rental__list-container">
                            <h3 className="red">An iconic celebrity retreat</h3>
                            <p>
                                Hidden Estate offers an exclusive and intimate
                                venue for unforgettable events in Palm Springs.
                            </p>
                            <p>
                                Whether you're a Classic Hollywood enthusiast,
                                an admirer of historic Spanish architecture, or
                                drawn to the romance of Monet’s inspirations,
                                this estate provides a one-of-a-kind setting for
                                your special occasion.
                            </p>

                            <h3 className="red">
                                Luxury Amenities for Unforgettable Moments
                            </h3>
                            <p>
                                Bond with family, friends, or colleagues while
                                enjoying world-class entertainment and leisure
                                options:
                            </p>
                            <ul className="rental__list">
                                {privateRecreationList.map(
                                    (recreation, index) => (
                                        <li
                                            key={index}
                                            className="rental__list-item"
                                        >
                                            <span>{recreation}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div className="rental__list-container">
                            <h3>Versatile Spaces for Any Event</h3>
                            <p>
                                From intimate gatherings to lavish affairs,
                                Hidden Estate’s enchanting indoor and outdoor
                                spaces can be tailored to your vision:
                            </p>
                            <ul className="rental__list-with-emoji">
                                {privateVenueList.map((venue, index) => (
                                    <li
                                        key={index}
                                        className="rental__list-item-with-emoji"
                                    >
                                        <span className="emoji">
                                            {venue.emoji}
                                        </span>
                                        <span>{venue.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="rental__secondary-section">
                    <div className="rental__secondary-content-wrapper">
                        <div className="rental__list-container">
                            <h3>A Historic Setting for Themed Events</h3>
                            <p>
                                Hidden Estate’s rich history and architectural
                                beauty provide the perfect backdrop for
                                immersive, themed experiences:
                            </p>
                            <ul className="rental__list-with-emoji">
                                {privateThemeList.map((theme, index) => (
                                    <li
                                        key={index}
                                        className="rental__list-item-with-emoji"
                                    >
                                        <span className="emoji">
                                            {theme.emoji}
                                        </span>
                                        {theme.name}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rental__list-container">
                            <p>
                                Whether you're planning an elegant soirée, an
                                immersive themed event, or a private retreat,
                                Hidden Estate is the perfect canvas for your
                                vision.
                            </p>
                            <button
                                onClick={handleClick}
                                className="rental__booking-button"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default PrivateEvents;
