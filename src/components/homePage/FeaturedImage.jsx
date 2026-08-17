import { homeSliderImages } from "../../data/imagesData";
import "./FeaturedImage.css";

const featuredImage = homeSliderImages[0];

const FeaturedImage = () => {
    return (
        <section className="featured-image">
            <img
                src={featuredImage.source}
                alt={featuredImage.alt}
                className="featured-image__img"
            />
        </section>
    );
};

export default FeaturedImage;
