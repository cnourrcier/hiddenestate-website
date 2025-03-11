import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import Carousel from "../components/carousel/Carousel";
import Features from "../components/homePage/Features";
import Reviews from "../components/homePage/Reviews";
import Location from "../components/homePage/Location";
import Modal from "../components/Modal";
import claudeMonetInspiration from '../assets/claude-monet-inspiration.svg';
import ClaudeMonet from "../components/homePage/modalPages/ClaudeMonet";
import { Helmet } from "react-helmet-async";
import './HomePage.css';


// const images = [
//   { id: 1, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734804922/Hidden%20Gable%20Estate/home%20page/5750_y8gi72.jpg`, alt: 'Outdoor cabana seating area'},
//   { id: 2, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719452/Hidden%20Gable%20Estate/home%20page/5837_g7sld1.jpg`, alt: 'Saltwater pool with Outdoor Kitchen'},
//   { id: 3, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719349/Hidden%20Gable%20Estate/home%20page/5734_dy1q44.jpg`, alt: 'Interior living space with fireplace image 1'},
//   { id: 4, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719350/Hidden%20Gable%20Estate/home%20page/5742_mr4ibo.jpg`, alt: 'Interior living space with fireplace image 2'},
//   { id: 5, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719454/Hidden%20Gable%20Estate/home%20page/5757_ufhw0g.jpg`, alt: 'Pool and pickleball court with breathtaking views'},
//   { id: 6, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1737503845/Hidden%20Gable%20Estate/home%20page/0363_fb5ypn.jpg`, alt: 'Outdoor view of casita with palms'},
// ];

const images = [
  { id: 1, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1741378878/Hidden%20Gable%20Estate/home%20page/_I1A0391_xn500l.jpg`, alt: 'Image 1'},
  { id: 2, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734804922/Hidden%20Gable%20Estate/home%20page/5750_y8gi72.jpg`, alt: 'Outdoor cabana seating area'},
  { id: 3, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719452/Hidden%20Gable%20Estate/home%20page/5837_g7sld1.jpg`, alt: 'Saltwater pool with Outdoor Kitchen'},
  { id: 4, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719350/Hidden%20Gable%20Estate/home%20page/5742_mr4ibo.jpg`, alt: 'Interior living space with fireplace image 2'},
];

const monetModalItem = {
  HTMLTitle: "Claude Monet Inspiration",
  modalTitle: "Claude Monet Inspiration",
  slug: "monet-inspiration",
  image: claudeMonetInspiration,
  galleryTitle: ["Claude Monet Inspiration"],
  info: "The estate interior and exterior colors have been meticulously restored as they existed in the twenties. Swobdi, a frequent world traveler, got her inspiration and color pallet choices from Claude Monet's pink home in Giverny (a commune in France). Pink exterior walls with green shutters, yellow crown molding, exterior tile with all Monet's favorite colors, etc. Monet lived in his pink home from 1883 until his death in 1926. Another example of Monet's influence is his painting \"House Among the Palms\" with pink exterior and red tile roof.",
  Component: ClaudeMonet
};
 
function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);

useEffect(() => {
  const path = location.pathname;
  if (path === `/home/${monetModalItem.slug}`) {
    setModalOpen(true);
  } else {
    setModalOpen(false);
  }
}, [location.pathname]);

const handleCloseMonetModal = () => {
  navigate('/');
};

const handleOpenMonetModal = () => {
  navigate(`/home/${monetModalItem.slug}`);
};

return (
  <main className="homepage">

    <Helmet>
      <title>Palm Springs Luxury Vacation Rental</title>
    </Helmet>

    <Hero />
    <About />
    
    <section className="homepage__image-section">
      <Carousel 
        items={ images } 
        showThumbnails={ true }
        className='homepage-carousel'
      />
      <div className="monet-container">
        <h3 className="monet-title">Claude Monet Inspiration</h3>
        <p>(Click image for more)</p>
        <img 
          className='monet-image' 
          src={claudeMonetInspiration} alt="Claude Monet - House Among the Palms" 
          onClick={handleOpenMonetModal}
        />
        <cite className="monet-quote">“Color is my daylong obsession, joy, and torment” <span>- Claude Monet</span></cite>
      </div>
    </section>
    <Features />
    <Reviews />
    <Location />

    {modalOpen && (
      <Modal 
        isOpen={modalOpen}
        onClose={handleCloseMonetModal}
        item={monetModalItem}
      />
    )}
  </main>
);
}

export default HomePage;
