
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Rental.css';

const DinnerParties = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  const diningExperienceList = [
    { emoji: "✨", name: "Intimate Gatherings: Host an elegant dinner party for up to 10 guests in the exquisite dining room, with the option to expand into the grand great room." },
    { emoji: "✨", name: "Poolside Elegance: Enjoy a medium-sized dinner party for up to 30 guests at the Pool Cabana and around the shimmering pool." },
    { emoji: "✨", name: "Grand Banquets: Accommodate 200+ guests for a lavish outdoor dinner under the stars." },
  ];

  const diningOptionsList = [
    { emoji: "🍽", name: "World-Class Chefs" },
    { emoji: "🍷", name: "Event Managers" },
    { emoji: "📸", name: "Photographers" },
    { emoji: "🏛", name: "Docents for Private Estate Tours" },
  ]; 

  return (
    <main className="rental">

      <Helmet>
        <title>Palm Springs Enchanting Dinner Parties</title>
      </Helmet>
      
      <div className="rental__hero-banner">
        <div 
          className="rental__hero-image"
          style={{ 
            backgroundImage: `url(https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1741278738/Hidden%20Gable%20Estate/rental/dinnerparty_i8reh7.jpg`,
          }}
        ></div>
      </div>
      
      <div className="rental__content-container">

        <section className="rental__primary-section">

          <div className="rental__header">
              <h1>Enchanting Dinner Experiences at The Hidden Gable Estate</h1>
              <h2><em>"If the walls could talk" … create something magical.</em></h2>
          </div>

          <div className="rental__details">
              <h2 className='rental__title red'>Roaring Twenties Elegance</h2>
              <p>
                For an exclusive and unforgettable dinner party, The Hidden Gable Estate offers a setting like no other. Steeped in Hollywood history, this magnificent estate was designed in the Roaring Twenties by master architect McNeal Swasey for renowned fashion designer “Swobdi.”
              </p>
              <p>
                Guests will dine under original ornate lighting, surrounded by authentic period décor and furnishings, immersing themselves in the glamour of a bygone era.
              </p>
          </div>
          
          <div className="rental__primary-content-wrapper">
            <div className="rental__list-container">
              <h3 className='red'>A Setting Rich in Hollywood Lore</h3>
              <p>
                Hidden Gable Estate has been home to some of Hollywood’s most legendary figures, including Clark Gable and Carole Lombard, Bing and Dixie Crosby, Sammy Davis Jr., Maurice Chevalier, and many others. Once owned by the Douglas family, the estate even features the handcrafted pool table made for Kirk Douglas—a true piece of cinematic history.
              </p>
            </div>
            
            <div className="rental__list-container">
              <h3>Dining Experiences for Every Occasion</h3>
              <ul className="rental__list-with-emoji">
                {diningExperienceList.map((experience, index) => (
                  <li key={index} className="rental__list-item-with-emoji">
                    <span className="emoji">{experience.emoji}</span>
                    <span>{experience.name}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </section>

        <section className="rental__secondary-section">
            <div className="rental__secondary-content-wrapper">

              <div className="rental__list-container">
                <h3>A Tailored Culinary Experience</h3>
                <p>
                  Our team can help craft an extraordinary evening, offering access to:
                </p>
                <ul className="rental__list-with-emoji">
                  {diningOptionsList.map((option, index) => (
                    <li key={index} className='rental__list-item-with-emoji'>
                      <span className='emoji'>{option.emoji}</span>
                      {option.name}
                      </li>
                  ))}
                </ul>
              </div>

              <div className='rental__list-container'>
                <h3 className="red">Curate Your Private Dinner Party</h3>
                <p>
                  Whether you're a history buff, architecture enthusiast, or simply looking for a one-of-a-kind experience, The Hidden Gable Estate promises an unforgettable journey into the heart of Palm Springs’ Golden Age.
                </p>
                <p className="rental__booking-contact-message">
                  📞 <strong>Contact us for per-person rates, docent fees, and to discuss any special requests.</strong>
                </p>
                <button onClick={handleClick} className="rental__booking-button">Contact Us</button>
              </div>

            </div>
        </section>
        
      </div>
    </main>
  );
};

export default DinnerParties;