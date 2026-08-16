import { Helmet } from "react-helmet-async";
import HeroPreview from "../components/homePage/HeroPreview";
import About from "../components/homePage/About";
import Features from "../components/homePage/Features";
import Reviews from "../components/homePage/Reviews";
import Location from "../components/homePage/Location";
import ImageSection from "../components/homePage/ImageSection";
import "./HomePage.css";

const HomePreviewPage = () => {
    return (
        <main className="homepage">
            <Helmet key={location.pathname}>
                <title>Homepage Preview</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <HeroPreview />
            <About />
            <ImageSection />
            <Features />
            <Reviews />
            <div className="location-div">
                <Location />
            </div>
        </main>
    );
};

export default HomePreviewPage;
