import "./FullWidthImage.css";

const FullWidthImage = ({ src, alt = "Hidden Estate" }) => {
    return (
        <section className="full-width-image">
            <img
                src={src}
                alt={alt}
                className="full-width-image__img"
                loading="lazy"
            />
        </section>
    );
};

export default FullWidthImage;
