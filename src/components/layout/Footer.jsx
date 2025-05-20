import { Link } from 'react-router-dom';
import './Footer.css'; 

// import yelpIcon from '../assets/icons/yelp.svg';
// import tripadvisorIcon from '../assets/icons/tripadvisor.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/" onClick={scrollToTop}>Home</Link>
          <Link to="/history" onClick={scrollToTop}>History</Link>
          <Link to="/gardens" onClick={scrollToTop}>Gardens</Link>
          <Link to="/galleries/estate" onClick={scrollToTop}>Estate Gallery</Link>
          <Link to="/galleries/events" onClick={scrollToTop}>Events</Link>
          <Link to="/media" onClick={scrollToTop}>Media</Link>
          <Link to="/mission" onClick={scrollToTop}>Mission</Link>
          <Link to="/contact" onClick={scrollToTop}>Contact</Link>
          <Link to="/rental/corporateevents" onClick={scrollToTop}>Corporate Events</Link>
          <Link to="/rental/privateevents" onClick={scrollToTop}>Private Events</Link>
          <Link to="/rental/weddings" onClick={scrollToTop}>Weddings</Link>
          <Link to="/rental/luxuryvacationrental" onClick={scrollToTop}>Luxury Vacation Rental</Link>
          <Link to="/rental/privatetours" onClick={scrollToTop}>Private Tours</Link>
          <Link to="/rental/dinnerparties" onClick={scrollToTop}>Dinner Parties</Link>
          <Link to="/rental/filmlocation" onClick={scrollToTop}>Film Location</Link>
          <Link to="/history/swobdi" onClick={scrollToTop}>Fashion</Link>
          <Link to="/history/swobdi" onClick={scrollToTop}>Roaring Twenties</Link>
          <Link to="/history/clark-gable-and-carol-lombard" onClick={scrollToTop}>Classic Hollywood</Link>
          <Link to="/history/doris-fleeson" onClick={scrollToTop}>WWII</Link>
          <Link to="/history/dan-kimball" onClick={scrollToTop}>Space Race</Link>
          <Link to="/history/swobdi" onClick={scrollToTop}>Swobdi</Link>
          <Link to="/history/dan-kimball" onClick={scrollToTop}>Dan Kimball</Link>
          <Link to="/history/clark-gable-and-carol-lombard" onClick={scrollToTop}>Clark Gable</Link>
          <Link to="/history/clark-gable-and-carol-lombard" onClick={scrollToTop}>Carol Lombard</Link>
          <Link to="/history/doris-fleeson" onClick={scrollToTop}>Doris Fleeson</Link>
          <Link to="/history/mcneal-swasey" onClick={scrollToTop}>McNeal Swasey</Link>
          <Link to="/history/shar-cracraft" onClick={scrollToTop}>Shar Cracraft</Link>
          <Link to="/history" onClick={scrollToTop}>Joel Douglas</Link>
          <Link to="/history" onClick={scrollToTop}>Bing Crosby</Link>
          <Link to="/history" onClick={scrollToTop}>Sammy Davis Jr</Link>
          <Link to="/history" onClick={scrollToTop}>Maurice Chevalier</Link>
        </div>
        
        <div className="footer-info">
          <h3>Hidden Gable Estate</h3>
          <p>Experience the glamor and history of one of Palm Springs' most treasured landmarks.</p>
          {/* <p>You can find us on</p>
          <div className="social-links">
            <a href="https://yelp.com" target="_blank" rel="noopener noreferrer">
                Yelp
                <img src={yelpIcon} alt="Yelp" className="social-icon" />
            </a>
            <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer">
                TripAdvisor
                <img src={tripadvisorIcon} alt="Tripadvisor" className="social-icon" />
            </a>
          </div> */}
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Copyright © {currentYear} Hidden Gable Estate - All Rights Reserved | City of Palm Springs ID 5045</p>
        <p>Website by DevRise Studio</p>
      </div>
    </footer>
  );
};

export default Footer;