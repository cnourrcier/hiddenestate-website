import ImageGallery from "../../components/common/ImageGallery/ImageGallery";
import { foundationEventGalleryImages } from "../../data/imagesData";
import "./FoundationForPsusd2025.css";

const FoundationForPsusd2025 = () => {
    return (
        <section className="foundation-event-gallery-page">
            <ImageGallery images={foundationEventGalleryImages} />
        </section>
    );
};

export default FoundationForPsusd2025;
