import "./FullWidthImage.css";

const FullWidthImage = ({ src, alt = "Hidden Gable Estate" }) => {
    return (
        <section className="full-width-image">
            <img src={src} alt={alt} className="full-width-image__img" />
        </section>
    );
};

export default FullWidthImage;
