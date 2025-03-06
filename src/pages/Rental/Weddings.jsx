
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Rental.css';

const Weddings = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  const weddingAccomodationList = [
    { emoji: "💍", name: "Timeless Spanish Architecture – A stunning blend of indoor and outdoor spaces, featuring elegant archways, handcrafted details, and period furnishings." },
    { emoji: "🌿", name: 'Enchanting Outdoor Spaces – Say "I do" in a charming courtyard, lush gardens, or beneath the awe-inspiring Palm Springs mountain views.' },
    { emoji: "👰:", name: "Exclusive Private Casita – A serene retreat for the bride on her wedding day." },
    { emoji: "🏡", name: "Elegant Overnight Accommodations – The estate features five beautifully appointed bedrooms, accommodating up to 10 guests in over 3,300 square feet of luxurious living space." },
  ];

  const weddingLocationList = [
    { emoji: "✨", name: "Centrally located – Just minutes from luxury hotels, fine dining, and world-class entertainment for you and your guests." },
    { emoji: "✨", name: "Iconic Desert Backdrop – Majestic mountain views and a lush, colorful landscape set the stage for breathtaking wedding photography." },
  ];

  const weddingServiceList = [
    { emoji: "🎨", name: "Event Creators & Planners" },
    { emoji: "🍽", name: "Catering & Bar Services" },
    { emoji: "📸", name: "Photography & Videography" }, 
    { emoji: "🎻", name: "Live Music & Entertainment" },
    ];

  return (
    <main className="rental">

      <Helmet>
        <title>Palm Springs Weddings</title>
      </Helmet>
      
      <div className="rental__hero-banner">
        <div 
          className="rental__hero-image"
          style={{ 
            backgroundImage: `url(https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740954186/Hidden%20Gable%20Estate/home%20page/_I1A0391_vwom7z.jpg`,
          }}
        ></div>
      </div>
      
      <div className="rental__content-container">

        <section className="rental__primary-section">

            <div className="rental__header">
              <h1>Weddings at Hidden Gable Estate – A Timeless Palm Springs Celebration</h1>
              <h2><em>Be inspired. Create your perfect wedding at a historic estate.</em></h2>
            </div>
          
          <div className="rental__primary-content-wrapper">
            <div className="rental__list-container">
              <h3 className='red'>A Venue Like No Other</h3>
              <p>
                Hidden Gable Estate blends Spanish Colonial charm, breathtaking mountain views, and lush gardens to create an unforgettable backdrop for your special day. Whether you’re planning an intimate ceremony, a grand reception, or a romantic commitment ceremony, this storied estate offers the perfect setting.
              </p>

              <h3 className='red'>The Perfect Location</h3>
              <ul className="rental__list-with-emoji">
                {weddingLocationList.map((location, index) => (
                  <li key={index} className='rental__list-item-with-emoji'>
                    <span className='emoji'>{location.emoji}</span>
                    <span>{location.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rental__list-container">
              <h3>Luxurious Ammenities & Accomodations</h3>
              <ul className="rental__list-with-emoji">
                {weddingAccomodationList.map((accomodation, index) => (
                  <li key={index} className="rental__list-item-with-emoji">
                    <span className="emoji">{accomodation.emoji}</span>
                    <span>{accomodation.name}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </section>
        
        <section className="rental__secondary-section">
            <div className="rental__secondary-content-wrapper">

              <div className="rental__list-container">
                <h3>Tailored to Your Vision</h3>
                <p>
                  From an intimate gathering to a grand affair, Hidden Gable Estate offers a versatile space for any wedding style. Our team can assist with:
                </p>
                <ul className="rental__list-with-emoji">
                  {weddingServiceList.map((service, index) => (
                    <li key={index} className='rental__list-item-with-emoji'>
                      <span className='emoji'>{service.emoji}</span>
                      {service.name}
                      </li>
                  ))}
                </ul>
              </div>

              <div className='rental__list-container'>
                <h3 className="red">Bring your dream wedding to life at Hidden Gable Estate</h3>
                <button onClick={handleClick} className="rental__booking-button">Contact Us</button>
              </div>

            </div>
        </section>

      </div>
    </main>
  );
};

export default Weddings;