import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const bookingUrl =
        "https://www.naturalretreats.com/property-detail-page?name=hidden-estate-7351";

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <Link to="/" onClick={scrollToTop}>
                        Home
                    </Link>
                    <Link to="/history" onClick={scrollToTop}>
                        History
                    </Link>
                    <Link to="/gardens" onClick={scrollToTop}>
                        Gardens
                    </Link>
                    <Link to="/galleries/estate" onClick={scrollToTop}>
                        Estate Gallery
                    </Link>
                    <Link to="/galleries/events" onClick={scrollToTop}>
                        Events
                    </Link>
                    <Link to="/media" onClick={scrollToTop}>
                        Media
                    </Link>
                    <Link to="/mission" onClick={scrollToTop}>
                        Mission
                    </Link>
                    <Link to="/contact" onClick={scrollToTop}>
                        Contact
                    </Link>
                    <Link to="/rental/corporateevents" onClick={scrollToTop}>
                        Corporate Events
                    </Link>
                    <Link to="/rental/privateevents" onClick={scrollToTop}>
                        Private Events
                    </Link>
                    <Link to="/rental/weddings" onClick={scrollToTop}>
                        Weddings
                    </Link>
                    <Link
                        to="/rental/luxuryvacationrental"
                        onClick={scrollToTop}
                    >
                        Luxury Vacation Rental
                    </Link>
                    <Link to="/rental/privatetours" onClick={scrollToTop}>
                        Private Tours
                    </Link>
                    <Link to="/rental/dinnerparties" onClick={scrollToTop}>
                        Dinner Parties
                    </Link>
                    <Link to="/rental/filmlocation" onClick={scrollToTop}>
                        Film Location
                    </Link>
                    <Link to="/history/swobdi" onClick={scrollToTop}>
                        Fashion
                    </Link>
                    <Link to="/history/swobdi" onClick={scrollToTop}>
                        Roaring Twenties
                    </Link>
                    <Link
                        to="/history/clark-gable-and-carol-lombard"
                        onClick={scrollToTop}
                    >
                        Classic Hollywood
                    </Link>
                    <Link to="/history/doris-fleeson" onClick={scrollToTop}>
                        WWII
                    </Link>
                    <Link to="/history/dan-kimball" onClick={scrollToTop}>
                        Space Race
                    </Link>
                    <Link to="/history/swobdi" onClick={scrollToTop}>
                        Swobdi
                    </Link>
                    <Link to="/history/dan-kimball" onClick={scrollToTop}>
                        Dan Kimball
                    </Link>
                    <Link
                        to="/history/clark-gable-and-carol-lombard"
                        onClick={scrollToTop}
                    >
                        Clark Gable
                    </Link>
                    <Link
                        to="/history/clark-gable-and-carol-lombard"
                        onClick={scrollToTop}
                    >
                        Carol Lombard
                    </Link>
                    <Link to="/history/doris-fleeson" onClick={scrollToTop}>
                        Doris Fleeson
                    </Link>
                    <Link to="/history/mcneal-swasey" onClick={scrollToTop}>
                        McNeal Swasey
                    </Link>
                    <Link to="/history/shar-cracraft" onClick={scrollToTop}>
                        Shar Cracraft
                    </Link>
                    <Link to="/history" onClick={scrollToTop}>
                        Joel Douglas
                    </Link>
                    <Link to="/history" onClick={scrollToTop}>
                        Bing Crosby
                    </Link>
                    <Link to="/history" onClick={scrollToTop}>
                        Sammy Davis Jr
                    </Link>
                    <Link to="/history" onClick={scrollToTop}>
                        Maurice Chevalier
                    </Link>
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
