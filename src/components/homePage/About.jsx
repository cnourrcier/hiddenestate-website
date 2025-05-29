import "./About.css";

const About = () => {
    return (
        <section className="about">
            <h2 className="about__heading">
                Welcome to the Hidden Estate
                <span className="about__subtitle">
                    Located in Old Las Palmas, Palm Springs
                </span>
            </h2>
            <div className="about__content-wrapper">
                <div className="about__content-image-container">
                    <img
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735402328/Hidden%20Gable%20Estate/home%20page/Gable-Lombard-39_nv5j1q.jpg`}
                        alt="Clark Gable and Carole Lombard's Palm Springs Estate"
                        className="about__image"
                    />
                </div>
                <div className="about__content-text">
                    <p>
                        Clark Gable, famous for his role as Rhett Butler in{" "}
                        <span className="movie_title">
                            "Gone with the Wind"
                        </span>{" "}
                        and his Oscar winning role in{" "}
                        <span className="movie_title">
                            “It happened one night”
                        </span>
                        , occupied this estate with his wife Carole Lombard.
                        Known as their <i>"desert hideaway"</i>, the property
                        boasts many luxurious amenities typical of the era,
                        including sprawling gardens, a large swimming pool, and
                        expansive views of the San Jacinto Mountains.
                    </p>
                    <p>
                        Located just a couple of hours from Los Angeles, Palm
                        Springs offered a convenient escape from the hustle and
                        bustle of Hollywood. It provided a serene retreat where
                        stars could unwind and enjoy a more private lifestyle
                        within the tranquility of the desert.
                    </p>
                </div>
                <div className="about__content-highlight">
                    <p>
                        Transform yourself back in time as though it happened
                        one night, but make it your night in a celebrity Palm
                        Springs Estate.
                    </p>
                </div>
            </div>
            <blockquote className="about__quote">
                <h4 className="about__quote-title">
                    "Frankly darling, you will give a damn."
                </h4>
                <cite className="about__quote-source">
                    - Lauran Piro, GOOD HOUSEKEEPING Oct 2, 2014
                </cite>
                <p>
                    "We love a good pink house, but a rosy-hued home that once
                    belonged to one of Hollywood's dreamiest actors makes us
                    especially giddy. It's like the real-estate equivalent of a
                    strapping gentleman in a pink polo shirt — oddly, it just
                    works.
                </p>
                <p className="about__quote-highlight">
                    <span>Clark Gable</span> and actress{" "}
                    <span>Carole Lombard</span> once called this Spanish
                    Colonial in Palm Springs their home.
                </p>
                <p>
                    And it's rife with perplexing famous-people details, like
                    half a dozen bathrooms, a saltwater pool, and a guest house
                    cutely called a <i>'casita'</i>. But, exposed wooden beams,
                    intricate tilework, and a master bedroom with outdoor access
                    make this house a timeless classic (much like Gable
                    himself)."
                </p>
            </blockquote>
        </section>
    );
};

export default About;
