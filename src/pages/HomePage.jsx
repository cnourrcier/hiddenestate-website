import HeroForTesting from "../components/homePage/HeroForTesting";
import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import ImageCarousel from "../components/gardensPage/ImageCarousel";
import Features from "../components/homePage/Features";
import Reviews from "../components/homePage/Reviews";
import Location from "../components/homePage/Location";
import './HomePage.css';

const images = [
  { id: 1, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734804922/Hidden%20Gable%20Estate/home%20page/5750_y8gi72.jpg`, alt: 'Image 1'},
  {id: 2, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719452/Hidden%20Gable%20Estate/home%20page/5837_g7sld1.jpg`, alt: 'Image 2'},
  {id: 3, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719349/Hidden%20Gable%20Estate/home%20page/5734_dy1q44.jpg`, alt: 'Image 3'},
  {id: 4, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719350/Hidden%20Gable%20Estate/home%20page/5742_mr4ibo.jpg`, alt: 'Image 4'},
  {id: 5, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719454/Hidden%20Gable%20Estate/home%20page/5757_ufhw0g.jpg`, alt: 'Image 5'},
  {id: 6, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719454/Hidden%20Gable%20Estate/home%20page/5757_ufhw0g.jpg`, alt: 'Image 6'},
];

function HomePage() {
  return (
    <>
      {/* <HeroForTesting /> */}
      <Hero />
      <About />
      <section className="image-carousel-section">
      <ImageCarousel 
          images={ images } 
          showThumbnails={ true }
          className='homepage-carousel'
      />
      </section>
      <section className="features-section">
        <Features />
      </section>
      <Reviews />
      <Location />
    </>
  );
}

export default HomePage;
