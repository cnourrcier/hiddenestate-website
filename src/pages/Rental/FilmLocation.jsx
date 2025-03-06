
import { useNavigate } from 'react-router-dom';
import './Rental.css';

const FilmLocation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  const propertyFeatures = [
    "Entertain important clients",
    "Reward top-performing employees",
    "Launch a new product with style",
    "Host a unique and memorable corporate gathering",
  ];

  const celebrityList = [
    { emoji: "🎭", name: "The Roaring Twenties & Flapper Era"},
    {emoji: "🎩", name: "The Great Gatsby & Classic Hollywood"},
    {emoji: "🃏", name: "Casino Night & Rat Pack Glamour"},
    {emoji: "🖤", name: "Casablanca-Inspired Elegance"},
    {emoji: "🚀", name: "The Space Race & WWII Era"},
    {emoji: "👩 💼", name: "Women Leaders & Influencers"},
  ]

  return (
    <div className="main-container">
      
      <div className="hero-banner">
        <div 
          className="hero-image"
          style={{ 
            backgroundImage: `url(https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740954186/Hidden%20Gable%20Estate/home%20page/_I1A0391_vwom7z.jpg`,
          }}
        ></div>
      </div>
      
      <div className="content-container">
        <div className="corporate__main-section">
            <div className="luxury-rental-header">
                <h1>Corporate Events at Hidden Gable Estate – A Palm Springs Landmark</h1>
                <h2><em>Custom Events • Extraordinary Experiences • Your Brand</em></h2>
            </div>
          
          <div className="content-wrapper">
            <div className="features-container">
              <h3>Elevate your next corporate offsite, retreat, or business event</h3>
              <p>
                Nestled in the historic Old Las Palmas neighborhood, this private Spanish estate offers an inspiring and sophisticated setting for companies looking to:
              </p>
              <ul className="feature-list">
                {propertyFeatures.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
              <p>
                We collaborate with world-class event creators, managers, and caterers to design an unforgettable experience tailored to your brand.
              </p>
            </div>
            
            <div className="celebrity-container">
              <h3>A Historic Setting for Unique Themed Events</h3>
              <p>
                Hidden Gable Estate’s rich Hollywood history and Spanish Colonial architecture set the perfect stage for immersive, themed corporate gatherings:
              </p>
              <ul className="celebrity-list">
                {celebrityList.map((celebrity, index) => (
                  <li key={index} className="celebrity-item">
                    <span className="emoji">{celebrity.emoji}</span>
                    <span className="celebrity-text">{celebrity.name}</span>
                  </li>
                ))}
              </ul>
              <p>
                We collaborate with world-class event creators, managers, and caterers to design an unforgettable experience tailored to your brand.
              </p>
            </div>
          </div>
        </div>
        
        <div className="secondary-section">
          <div className="section-container">
            <div className="activities-wrapper">
              <div className="activities-box">
                <h3>Luxury Amenities for Team Building & Networking</h3>
                <p>
                  Encourage collaboration and relaxation with a variety of engaging activities:
                </p>
                <ul className="activities-list .corporate">
                  <li>Pickleball & Bocce Ball</li>
                  <li>Swimming Pool & Hot Tub</li>
                  <li>Outdoor BBQ & Dining</li>
                </ul>
              </div>
              <div className="location-box">
                <h3 className='red'>Versatile Event Spaces for Any Corporate Occasion</h3>
                <p>
                  Hidden Gable Estate can accommodate 200+ guests across a variety of stunning venues:                </p>
                <p>
                    Just 90 minutes from Los Angeles, Palm Springs offers a perfect blend of mid-century charm and modern luxury. Whether you're exploring trendy boutiques, world-class golf courses, hiking trails, or vibrant nightlife, the city's top attractions are just minutes away:
                </p>
                <ul className="location-list">
                    <li><span className="emoji">🍸</span>Cocktail Receptions</li>
                    <li><span className="emoji">🍽</span>Banquets, Luncheons & Dinners</li>
                    <li><span className="emoji">🎉</span>Corporate Retreats, Team Offsites & Networking Events</li>
                    <li><span className="emoji">🚀</span>Product Launches & Media Events</li>
                    <li><span className="emoji">💼</span>Executive Meetings & Hospitality Gatherings</li>
                    <li><span className="emoji">🎗</span>Fundraisers & Charity Events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
       <div className="booking-section">
          <div className="booking-container">
            <h2 className="booking-title">Book Your Exclusive Stay at Hidden Gable Estate</h2>
            <p className="booking-description">
              Let Hidden Gable Estate provide the perfect balance of sophistication, exclusivity, and inspiration for your next corporate event.
            </p>
            <div className="booking-form">
              <p className="booking-contact-message">
                📩 <strong>Contact us today to reserve your stay!</strong>
              </p>
              <button onClick={handleClick} className="booking-button">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmLocation;