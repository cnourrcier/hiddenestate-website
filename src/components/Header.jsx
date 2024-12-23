import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [rentalMenuDropdown, setRentalMenuDropdown] = useState(false);
    const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const location = useLocation();
    const isMainPage = location.pathname == '/';

    function handleMouseEnter() {
        setRentalMenuDropdown(true);
    }

    function handleMouseLeave() {
        setRentalMenuDropdown(false);
    }


    return (
        <header className={isMainPage ? 'header transparent' : 'header solid'}>
            <div className='logo-container'>
                <Link to="/"><img src={`/img/Blanco.png`} /></Link>
            </div>
            <div className='estate-name'>
                <div className="estate-word">Hidden</div>
                <div className="estate-word">Gable</div>
                <div className="estate-word">Estate</div>
            </div>
            <div className={dimensions.width > 1000 ? 'tabs-container' : 'hidden'}>
                <Link to="/" className='tab'>Home</Link>
                <Link to="/history" className='tab'>History</Link> 
                <div 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    className='rental-menu-dropdown-container'
                >
                    <div className='tab'>
                        <p>Rental</p>
                    </div>
                    <div className={`rental-menu-dropdown ${rentalMenuDropdown ? 'show' : ''}`}>
                        <ul>
                            <li><Link to="#" className='tab dropdown-tab'>Corporate Events</Link></li>
                            <li><Link to="#" className='tab dropdown-tab'>Private Events</Link></li>
                            <li><Link to="#" className='tab dropdown-tab'>Weddings</Link></li>
                            <li><Link to="#" className='tab dropdown-tab'>Vacation Rentals</Link></li>
                        </ul>
                    </div>
                </div>

                <Link to="/gallery" className='tab'>Gallery</Link>
                <Link to="#" className='tab'>Media</Link>
                <Link to="/mission" className='tab'>Our Mission</Link>
                <Link to="/contact" className='tab'>Contact Us</Link>
            
            </div>
            <div className={dimensions.width < 1000 ? "mobile-tabs-container" : "hidden"}>
                {/* <div 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    className='rental-menu-dropdown-container'
                >
                    <div className='tab'>
                        <p>Rental</p>
                    </div>
                    <div className={`rental-menu-dropdown ${rentalMenuDropdown ? 'show' : ''}`}>
                        <ul>
                            <li><Link to="#" className='tab dropdown-tab'>Corporate Events</Link></li>
                            <li><Link to="#" className='tab dropdown-tab'>Private Events</Link></li>
                            <li><Link to="#" className='tab dropdown-tab'>Weddings</Link></li>
                            <li><Link to="#" className='tab dropdown-tab'>Vacation Rentals</Link></li>
                        </ul>
                    </div>
                </div> */}
                <div className="hamburger-menu">
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            </div>
        </header>
    )
}

export default Header;