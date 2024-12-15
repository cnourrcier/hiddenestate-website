import { Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {

    return (
        <>
            <footer className='resort-footer'>
                <div className="footer-content">
                    <p className="manager">Exclusively Managed by Natural Retreats</p>
                    <p className="contact">
                        <Phone className="icon" /> <span>888.451.0156</span>
                    </p>
                    <p className="contact">
                        <Mail className="icon" /> <span>concierge@naturalretreats.com</span>
                    </p>
                    <p className="permit">City of Palm Springs Rental Permit #1039</p>
                    <p>Locations760.com</p>
                    <p>Website by: <a href="https://charlesnourrcier.com" target="_blank">Charles Nourrcier</a></p>
                </div>
            </footer>
        </>
    )
}

export default Footer;