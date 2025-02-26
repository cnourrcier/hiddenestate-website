import { Link } from 'react-router-dom';
import './Footer.css'; 

import yelpIcon from '../assets/icons/yelp.svg';
import tripadvisorIcon from '../assets/icons/tripadvisor.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const ScrollToTop = () => {
    window.ScrollTo(0, 0);
  }
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-nav">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/" onClick={ScrollToTop}>Home</Link></li>
            <li><Link to="/history" onClick={ScrollToTop}>History</Link></li>
            <li><Link to="/gardens" onClick={ScrollToTop}>Gardens</Link></li>
            <li><Link to="/galleries/estate" onClick={ScrollToTop}>Estate</Link></li>
            <li><Link to="/galleries/events" onClick={ScrollToTop}>Events</Link></li>
            <li><Link to="/media" onClick={ScrollToTop}>Media</Link></li>
            <li><Link to="/mission" onClick={ScrollToTop}>Mission</Link></li>
            <li><Link to="/contact" onClick={ScrollToTop}>Contact</Link></li>
          </ul>
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