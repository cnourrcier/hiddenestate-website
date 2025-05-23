import Carousel from "../common/carousel/Carousel";
import claudeMonetInspiration from "../../assets/claude-monet-inspiration.svg";
import { useModal } from "../../context/ModalContext";
import { homeSliderImages } from "../../data/imagesData";
import "./ImageSection.css";

const ImageSection = () => {
    const { openModal } = useModal();

    return (
        <section className="homepage__image-section">
            <Carousel
                items={homeSliderImages}
                showThumbnails={true}
                className="homepage-carousel"
            />
            <div className="monet-container">
                <h3 className="monet-title">Claude Monet Inspiration</h3>
                <p>(Click image for more)</p>
                <img
                    className="monet-image"
                    src={claudeMonetInspiration}
                    alt="Claude Monet - House Among the Palms"
                    onClick={() => openModal("monet-inspiration")}
                />
                <cite className="monet-quote">
                    “Color is my daylong obsession, joy, and torment”{" "}
                    <span>- Claude Monet</span>
                </cite>
            </div>
        </section>
    );
};

export default ImageSection;
