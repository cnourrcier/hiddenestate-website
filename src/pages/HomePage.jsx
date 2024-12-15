import Hero from '../components/Hero';
import About from '../components/About';
import ImageSlider from '../components/ImageSlider';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import Location from '../components/Location';

function HomePage () {
    return (
        <>
            <Hero />
            <About />
            <ImageSlider />
            <Features />
            <Reviews />
            <Location />
        </>
    )
}

export default HomePage;