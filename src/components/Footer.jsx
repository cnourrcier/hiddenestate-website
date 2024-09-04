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
                </div>
            </footer>
            <footer className='site-footer'>
                <div className='footer-content'>
                    <p className='copywrite'>Copyright 2022 - Clark Gable</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;