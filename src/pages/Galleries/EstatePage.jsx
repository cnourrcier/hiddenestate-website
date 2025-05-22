import { Helmet } from "react-helmet-async";
import ImageGallery from "../../components/common/ImageGallery/ImageGallery";
import "./EstatePage.css";

const EstatePage = () => {
    return (
        <>
            <Helmet>
                <title>Estate Gallery</title>
            </Helmet>

            <main className="estate-page">
                <ImageGallery />
            </main>
        </>
    );
};

export default EstatePage;
