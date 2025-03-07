
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Rental.css';

const FilmLocation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  const filmLocationFeatureList = [
    { feature: "Exclusive & Private", description: "A gated estate ensures a controlled environment, free from unwanted tourists or bystanders." },
    { feature: "Convenient Location", description: "Step Into Old Las Palmas: Imagine a springtime stroll through the neighborhood, where you might have run into Kirk Douglas, Bing Crosby, Clark Gable, or Lucille Ball in their heyday." },
    { feature: "Versatile Spaces", description: "Expansive exterior grounds spanning an acre, ideal for large-scale filming, events, and parties accommodating 200+ guests." },
    { feature: "Authentic Atmosphere", description: "Spanish Colonial Revival architecture, period furnishings, and vintage décor offer an elegant and historically rich setting." },
    { feature: "Breathtaking Backdrops", description: "Lush gardens, mature trees, a large pool with a cabana, and spectacular mountain views create endless filming possibilities." },
    { feature: " Production-Friendly Amenities", description: "A spacious cabana with a bathroom and kitchenette, ample space for lighting and camera setups, and plentiful street parking for cast and crew." },
  ];

  const filmOptionsList = [
    { emoji: "🎬", name: "Film & Television Productions" },
    { emoji: "📸", name: "Photography & Fashion Shoots" },
    { emoji: "🎵", name: "Music Videos" },
    { emoji: "🏡", name: "Architectural & Travel Publications" },
  ];

  return (
    <main className="rental">

      <Helmet>
        <title>Palm Springs Film Location</title>
      </Helmet>
      
      <div className="rental__hero-banner">
        <div 
          className="rental__hero-image"
          style={{ 
            backgroundImage: `url(https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1741378878/Hidden%20Gable%20Estate/home%20page/_I1A0391_xn500l.jpg`,
          }}
        ></div>
      </div>
      
      <div className="rental__content-container">

        <section className="rental__primary-section">

          <div className="rental__header">
              <h1>The Hidden Gable Estate – Palm Springs’ Premier Media Production Venue</h1>
              {/* <h2><em>
                Step back in time and experience the Hollywood glamour and architectural beauty of The Hidden Gable Estate
              </em></h2> */}
              <p>
                Spanish Architecture | Period Furnishings | Lush Gardens | Spectacular Views | Secluded
              </p>
          </div>

          <div className="rental__details">
              <p>
                Nestled in the prestigious Old Las Palmas neighborhood, just minutes from top hotels, entertainment, and dining, The Hidden Gable Estate is a stunning private retreat perfect for all types of visual media productions.
              </p>
          </div>
          
          <div className="rental__primary-content-wrapper">
            <div className="rental__list-container">
              <h3 className='red'>Why Choose Hidden Gable Estate?</h3>
              <ul className="rental__list">
                {filmLocationFeatureList.map((item, index) => (
                  <li key={index} className="rental__list-item">
                    <span><strong>{item.feature}: </strong></span> 
                    <span> {item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rental__list-container">
              <h3>Ideal For:</h3>
              <ul className="rental__list-with-emoji">
                {filmOptionsList.map((option, index) => (
                  <li key={index} className="rental__list-item-with-emoji">
                    <span className="emoji">{option.emoji}</span>
                    <span>{option.name}</span>
                  </li>
                ))}
              </ul>

              <p>
                This private, gated estate with a rich Hollywood history is a one-of-a-kind filming destination. Capture the essence of Old Hollywood glamour, timeless architecture, and the natural beauty of Palm Springs at The Hidden Gable Estate.
              </p>
              <p className="rental__booking-contact-message">
                Please contact us to discuss your unique requirements. 
              </p>
              <button onClick={handleClick} className="rental__booking-button">Contact Us</button>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
};

export default FilmLocation;