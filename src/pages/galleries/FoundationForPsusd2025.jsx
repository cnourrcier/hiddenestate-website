import ImageGallery from "../../components/common/ImageGallery/ImageGallery";
import { foundationEventGalleryImages } from "../../data/imagesData";
import { Link } from "react-router-dom";
import "./FoundationForPsusd2025.css";

const FoundationForPsusd2025 = () => {
    return (
        <section className="foundation-event-gallery-page">
            <Link to={"/galleries/events"} className="return-link">
                <span className="return-link-arrow">←</span> Go back
            </Link>
            <ImageGallery images={foundationEventGalleryImages} />
        </section>
    );
};

export default FoundationForPsusd2025;
