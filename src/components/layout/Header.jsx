import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import "./Header.css";

const widthLimit = 1285;
const bookingUrl =
    "https://www.naturalretreats.com/property-detail-page?name=hidden-estate-7351";

const Header = () => {
    const [eventsMenuDropdown, setEventsMenuDropdown] = useState(false);
    const [estateMenuDropdown, setEstateMenuDropdown] = useState(false);
    const [mobileMenuDropdown, setMobileMenuDropdown] = useState(false);
    const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
    const [mobileEstateOpen, setMobileEstateOpen] = useState(false);
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        mobileMenuDropdown
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
    }, [mobileMenuDropdown]);

    const location = useLocation();
    const isMainPage = location.pathname == "/";
    // const isRentalPage = location.pathname.startsWith('/rental/');

    const getHeaderClass = () => {
        if (mobileMenuDropdown) return "header solid fixed";
        if (isMainPage) return "header transparent";
        // if (isRentalPage) return 'header semitransparent';
        return "header solid";
    };

    function handleDropdownToggle(dropdownSetter, isOpen) {
        return () => dropdownSetter(isOpen);
    }

    function handleClick() {
        setMobileMenuDropdown(prev => !prev);
    }

    function toggleMobileSubmenu(setter) {
        return () => setter(prev => !prev);
    }

    return (
        <header className={getHeaderClass()}>
            <div className="logo-container">
                <Link to="/">
                    <img src={`/img/Blancov2.png`} />
                </Link>
            </div>
            <div className="estate-name">
                <div className="estate-word">Hidden</div>
                <div className="estate-word">Estate</div>
            </div>
            <div className="links-container">
                <div className="header-social-icons">
                    <a
                        href="https://www.facebook.com/share/1Bc7GxCz7L/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header-social-icon"
                        aria-label="Visit our Facebook page"
                        data-umami-event="facebook-button-click"
                        data-umami-event-location="website-top"
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.instagram.com/hiddenestatepalmsprings?igsh=MXNlMmFzdHhmNzJ0Zg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header-social-icon"
                        aria-label="Visit our Instagram page"
                        data-umami-event="instagram-button-click"
                        data-umami-event-location="website-top"
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                </div>
                <a
                    href={bookingUrl}
                    className="header-book-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-umami-event="check-availability-click"
                    data-umami-event-location="website-top"
                >
                    Check Availability
                </a>
                <div
                    className={
                        dimensions.width > widthLimit
                            ? "tabs-container"
                            : "hidden"
                    }
                >
                    <Link to="/palm-springs-weddings" className="tab">
                        Weddings
                    </Link>
                    <div
                        onMouseEnter={handleDropdownToggle(
                            setEventsMenuDropdown,
                            true
                        )}
                        onMouseLeave={handleDropdownToggle(
                            setEventsMenuDropdown,
                            false
                        )}
                        className="dropdown-container"
                    >
                        <div className="tab">
                            <p>Events</p>
                        </div>
                        <div
                            className={`menu-dropdown ${eventsMenuDropdown ? "events-dropdown show" : ""}`}
                        >
                            <ul className="dropdown-list">
                                <li>
                                    <Link to="/private-events" className="tab">
                                        Private Events
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/corporate-events"
                                        className="tab"
                                    >
                                        Corporate Events
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/celebrations" className="tab">
                                        Celebrations
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/nonprofit-charity-events"
                                        className="tab"
                                    >
                                        Nonprofit and Charity Events
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/historic-tours" className="tab">
                                        Historic Tours
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/photo-film-location" className="tab">
                        Photo + Film
                    </Link>
                    <Link to="/luxury-vacation-rental" className="tab">
                        Stay
                    </Link>
                    <div
                        onMouseEnter={handleDropdownToggle(
                            setEstateMenuDropdown,
                            true
                        )}
                        onMouseLeave={handleDropdownToggle(
                            setEstateMenuDropdown,
                            false
                        )}
                        className="dropdown-container"
                    >
                        <div className="tab">
                            <p>The Estate</p>
                        </div>
                        <div
                            className={`menu-dropdown ${estateMenuDropdown ? "estate-dropdown show" : ""}`}
                        >
                            <ul className="dropdown-list">
                                <li>
                                    <Link to="/history" className="tab">
                                        History
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/history" className="tab">
                                        Architecture
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/gardens" className="tab">
                                        Gardens
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/galleries/estate"
                                        className="tab"
                                    >
                                        Gallery
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link to="/inquire" className="tab">
                        Inquire
                    </Link>
                </div>
                <div
                    className={
                        dimensions.width <= widthLimit
                            ? "tabs-container"
                            : "hidden"
                    }
                >
                    <div className="dropdown-container">
                        <div
                            onClick={handleClick}
                            className={
                                mobileMenuDropdown
                                    ? "hidden"
                                    : "hamburger-icon tab"
                            }
                        >
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div
                            onClick={handleClick}
                            className={
                                mobileMenuDropdown ? "close-icon tab" : "hidden"
                            }
                        >
                            <X
                                size={40}
                                strokeWidth={1.3}
                                strokeLinecap="round"
                            />
                        </div>
                        <div
                            className={`menu-dropdown ${mobileMenuDropdown ? "mobile show" : ""}`}
                        >
                            <div
                                onClick={handleClick}
                                className="close-icon tab"
                            >
                                <X
                                    size={40}
                                    strokeWidth={1.3}
                                    strokeLinecap="round"
                                />
                            </div>
                            <ul className="header-links">
                                <li>
                                    <Link
                                        onClick={handleClick}
                                        to="/palm-springs-weddings"
                                        className="tab"
                                    >
                                        Weddings
                                    </Link>
                                </li>
                                <li className="mobile-submenu-container">
                                    <div
                                        onClick={toggleMobileSubmenu(
                                            setMobileEventsOpen
                                        )}
                                        className="tab mobile-submenu-toggle"
                                    >
                                        <span>Events</span>
                                        {mobileEventsOpen ? (
                                            <ChevronUp size={18} />
                                        ) : (
                                            <ChevronDown size={18} />
                                        )}
                                    </div>
                                    <ul
                                        className={`mobile-submenu ${mobileEventsOpen ? "open" : ""}`}
                                    >
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/private-events"
                                                className="tab"
                                            >
                                                Private Events
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/corporate-events"
                                                className="tab"
                                            >
                                                Corporate Events
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/celebrations"
                                                className="tab"
                                            >
                                                Celebrations
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/nonprofit-charity-events"
                                                className="tab"
                                            >
                                                Nonprofit and Charity Events
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/historic-tours"
                                                className="tab"
                                            >
                                                Historic Tours
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link
                                        onClick={handleClick}
                                        to="/photo-film-location"
                                        className="tab"
                                    >
                                        Photo + Film
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={handleClick}
                                        to="/luxury-vacation-rental"
                                        className="tab"
                                    >
                                        Stay
                                    </Link>
                                </li>
                                <li className="mobile-submenu-container">
                                    <div
                                        onClick={toggleMobileSubmenu(
                                            setMobileEstateOpen
                                        )}
                                        className="tab mobile-submenu-toggle"
                                    >
                                        <span>The Estate</span>
                                        {mobileEstateOpen ? (
                                            <ChevronUp size={18} />
                                        ) : (
                                            <ChevronDown size={18} />
                                        )}
                                    </div>
                                    <ul
                                        className={`mobile-submenu ${mobileEstateOpen ? "open" : ""}`}
                                    >
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/history"
                                                className="tab"
                                            >
                                                History
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/history"
                                                className="tab"
                                            >
                                                Architecture
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/gardens"
                                                className="tab"
                                            >
                                                Gardens
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/galleries/estate"
                                                className="tab"
                                            >
                                                Gallery
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link
                                        onClick={handleClick}
                                        to="/inquire"
                                        className="tab"
                                    >
                                        Inquire
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
