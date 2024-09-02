import './Header.css';

const Header = () => {

    return (
        <header>
            <div className='logo-container'>
                <a href="#"><img src={`/img/logo.png`} /></a>
            </div>
            <div className='tabs-container'>
                <a href="#" className='tab'>History</a>
                <a href="#" className='tab'>Book Now</a>
            </div>
        </header>
    )
}

export default Header;