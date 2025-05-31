import { Helmet } from "react-helmet-async";
import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import Features from "../components/homePage/Features";
import Reviews from "../components/homePage/Reviews";
import Location from "../components/homePage/Location";
import ImageSection from "../components/homePage/ImageSection";
import "./HomePage.css";

function HomePage() {
    return (
        <main className="homepage">
            <Helmet key={location.pathname}>
                <title>Palm Springs Luxury Vacation Rental</title>
            </Helmet>
            <Hero />
            <About />
            <ImageSection />
            <Features />
            <Reviews />
            <Location />
        </main>
    );
}

export default HomePage;
