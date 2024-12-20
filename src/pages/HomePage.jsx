import Hero from '../components/Hero';
import About from '../components/About';
import ImageSliderAndFeatures from '../components/ImageSliderAndFeatures';
import Reviews from '../components/Reviews';
import Location from '../components/Location';

function HomePage () {
    return (
        <>  
            <Hero />
            <About />
            <ImageSliderAndFeatures />
            <Reviews />
            <Location />
        </>
    )
}

export default HomePage;