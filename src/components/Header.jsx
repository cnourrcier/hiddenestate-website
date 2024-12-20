import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [rentalMenuDropdown, setRentalMenuDropdown] = useState(false);

    const location = useLocation();
    const isMainPage = location.pathname == '/';

    function handleToggleRentalMenuDropdown() {
        setRentalMenuDropdown(prevState => !prevState);
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
            <div className='tabs-container'>
                <Link to="/" className='tab'>Home</Link>
                <Link to="/history" className='tab'>History</Link> 
                {/* <Link to="#" className='tab'>Rental</Link> */}

                <div className='rental-menu-dropdown-container'>
                        <div onClick={handleToggleRentalMenuDropdown} className='tab'>
                            <p>Rental</p>
                        </div>
                        <div className={`rental-menu-dropdown ${rentalMenuDropdown ? 'show' : ''}`}>
                            <ul>
                                <li onClick={handleToggleRentalMenuDropdown}><Link to="#" className='tab dropdown-tab'>Corporate Events</Link></li>
                                <li onClick={handleToggleRentalMenuDropdown}><Link to="#" className='tab dropdown-tab'>Private Events</Link></li>
                                <li onClick={handleToggleRentalMenuDropdown}><Link to="#" className='tab dropdown-tab'>Weddings</Link></li>
                                <li onClick={handleToggleRentalMenuDropdown}><Link to="#" className='tab dropdown-tab'>Vacation Rentals</Link></li>
                            </ul>
                        </div>
                </div>

                <Link to="/gallery" className='tab'>Gallery</Link>
                <Link to="#" className='tab'>Media</Link>
                <Link to="/mission" className='tab'>Our Mission</Link>
                <Link to="/contact" className='tab'>Contact Us</Link>
            </div>
        </header>
    )
}

export default Header;