import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [rentalMenuDropdown, setRentalMenuDropdown] = useState(false);
    const [mobileMenuDropdown, setMobileMenuDropdown] = useState(false);
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

  useEffect(() => {
    mobileMenuDropdown ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  }, [mobileMenuDropdown]);

    const location = useLocation();
    const isMainPage = location.pathname == '/';

    function handleMouseEnter() {
        setRentalMenuDropdown(true);
    }

    function handleMouseLeave() {
        setRentalMenuDropdown(false);
    }

    function handleClick() {
        setMobileMenuDropdown(prev => !prev);
    }


    return (
        <header className={isMainPage && !mobileMenuDropdown ? 'header transparent' : isMainPage && mobileMenuDropdown ? 'header solid fixed' : 'header solid'}>
            <div className={!mobileMenuDropdown ? 'logo-container' : 'hidden'}>
                <Link to="/"><img src={`/img/Blancov2.png`} /></Link>
            </div>
            <div className={!mobileMenuDropdown ? 'estate-name' : 'hidden'}>
                <div className="estate-word">Hidden</div>
                <div className="estate-word">Gable</div>
                <div className="estate-word">Estate</div>
            </div>
            <div className={dimensions.width > 1000 || dimensions.height < 500 ? 'tabs-container' : 'hidden'}>
                <Link to="/" className='tab'>Home</Link>
                <Link to="/history" className='tab'>History</Link> 
                <div 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    className='dropdown-container'
                >
                    <div className='tab'>
                        <p>Rental</p>
                    </div>
                    <div className={`menu-dropdown ${rentalMenuDropdown ? 'rental show' : ''}`}>
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
            <div className={dimensions.width < 1000 && dimensions.height > 500 ? "tabs-container" : "hidden"}>
                <div className="dropdown-container">
                    <div 
                        onClick={handleClick}
                        className={mobileMenuDropdown ? "hidden" : "hamburger-icon tab"}
                    >
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                    <div 
                        onClick={handleClick}
                        className={mobileMenuDropdown ? 'close-icon tab' : 'hidden'}
                    >
                        <X size={40} strokeWidth={1.3} strokeLinecap="round" />
                    </div>
                    <div className={`menu-dropdown ${mobileMenuDropdown ? 'mobile show' : ''}`}>
                        <ul>
                            <li><Link onClick={handleClick} to="/" className='tab dropdown-tab'>Home</Link></li>
                            <li><Link onClick={handleClick} to="/history" className='tab dropdown-tab'>History</Link></li>
                            <li><Link onClick={handleClick} to="/" className='tab dropdown-tab'>Rental</Link></li>
                            <li><Link onClick={handleClick} to="/gallery" className='tab dropdown-tab'>Gallery</Link></li>
                            <li><Link onClick={handleClick} to="/" className='tab dropdown-tab'>Media</Link></li>
                            <li><Link onClick={handleClick} to="/mission" className='tab dropdown-tab'>Our Mission</Link></li>
                            <li><Link onClick={handleClick} to="/contact" className='tab dropdown-tab'>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;