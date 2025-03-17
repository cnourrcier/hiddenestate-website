import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const images = [
  { id: 1, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1741378878/Hidden%20Gable%20Estate/home%20page/_I1A0391_xn500l.jpg`, alt: 'Image 1'},
  { id: 2, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734804922/Hidden%20Gable%20Estate/home%20page/5750_y8gi72.jpg`, alt: 'Outdoor cabana seating area'},
  { id: 3, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719452/Hidden%20Gable%20Estate/home%20page/5837_g7sld1.jpg`, alt: 'Saltwater pool with Outdoor Kitchen'},
  { id: 4, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719350/Hidden%20Gable%20Estate/home%20page/5742_mr4ibo.jpg`, alt: 'Interior living space with fireplace image 2'},
];

const modalItems = [
  {
    galleryTitle: ["Claude Monet Inspiration"],
    slug: "monet-inspiration",
    HTMLTitle: "Claude Monet Inspiration",
    modalTitle: "Claude Monet Inspiration",
    image: claudeMonetInspiration,
    Component: ClaudeMonet,
  },
];

const getItemBySlug = (slug) => modalItems.find(item => item.slug === slug);
 
function HomePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (slug) {
      const item = getItemBySlug(slug);
      if (item) {
        setSelectedItem(item);
        setModalOpen(true);
      }
    } else {
      setModalOpen(false);
    }
  }, [slug]);

const handleCloseModal = useCallback(() => {
  navigate('/');
}, [navigate]);

const handleOpenModal = useCallback(() => {
  navigate(`/home/${modalItems[0].slug}`);
}, [navigate]);

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
          onClick={handleOpenModal}
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
        onClose={handleCloseModal}
        item={selectedItem}
      />
    )}
  </main>
);
}

export default HomePage;
