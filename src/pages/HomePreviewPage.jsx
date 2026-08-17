import { Helmet } from "react-helmet-async";
import HeroPreview from "../components/homePage/HeroPreview";
import AboutPreview from "../components/homePage/AboutPreview";
import Highlights from "../components/homePage/Highlights";
import FeaturedImage from "../components/homePage/FeaturedImage";
import WeddingsSection from "../components/homePage/WeddingsSection";
import Features from "../components/homePage/Features";
import Reviews from "../components/homePage/Reviews";
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
            <FeaturedImage />
            <WeddingsSection />
            <div className="location-div">
                <Location />
            </div>
        </main>
    );
};

export default HomePreviewPage;
