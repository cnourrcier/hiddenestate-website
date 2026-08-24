import { Helmet } from "react-helmet-async";
import HeroPreview from "../components/homePage/HeroPreview";
import AboutPreview from "../components/homePage/AboutPreview";
import EstateCollage from "../components/homePage/EstateCollage";
import FullWidthImage from "../components/homePage/FullWidthImage";
import WeddingsSection from "../components/homePage/WeddingsSection";
import CustomEventsSection from "../components/homePage/CustomEventsSection";
import CustomEventsBanner from "../components/homePage/CustomEventsBanner";
import FilmPhotoSection from "../components/homePage/FilmPhotoSection";
import LuxuryStaySection from "../components/homePage/LuxuryStaySection";
import LocationPreview from "../components/homePage/LocationPreview";

const HomePreviewPage = () => {
    return (
        <main className="homepage">
            <Helmet key={location.pathname}>
                <title>Homepage Preview</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <HeroPreview />
            <AboutPreview />
            <EstateCollage />

            <WeddingsSection />
            <FullWidthImage
                src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1741378878/Hidden%20Gable%20Estate/home%20page/_I1A0391_xn500l.jpg`}
                alt="Vintage convertible parked at the entry gate of Hidden Estate"
            />
            <CustomEventsBanner />
            <CustomEventsSection />
            <FilmPhotoSection />
            <LuxuryStaySection />
            <LocationPreview />
        </main>
    );
};

export default HomePreviewPage;
