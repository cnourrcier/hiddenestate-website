import { Helmet } from "react-helmet-async";
import HeroPreview from "../components/homePage/HeroPreview";
import AboutPreview from "../components/homePage/AboutPreview";
import Highlights from "../components/homePage/Highlights";
import EstateCollage from "../components/homePage/EstateCollage";
import FullWidthImage from "../components/homePage/FullWidthImage";
import WeddingsSection from "../components/homePage/WeddingsSection";
import CustomEventsSection from "../components/homePage/CustomEventsSection";
import FilmPhotoSection from "../components/homePage/FilmPhotoSection";
import LuxuryStaySection from "../components/homePage/LuxuryStaySection";
import Location from "../components/homePage/Location";
import "./HomePage.css";

const HomePreviewPage = () => {
    return (
        <main className="homepage">
            <Helmet key={location.pathname}>
                <title>Homepage Preview</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <HeroPreview />
            <AboutPreview />
            <Highlights />
            <EstateCollage />

            <WeddingsSection />
            <FullWidthImage
                src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1741378878/Hidden%20Gable%20Estate/home%20page/_I1A0391_xn500l.jpg`}
                alt="Vintage convertible parked at the entry gate of Hidden Estate"
            />
            <CustomEventsSection />
            <FilmPhotoSection />
            <LuxuryStaySection />
            <div className="location-div">
                <Location />
            </div>
        </main>
    );
};

export default HomePreviewPage;
