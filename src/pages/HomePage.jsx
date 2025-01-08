import HeroForTesting from "../components/homePage/HeroForTesting";
import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import ImageSliderAndFeatures from "../components/homePage/ImageSliderAndFeatures";
import Reviews from "../components/homePage/Reviews";
import Location from "../components/homePage/Location";

function HomePage() {
  return (
    <>
      <HeroForTesting />
      {/* <Hero /> */}
      <About />
      <ImageSliderAndFeatures />
      <Reviews />
      <Location />
    </>
  );
}

export default HomePage;
