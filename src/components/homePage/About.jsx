import "./About.css";
import { GableQuote } from "./GableQuote";

const About = () => {
    return (
        <section className="about">
            <h2 className="about__heading">
                Welcome to the{" "}
                <b>
                    <i>Hidden Estate</i>
                </b>
                <span className="about__subtitle">
                    Located in Old Las Palmas, Palm Springs
                </span>
            </h2>
            <div className="about__content-wrapper">
                {/* <div className="about__content-image-container">
                    <img
                        // src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735402328/Hidden%20Gable%20Estate/home%20page/Gable-Lombard-39_nv5j1q.jpg`}
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1748134127/Hidden%20Gable%20Estate/home%20page/0168_y2rep0.jpg`}
                        alt="Clark Gable and Carole Lombard's Palm Springs Estate"
                        className="about__image"
                    />
                </div> */}
                <div className="about__content-text">
                    <p>
                        Rich in celebrity history and often referred to as a{" "}
                        <i>"desert hideaway"</i>, this property boasts many
                        luxurious amenities typical of the era, including
                        sprawling gardens, a large swimming pool, and expansive
                        views of the San Jacinto Mountains.
                    </p>
                    <p>
                        Located just a couple of hours from Los Angeles, Palm
                        Springs offered a convenient escape from the hustle and
                        bustle of Hollywood. It provided a serene retreat where
                        stars could unwind and enjoy a more private lifestyle
                        within the tranquility of the desert.
                    </p>
                </div>
                {/* <div className="about__content-highlight">
                    <p>
                        Transform yourself back in time as though it happened
                        one night, but make it your night in a celebrity Palm
                        Springs Estate.
                    </p>
                </div> */}
            </div>
        </section>
    );
};

export default About;
