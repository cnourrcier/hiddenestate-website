import { useNavigate } from 'react-router-dom';
import './LuxuryVacationRental.css';

const LuxuryVacationRental = () => {
  const navigate = useNavigate();  
  
  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className="luxury-rental-container">
      <header className="luxury-rental-header">
        <h1>Luxury Vacation Rental at Hidden Gable Estate</h1>
        <h2><em>Pickleball • Mountain Views • Historic Celebrity Estate</em></h2>
        <p className="tagline">"Let's Play Pickleball!"</p>
        <p className="luxury__landscape-features">
          Lush gardens | 100-year-old olive trees | Towering date palms |
          Citrus groves | Dramatic mountain views
        </p>
      </header>

      <section className="experience-glamour">
        <h2>Experience the Glamour of Hollywood's Golden Age</h2>
        <p>
          Nestled in the prestigious <strong>Old Las Palmas</strong> neighborhood, <strong>Hidden
          Gable Estate</strong> is a historic <strong>Spanish Colonial Revival</strong> estate
          offering a one-of-a-kind <strong>luxury vacation rental experience</strong> in Palm
          Springs. Rich in <strong>Hollywood lore and architectural charm</strong>, this
          private <strong>5-bedroom, 6-bathroom retreat</strong> accommodates up to <strong>10
          guests</strong>, making it the ultimate desert escape.
        </p>
        <p>
          Embraced by <strong>breathtaking mountain views</strong>, this secluded, <strong>gated
          estate</strong> is thoughtfully curated with <strong>exquisite period furnishings,
          lush landscaping, and modern amenities</strong>, including a <strong>private
          pickleball court, large saltwater pool, and a charming casita.</strong>
        </p>
      </section>

      <section className="estate-features">
        <h2>Estate Features:</h2>
        <ul className="luxury__features-list">
          <li><span className="emoji">🏡</span> <strong>Accommodates up to 10 guests</strong></li>
          <li><span className="emoji">🛏</span> <strong>5 Bedrooms | 6 Bathrooms</strong></li>
          <li><span className="emoji">📏</span> <strong>3,300 sq-ft of living space on a private 1-acre gated estate</strong></li>
          <li><span className="emoji">📍</span> <strong>Centrally located -- walk to downtown Palm Springs dining & entertainment</strong></li>
          <li><span className="emoji">🌿</span> <strong>Lush gardens, citrus trees & stunning mountain views</strong></li>
          <li><span className="emoji">🏓</span> <strong>Private Pickleball Court & Bocce Ball Area</strong></li>
          <li><span className="emoji">🌊</span> <strong>Expansive Saltwater Pool & Spa</strong></li>
          <li><span className="emoji">🔥</span> <strong>Poolside Cabana with BBQ, Outdoor Kitchen & Firepit</strong></li>
          <li><span className="emoji">🎱</span> <strong>Play on Kirk Douglas's handcrafted pool table</strong></li>
          <li><span className="emoji">🏡</span> <strong>Private Casita -- perfect for added privacy</strong></li>
        </ul>
      </section>

      <section className="storied-past">
        <h2>A Storied Past -- Hollywood's Desert Hideaway</h2>
        <p>
          Designed by <strong>Master Architect McNeal Swasey</strong> for famed fashion
          designer <strong>Swobdi</strong> in the 1920s, <strong>Hidden Gable Estate</strong> has been
          meticulously <strong>restored to maintain its historic charm</strong> while offering
          modern comforts. This estate has been a favorite retreat for
          <strong> Hollywood's biggest icons</strong>, including:
        </p>
        <ul className="celebrity-list">
          <li><span className="emoji">🎬</span> <strong>Clark Gable & Carole Lombard</strong></li>
          <li><span className="emoji">🎤</span> <strong>Bing & Dixie Crosby</strong></li>
          <li><span className="emoji">🎶</span> <strong>Sammy Davis Jr.</strong></li>
          <li><span className="emoji">🎭</span> <strong>Maurice Chevalier</strong></li>
          <li><span className="emoji">🎱</span> <strong>Kirk Douglas (who left behind his personal pool table!)</strong></li>
        </ul>
        <p>
          The estate is even featured on the <strong>Palm Springs Historical Society
          Celebrity Homes Tour</strong>.
        </p>
      </section>

      <section className="outdoor-oasis">
        <h2>Outdoor Oasis -- Your Private Desert Resort</h2>
        <p>
          Step outside to discover a <strong>private paradise</strong> surrounded by <strong>towering
          palms, citrus trees, and breathtaking desert views</strong>. Whether you're
          looking for <strong>adventure or relaxation</strong>, the estate offers something for
          everyone:
        </p>
        <ul className="activities-list">
          <li><span className="check">✔</span> <strong>Take a refreshing dip in the saltwater pool & spa</strong></li>
          <li><span className="check">✔</span> <strong>Host a friendly pickleball match on your private court</strong></li>
          <li><span className="check">✔</span> <strong>Relax in the poolside cabana with a BBQ & outdoor kitchen</strong></li>
          <li><span className="check">✔</span> <strong>Unwind by the firepit under a starry desert sky</strong></li>
          <li><span className="check">✔</span> <strong>Enjoy an alfresco meal surrounded by lush gardens</strong></li>
        </ul>
      </section>

      <section className="explore-palm-springs">
        <h2>Explore Palm Springs -- Steps from the Best Attractions</h2>
        <p>
          Hidden Gable Estate is located in <strong>Old Las Palmas</strong>, often referred to
          as the <strong>"Beverly Hills of Palm Springs"</strong>, home to more <strong>celebrity
          residences</strong> than any other neighborhood. Some of the stars who have
          called this area home include <strong>Leonardo DiCaprio, Goldie Hawn & Kurt
          Russell, Lily Tomlin, Lucille Ball & Desi Arnaz, Elizabeth Taylor,
          Liberace, Debbie Reynolds, Gene Autry</strong>, and many more.
        </p>
        <p>
          Just <strong>90 minutes from Los Angeles</strong>, Palm Springs offers a perfect
          blend of <strong>mid-century charm and modern luxury</strong>. Whether you're
          exploring <strong>trendy boutiques, world-class golf courses, hiking trails,
          or vibrant nightlife</strong>, the city's top attractions are just minutes
          away:
        </p>
        <ul className="attractions-list">
          <li><span className="emoji">🎨</span> <strong>Palm Springs Art Museum</strong></li>
          <li><span className="emoji">🚠</span> <strong>Palm Springs Aerial Tramway</strong></li>
          <li><span className="emoji">🏜</span> <strong>Tahquitz Canyon & Indian Canyons Hiking Trails</strong></li>
          <li><span className="emoji">🛍</span> <strong>Palm Canyon Drive -- Shopping & Dining</strong></li>
          <li><span className="emoji">✈️</span> <strong>Palm Springs Air Museum</strong></li>
        </ul>
      </section>

      <section className="book-your-stay">
        <h2>Book Your Exclusive Stay at Hidden Gable Estate</h2>
        <p>
          Whether you're planning a <strong>family getaway, a retreat with friends, or
          a romantic escape</strong>, this <strong>iconic Hollywood estate</strong> is the ultimate
          destination for <strong>luxury, privacy, and relaxation</strong>.
        </p>
        <p className="contact-cta">
          📩 <strong>Contact us today to reserve your stay!</strong>
        </p>
        <button onClick={handleClick} className="contact-button">Contact us</button>
      </section>
    </div>
  );
};

export default LuxuryVacationRental;