import { Helmet } from "react-helmet-async";
import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import Features from "../components/homePage/Features";
import Reviews from "../components/homePage/Reviews";
import Location from "../components/homePage/Location";
import ImageSection from "../components/homePage/ImageSection";
import './HomePage.css';

const images = [
  { id: 1, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1741378878/Hidden%20Gable%20Estate/home%20page/_I1A0391_xn500l.jpg`, alt: 'Image 1'},
  { id: 2, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734804922/Hidden%20Gable%20Estate/home%20page/5750_y8gi72.jpg`, alt: 'Outdoor cabana seating area'},
  { id: 3, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719452/Hidden%20Gable%20Estate/home%20page/5837_g7sld1.jpg`, alt: 'Saltwater pool with Outdoor Kitchen'},
  { id: 4, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719350/Hidden%20Gable%20Estate/home%20page/5742_mr4ibo.jpg`, alt: 'Interior living space with fireplace image 2'},
];
 
function HomePage() {

  return (
    <main className="homepage">
      <Helmet>
        <title>Palm Springs Luxury Vacation Rental</title>
      </Helmet>
      <Hero />
      <About />
      <ImageSection images={images} />
      <Features />
      <Reviews />
      <Location />
    </main>
  );
  }

export default HomePage;
