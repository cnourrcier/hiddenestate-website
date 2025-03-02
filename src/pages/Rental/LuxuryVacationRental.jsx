
import { useNavigate } from 'react-router-dom';
import './LuxuryVacationRental.css';

const LuxuryVacationRental = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  }

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
  ]

  const galleryImages = [
    { url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734804922/Hidden%20Gable%20Estate/home%20page/5750_y8gi72.jpg`, alt: 'Outdoor cabana seating area' },
    { url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719454/Hidden%20Gable%20Estate/home%20page/5757_ufhw0g.jpg`, alt: 'Pool and pickleball court with breathtaking views' },
    { url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719349/Hidden%20Gable%20Estate/home%20page/5734_dy1q44.jpg`, alt: 'Interior living space with fireplace' },
    { url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719452/Hidden%20Gable%20Estate/home%20page/5837_g7sld1.jpg`, alt: 'Saltwater pool with Outdoor Kitchen' },
    { url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740889953/Hidden%20Gable%20Estate/home%20page/5672_ueiwtz.jpg`, alt: 'Kirk Douglas pool table' }
  ];

  return (
    <div className="main-container">
      
      <div className="hero-banner">
        <div 
          className="hero-image"
          style={{ 
            backgroundImage: `url(https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734804922/Hidden%20Gable%20Estate/home%20page/5750_y8gi72.jpg)`,
          }}
        ></div>
      </div>
      
      <div className="content-container">
        <div className="main-section">
            <div className="luxury-rental-header">
                <h1>Luxury Vacation Rental at Hidden Gable Estate</h1>
                <h2><em>Pickleball • Mountain Views • Historic Celebrity Estate</em></h2>
                <p className="tagline">"Let's Play Pickleball!"</p>
                <p className="luxury__landscape-features">
                Lush gardens | 100-year-old olive trees | Towering date palms |
                Citrus groves | Dramatic mountain views
                </p>
            </div>
            <section className="details-container">
                <h2 className='section-title red'>Experience the Glamour of Hollywood's Golden Age</h2>
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
            </section>

          <h2 className="section-title">Discover Your Perfect Getaway</h2>
          
          <div className="content-wrapper">
            <div className="features-container">
              <h3>Property Features</h3>
              <ul className="feature-list">
                {propertyFeatures.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-number">{index + 1}</span>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="celebrity-container">
              <h3>A Storied Past – Hollywood's Desert Hideaway</h3>
              <p>
                Designed by Master Architect McNeal Swasey for famed fashion designer Swobdi in the 1920s, Hidden Gable Estate has been meticulously restored to maintain its historic charm while offering modern comforts. This estate has been a favorite retreat for Hollywood's biggest icons, including:
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
                The estate is even featured on the Palm Springs Historical Society Celebrity Homes Tour.
              </p>
            </div>
          </div>
        </div>
        
        <div className="image-gallery-divider">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-image-container">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="gallery-image"
              />
              <div className="image-overlay">
                <span className="image-caption">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="secondary-section">
          <div className="section-container">
            <div className="activities-wrapper">
              <div className="activities-box">
                <h3>Outdoor Oasis – Your Private Desert Resort</h3>
                <p>
                    Step outside to discover a private paradise surrounded by towering palms, citrus trees, and breathtaking desert views. Whether you're looking for adventure or relaxation, the estate offers something for everyone:
                </p>
                <ul className="activities-list">
                  <li><span className="check">✔</span> Take a refreshing dip in the saltwater pool & spa</li>
                  <li><span className="check">✔</span> Host a friendly pickleball match on your private court</li>
                  <li><span className="check">✔</span> Relax in the poolside cabana with a BBQ & outdoor kitchen</li>
                  <li><span className="check">✔</span> Unwind by the firepit under a starry desert sky</li>
                  <li><span className="check">✔</span> Enjoy an alfresco meal surrounded by lush gardens</li>
                </ul>
              </div>
              <div className="location-box">
                <h3>Explore Palm Springs – Steps from the Best Attractions</h3>
                <p>
                    Hidden Gable Estate is located in Old Las Palmas, often referred to as the "Beverly Hills of Palm Springs", home to more celebrity residences than any other neighborhood. Some of the stars who have called this area home include Leonardo DiCaprio, Goldie Hawn & Kurt Russell, Lily Tomlin, Lucille Ball & Desi Arnaz, Elizabeth Taylor, Liberace, Debbie Reynolds, Gene Autry, and many more.
                </p>
                <p>
                    Just 90 minutes from Los Angeles, Palm Springs offers a perfect blend of mid-century charm and modern luxury. Whether you're exploring trendy boutiques, world-class golf courses, hiking trails, or vibrant nightlife, the city's top attractions are just minutes away:
                </p>
                <ul className="location-list">
                    <li><span className="emoji">🎨</span> <strong>Palm Springs Art Museum</strong></li>
                    <li><span className="emoji">🚠</span> <strong>Palm Springs Aerial Tramway</strong></li>
                    <li><span className="emoji">🏜</span> <strong>Tahquitz Canyon & Indian Canyons Hiking Trails</strong></li>
                    <li><span className="emoji">🛍</span> <strong>Palm Canyon Drive -- Shopping & Dining</strong></li>
                    <li><span className="emoji">✈️</span> <strong>Palm Springs Air Museum</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
       <div className="booking-section">
          <div className="booking-container">
            <h2 className="booking-title">Book Your Exclusive Stay at Hidden Gable Estate</h2>
            <p className="booking-description">
              Whether you're planning a <strong>family getaway, a retreat with friends, or a romantic escape</strong>, this <strong>iconic Hollywood estate</strong> is the ultimate destination for <strong>luxury, privacy, and relaxation</strong>.
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

export default LuxuryVacationRental;