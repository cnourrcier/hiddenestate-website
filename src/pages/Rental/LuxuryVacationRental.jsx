
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './Rental.css';

const LuxuryVacationRental = () => {
  const navigate = useNavigate();
  const galleryRef = useRef(null);

  const handleClick = () => {
    navigate('/contact');
  };

  const handleScrollLeft = () => {
    if (galleryRef.current) {
      const scrollAmount = 370;
      galleryRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollRight = () => {
    if (galleryRef.current) {
      const scrollAmount = 370;
      galleryRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const propertyFeatures = [
    "Accommodates up to 10 guests",
    "5 Bedrooms | 6 Bathrooms",
    "3,300 sq-ft of living space on a private 1-acre gated estate",
    "Centrally located -- walk to downtown Palm Springs dining & entertainment",
    "Lush gardens, citrus trees & stunning mountain views",
    "Private Pickleball Court & Bocce Ball Area",
    "Expansive Saltwater Pool & Spa",
    "Poolside Cabana with BBQ, Outdoor Kitchen & Firepit",
    "Play on Kirk Douglas's handcrafted pool table",
    "Scenic mountain backdrop",
    "Private Casita -- perfect for added privacy",
  ];

  const celebrityList = [
    { emoji: "🎬", name: "Clark Gable & Carole Lombard"},
    {emoji: "🎤", name: "Bing & Dixie Crosby"},
    {emoji: "🎶", name: "Sammy Davis Jr."},
    {emoji: "🎭", name: "Maurice Chevalier"},
    {emoji: "🎱", name: "Kirk Douglas (who left behind his personal pool table!)"},
  ];

  const activityList = [
    "Take a refreshing dip in the saltwater pool & spa",
    "Host a friendly pickleball match on your private court",
    "Relax in the poolside cabana with a BBQ & outdoor kitchen",
    "Unwind by the firepit under a starry desert sky",
    "Enjoy an alfresco meal surrounded by lush gardens",
  ];

  const attractionList = [
    { emoji: "🎨", name: "Palm Springs Art Museum"},
    {emoji: "🚠", name: "Palm Springs Aerial Tramway"},
    {emoji: "🏜", name: "Tahquitz Canyon & Indian Canyons Hiking Trails"},
    {emoji: "🛍", name: "Palm Canyon Drive -- Shopping & Dining"},
    {emoji: "✈️", name: "Palm Springs Air Museum"},
  ];

  const galleryImages = [
    { url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734804922/Hidden%20Gable%20Estate/home%20page/5750_y8gi72.jpg`, alt: 'Outdoor cabana seating area' },
    { url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719454/Hidden%20Gable%20Estate/home%20page/5757_ufhw0g.jpg`, alt: 'Pool and pickleball court with breathtaking views' },
    { url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719350/Hidden%20Gable%20Estate/home%20page/5742_mr4ibo.jpg`, alt: 'Interior living space with fireplace' },
    { url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719452/Hidden%20Gable%20Estate/home%20page/5837_g7sld1.jpg`, alt: 'Saltwater pool with Outdoor Kitchen' },
    { url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740889953/Hidden%20Gable%20Estate/home%20page/5672_ueiwtz.jpg`, alt: 'Kirk Douglas pool table' }
  ];

  return (
    <main className="rental">

      <Helmet>
        <title>Palm Springs Luxury Vacation Rentals</title>
      </Helmet>
      
      <div className="rental__hero-banner">
        <div 
          className="rental__hero-image"
          style={{ 
            backgroundImage: `url(https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734804922/Hidden%20Gable%20Estate/home%20page/5750_y8gi72.jpg)`,
          }}
        ></div>
      </div>
      
      <div className="rental__content-container">

        <section className="rental__primary-section">

            <div className="rental__header">
                <h1>Luxury Vacation Rental at Hidden Gable Estate</h1>
                <h2><em>Dramatic Mountain Views • Historic Celebrity Estate</em></h2>
                <p className="rental__tagline">"Let's Play Pickleball!"</p>
                <p>
                Lush gardens | 100-year-old olive trees | Towering date palms |
                Citrus grove
                </p>
            </div>

            <div className="rental__details">
                <h2 className='rental__title red'>Experience the Glamour of Hollywood's Golden Age</h2>
                <p>
                    Nestled in the prestigious Old Las Palmas neighborhood, Hidden
                    Gable Estate is a historic Spanish Colonial Revival estate
                    offering a one-of-a-kind luxury vacation rental experience in Palm
                    Springs. Rich in Hollywood lore and architectural charm, this
                    private 5-bedroom, 6-bathroom retreat accommodates up to 10
                    guests, making it the ultimate desert escape.
                </p>
                <p>
                    Embraced by breathtaking mountain views, this secluded, gated
                    estate is thoughtfully curated with exquisite period furnishings,
                    lush landscaping, and modern amenities, including a private
                    pickleball court, large saltwater pool, and a charming casita.
                </p>
            </div>

          <h2 className="rental__title">Discover Your Perfect Getaway</h2>
          
          <div className="rental__primary-content-wrapper">
            <div className="rental__list-container">
              <h3 className='red'>Property Features</h3>
              <ul className="rental__list">
                {propertyFeatures.map((feature, index) => (
                  <li key={index} className="rental__list-item">
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rental__list-container">
              <h3>A Storied Past – Hollywood's Desert Hideaway</h3>
              <p>
                Designed by Master Architect McNeal Swasey for famed fashion designer Swobdi in the 1920s, Hidden Gable Estate has been meticulously restored to maintain its historic charm while offering modern comforts. This estate has been a favorite retreat for Hollywood's biggest icons, including:
              </p>
              <ul className="rental__list-with-emoji">
                {celebrityList.map((celebrity, index) => (
                  <li key={index} className="rental__list-item-with-emoji">
                    <span className="emoji">{celebrity.emoji}</span>
                    <span>{celebrity.name}</span>
                  </li>
                ))}
              </ul>
              <p>
                The estate is even featured on the Palm Springs Historical Society Celebrity Homes Tour.
              </p>
            </div>

          </div>

        </section>

        <section className='rental__image-gallery-section'>
          <div className="rental__image-gallery" ref={galleryRef}>
            {galleryImages.map((image, index) => (
              <div key={index} className="rental__gallery-image-container">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="rental__gallery-image"
                />
                <div className="rental__image-overlay">
                  <span className="rental__image-caption">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>

          <div className='rental__gallery-nav-button-container'>
            <button className="rental__gallery-nav-button" onClick={handleScrollLeft}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            <button className="rental__gallery-nav-button" onClick={handleScrollRight}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </section>
        
        <section className="rental__secondary-section">
            <div className="rental__secondary-content-wrapper">

              <div className="rental__list-container">
                <h3>Outdoor Oasis – Your Private Desert Resort</h3>
                <p>
                    Step outside to discover a private paradise surrounded by towering palms, citrus trees, and breathtaking desert views. Whether you're looking for adventure or relaxation, the estate offers something for everyone:
                </p>
                <ul className="rental__list">
                  {activityList.map((activity, index) => (
                    <li key={index} className='rental__list-item'>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rental__list-container">
                <h3 className='red'>Explore Palm Springs – Steps from the Best Attractions</h3>
                <p>
                    Hidden Gable Estate is located in Old Las Palmas, often referred to as the "Beverly Hills of Palm Springs", home to more celebrity residences than any other neighborhood. Some of the stars who have called this area home include Leonardo DiCaprio, Goldie Hawn & Kurt Russell, Lily Tomlin, Lucille Ball & Desi Arnaz, Elizabeth Taylor, Liberace, Debbie Reynolds, Gene Autry, and many more.
                </p>
                <p>
                    Just 90 minutes from Los Angeles, Palm Springs offers a perfect blend of mid-century charm and modern luxury. Whether you're exploring trendy boutiques, world-class golf courses, hiking trails, or vibrant nightlife, the city's top attractions are just minutes away:
                </p>
                <ul className="rental__list-with-emoji">
                  {attractionList.map((attraction, index) => (
                    <li key={index} className='rental__list-item-with-emoji'>
                      <span className='emoji'>{attraction.emoji}</span>
                      {attraction.name}
                      </li>
                  ))}
                </ul>
              </div>

            </div>
        </section>
        
        <section className="rental__booking-section">
          <div className="rental__booking-container">
            <h2 className="rental__booking-title">Book Your Exclusive Stay at Hidden Gable Estate</h2>
            <p className="rental__booking-description">
              Whether you're planning a <strong>family getaway, a retreat with friends, or a romantic escape</strong>, this <strong>iconic Hollywood estate</strong> is the ultimate destination for <strong>luxury, privacy, and relaxation</strong>.
            </p>
            
            <div className="rental__booking-form">
              <p className="rental__booking-contact-message">
                📩 <strong>Contact us today to reserve your stay!</strong>
              </p>
              <button onClick={handleClick} className="rental__booking-button">Contact Us</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LuxuryVacationRental;