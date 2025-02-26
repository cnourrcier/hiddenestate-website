import React from 'react';
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
        <h1 className="events__main-header">Custom Events</h1>
        <h2 className="events__subheader">Extraordinary Experiences</h2>
        <h2 className="events__subheader">Your Brand</h2>
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
            Cacus and Succulant Society of America
          </p>
        </div>
        
        <div className="right-column">
          <div className="event-links">
            <Link to="/contact" className="event-link">Corporate Events</Link>
            <Link to="/contact" className="event-link">Private Events</Link>
            <Link to="/contact" className="event-link">Private Tours</Link>
          </div>
          
          <ul className="features-list">
            <li>Secluded and secure</li>
            <li>Beautiful mountain views</li>
            <li>Stunning gardens and courtyard spaces</li>
          </ul>
        </div>
      </section>
      
      <section className="events-showcase">
        
        <div className="event-card">
          <h3 className="event-title">Modernism 2025 Featured Home Tour</h3>
          <div className="event-images">
            <img 
              alt="iconic celebrity Nelda Linsk poolside"
              src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740591827/Hidden%20Gable%20Estate/events/modernism-2025-featured-home-tour/pool-side-photo-small_tad3da.jpg`}
              className="event-image" 
            />
            <img 
              src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740591827/Hidden%20Gable%20Estate/events/modernism-2025-featured-home-tour/lady-in-yellow-with-packard-small_zczeaw.jpg`} 
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