import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();

    const isMainPage = location.pathname == '/';

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
                <Link to="#" className='tab'>Rental</Link>
                <Link to="/gallery" className='tab'>Gallery</Link>
                <Link to="#" className='tab'>Media</Link>
                <Link to="/mission" className='tab'>Our Mission</Link>
                <Link to="/contact" className='tab'>Contact Us</Link>
            </div>
        </header>
    )
}

export default Header;