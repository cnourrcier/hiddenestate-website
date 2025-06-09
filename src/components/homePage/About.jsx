import "./About.css";

const About = () => {
    return (
        <section className="about">
            <h2 className="about__heading">
                Hidden Estate
                <span className="about__subtitle">
                    Your Destination for Unforgettable Events or a Luxury
                    Vacation
                </span>
            </h2>
            <div className="about__content-wrapper">
                <div className="about__content-image-container">
                    <img
                        src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/ee482777-30a3-464e-e287-27a376743a00/public`}
                        alt="Hidden Estate"
                        className="about__image"
                    />
                </div>
                <div className="about__content-text">
                    <p>
                        Hidden Estate is a stunning Spanish Revival estate in
                        the heart of Palm Springs. Steeped in Hollywood history,
                        this secluded and fully gated property features lush
                        botanical gardens, mountain views, private Pickleball
                        Court and a sparkling saltwater pool.
                    </p>
                    <p>
                        Whether you're planning an elegant outdoor wedding, an
                        intimate gathering, or a high-end soirée, Hidden Estate
                        delivers timeless charm and exclusive privacy. Make your
                        next event truly unforgettable at one of Palm Springs'
                        most unique and storied venues.
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
