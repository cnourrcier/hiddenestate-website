import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const bookingUrl =
        "https://www.naturalretreats.com/property-detail-page?name=hidden-estate-7351";

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/history">History</Link>
                    <Link to="/gardens">Gardens</Link>
                    <Link to="/galleries/estate">Estate Gallery</Link>
                    <Link to="/galleries/events">Events</Link>
                    <Link to="/media">Media</Link>
                    <Link to="/mission">Mission</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/rental/corporateevents">Corporate Events</Link>
                    <Link to="/rental/privateevents">Private Events</Link>
                    <Link to="/rental/weddings">Weddings</Link>
                    <Link to="/rental/privatetours">Private Tours</Link>
                    <Link to="/rental/dinnerparties">Dinner Parties</Link>
                    <Link to="/rental/filmlocation">Film Location</Link>
                    <Link to="/history/swobdi">Fashion</Link>
                    <Link to="/history/swobdi">Roaring Twenties</Link>
                    <Link to="/history/clark-gable-and-carol-lombard">
                        Classic Hollywood
                    </Link>
                    <Link to="/history/doris-fleeson">WWII</Link>
                    <Link to="/history/dan-kimball">Space Race</Link>
                    <Link to="/history/swobdi">Swobdi</Link>
                    <Link to="/history/dan-kimball">Dan Kimball</Link>
                    <Link to="/history/clark-gable-and-carol-lombard">
                        Clark Gable
                    </Link>
                    <Link to="/history/clark-gable-and-carol-lombard">
                        Carol Lombard
                    </Link>
                    <Link to="/history/doris-fleeson">Doris Fleeson</Link>
                    <Link to="/history/mcneal-swasey">McNeal Swasey</Link>
                    <Link to="/history/shar-cracraft">Shar Cracraft</Link>
                    <Link to="/history">Joel Douglas</Link>
                    <Link to="/history">Bing Crosby</Link>
                    <Link to="/history">Sammy Davis Jr</Link>
                    <Link to="/history">Maurice Chevalier</Link>
                </div>

                <div className="footer-info">
                    <h3>Hidden Estate</h3>
                    <p>
                        Experience the glamour and history of one of Palm
                        Springs' most treasured landmarks.
                    </p>
                </div>
                <div className="footer-external-links">
                    <a
                        href={bookingUrl}
                        className="footer-book-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-umami-event="check-availability-click"
                        data-umami-event-location="website-footer"
                    >
                        Check Availability
                    </a>
                    <a
                        href="https://www.facebook.com/share/1Bc7GxCz7L/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Facebook page"
                        data-umami-event="facebook-button-click"
                        data-umami-event-location="website-footer"
                    >
                        <img
                            className="footer-social-icon"
                            src="/icons/facebook.svg"
                            alt="Hidden Estate Facebook page link"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/hiddenestatepalmsprings?igsh=MXNlMmFzdHhmNzJ0Zg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Instagram page"
                        data-umami-event="instagram-button-click"
                        data-umami-event-location="website-footer"
                    >
                        <img
                            className="footer-social-icon"
                            src="/icons/instagram.svg"
                            alt="Hidden Estate Instagram page link"
                        />
                    </a>
                </div>
                <div className="management-info">
                    Exclusively managed by Natural Retreats{" "}
                    <span style={{ fontStyle: "italic" }}>
                        "Alaya Collection"
                    </span>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    Copyright © {currentYear} Hidden Estate - All Rights
                    Reserved | City of Palm Springs ID 068950
                </p>
                <p>Website by DevRise Studio</p>
            </div>
        </footer>
    );
};

export default Footer;
