import { Helmet } from "react-helmet-async";
import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import EstateCollage from "../components/homePage/EstateCollage";
import FullWidthImage from "../components/homePage/FullWidthImage";
import WeddingsSection from "../components/homePage/WeddingsSection";
import CustomEventsSection from "../components/homePage/CustomEventsSection";
import CustomEventsBanner from "../components/homePage/CustomEventsBanner";
import FilmPhotoSection from "../components/homePage/FilmPhotoSection";
import LuxuryStaySection from "../components/homePage/LuxuryStaySection";
import Location from "../components/homePage/Location";

const HomePage = () => {
    return (
        <main className="homepage">
            <Helmet key={location.pathname}>
                <title>Palm Springs Luxury Vacation Rental</title>
            </Helmet>
            <Hero />
            <About />
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
            <Location />
        </main>
    );
};

export default HomePage;
