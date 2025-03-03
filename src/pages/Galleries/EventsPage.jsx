import './EventsPage.css';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  return (
    <main className="events-page">

      <Helmet>
        <title>Events Galleries</title>
      </Helmet>
      
      <div className="events__header-container">
        <h1 className="events__header">Custom Events <span className='star'>★</span> Extraordinary Experiences <span className='star'>★</span> Your Brand</h1>
      </div>  
      <section className="top-section">        
        <div className="historic-image-container">
          <img 
              src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736364893/Hidden%20Gable%20Estate/gardens%20page/Cactus_event_-_m_small_lgdphh.jpg`} 
              alt="Garden Tour 1929: Cactus and Succulent Society of America" 
              className='historic-image'
          />
          <h3 className="historic-image-title">Garden Tour 1929</h3>
          <p className="historic-image-description">
            Cactus and Succulant Society of America
          </p>
        </div>
        
        <div className="right-column">
          <div className="event-links">
            <Link to="/contact" className="event-link">Corporate Events</Link>
            <Link to="/contact" className="event-link">Private Events</Link>
            <Link to="/contact" className="event-link">Private Tours</Link>
          </div>
          
          <ul className="events__features-list">
            <li><span className='bullet'></span>Secluded and secure</li>
            <li><span className='bullet'></span>Beautiful mountain views</li>
            <li><span className='bullet'></span>Stunning gardens and courtyard spaces</li>
          </ul>
        </div>
      </section>
      
      <section className="events-showcase">
        
        <div className="event-card">
          <h3 className="event-title">Modernism 2025 Featured Home Tour</h3>
          <div className='event-brochure-container'>
            <img className="brochure-closed" src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740960594/Hidden%20Gable%20Estate/events/modernism-2025-featured-home-tour/magazine-closed-transparentbg_small_us9e9k.png`} alt="Modernism 2025 Featured Home Tour Brochure open" />
            <img className="brochure-open" src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740960594/Hidden%20Gable%20Estate/events/modernism-2025-featured-home-tour/magazine-open-transparentbg_small_s1t5fj.png`} alt="Modernism 2025 Featured Home Tour Brochure open" />
          </div>
          <div className="event-images">
            <img 
              alt="iconic celebrity Nelda Linsk poolside"
              src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740955678/Hidden%20Gable%20Estate/events/modernism-2025-featured-home-tour/pool-side-photo-bright_small_kewlsc.jpg`}
              className="event-image" 
            />
            <img 
              src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740955677/Hidden%20Gable%20Estate/events/modernism-2025-featured-home-tour/lady-in-yellow-with-packard-bright_small_fogi2e.jpg`} 
              alt="Modernism event photo 2" 
              className="event-image" 
            />
          </div>
          <p className="event-description">
            Iconic celebrity Nelda Linsk indulges in poolside gossip at the glamorous Hidden Gable Estate
          </p>
        </div>
      </section>
    </main>
  );
};

export default EventsPage;