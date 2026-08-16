import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Rental.css";

const CorporateEvents = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact");
    };

    const corporateActivityList = [
        "Entertain important clients",
        "Reward top-performing employees",
        "Launch a new product with style",
        "Host a unique and memorable corporate gathering",
    ];

    const corporateThemeList = [
        { emoji: "🎭", name: "The Roaring Twenties & Flapper Era" },
        { emoji: "🎩", name: "The Great Gatsby & Classic Hollywood" },
        { emoji: "🃏", name: "Casino Night & Rat Pack Glamour" },
        { emoji: "🖤", name: "Casablanca-Inspired Elegance" },
        { emoji: "🚀", name: "The Space Race & WWII Era" },
        { emoji: "👩 💼", name: "Women Leaders & Influencers" },
    ];

    const corporateRecreationList = [
        "Pickleball & Bocce Ball",
        "Swimming Pool & Hot Tub",
        "Outdoor BBQ & Dining",
    ];

    const corporateVenueList = [
        { emoji: "🍸", name: "Cocktail Receptions" },
        { emoji: "🍽", name: "Banquets, Luncheons & Dinners" },
        {
            emoji: "🎉",
            name: "Corporate Retreats, Team Offsites & Networking Events",
        },
        { emoji: "🚀", name: "Product Launches & Media Events" },
        { emoji: "💼", name: "Executive Meetings & Hospitality Gatherings" },
        { emoji: "🎗", name: "Fundraisers & Charity Events" },
    ];

    return (
        <main className="rental">
            <Helmet>
                <title>Palm Springs Corporate Events</title>
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
                            Corporate Events at Hidden Estate – A Palm Springs
                            Landmark
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
                            <h3 className="red">
                                Elevate your next corporate offsite, retreat, or
                                business event
                            </h3>
                            <p>
                                Nestled in the historic Old Las Palmas
                                neighborhood, this private Spanish estate offers
                                an inspiring and sophisticated setting for
                                companies looking to:
                            </p>
                            <ul className="rental__list">
                                {corporateActivityList.map(
                                    (activity, index) => (
                                        <li
                                            key={index}
                                            className="rental__list-item"
                                        >
                                            <span>{activity}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                            <p>
                                We collaborate with world-class event creators,
                                managers, and caterers to design an
                                unforgettable experience tailored to your brand.
                            </p>
                        </div>

                        <div className="rental__list-container">
                            <h3>A Historic Setting for Unique Themed Events</h3>
                            <p>
                                Hidden Estate’s rich Hollywood history and
                                Spanish Colonial architecture set the perfect
                                stage for immersive, themed corporate
                                gatherings:
                            </p>
                            <ul className="rental__list-with-emoji">
                                {corporateThemeList.map((theme, index) => (
                                    <li
                                        key={index}
                                        className="rental__list-item-with-emoji"
                                    >
                                        <span className="emoji">
                                            {theme.emoji}
                                        </span>
                                        <span>{theme.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="rental__secondary-section">
                    <div className="rental__secondary-content-wrapper">
                        <div className="rental__list-container">
                            <h3>
                                Versatile Event Spaces for Any Corporate
                                Occasion
                            </h3>
                            <p>
                                Hidden Estate can accommodate 200+ guests across
                                a variety of stunning venues:{" "}
                            </p>
                            <ul className="rental__list-with-emoji">
                                {corporateVenueList.map((venue, index) => (
                                    <li
                                        key={index}
                                        className="rental__list-item-with-emoji"
                                    >
                                        <span className="emoji">
                                            {venue.emoji}
                                        </span>
                                        {venue.name}
                                    </li>
                                ))}
                            </ul>
                            <p>
                                Just 90 minutes from Los Angeles, Palm Springs
                                offers a perfect blend of mid-century charm and
                                modern luxury. Whether you're exploring trendy
                                boutiques, world-class golf courses, hiking
                                trails, or vibrant nightlife, the city's top
                                attractions are just minutes away.
                            </p>
                        </div>

                        <div className="rental__list-container">
                            <h3 className="red">
                                Luxury Amenities for Team Building & Networking
                            </h3>
                            <p>
                                Encourage collaboration and relaxation with a
                                variety of engaging activities:
                            </p>
                            <ul className="rental__list">
                                {corporateRecreationList.map(
                                    (recreation, index) => (
                                        <li
                                            key={index}
                                            className="rental__list-item"
                                        >
                                            {recreation}
                                        </li>
                                    )
                                )}
                            </ul>

                            <p>
                                Let Hidden Estate provide the perfect balance of
                                sophistication, exclusivity, and inspiration for
                                your next corporate event.
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

export default CorporateEvents;
