import { Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {

    return (
        <>
            <footer className='resort-footer'>
                <div className="footer-content">
                    <div className='footer-group'>
                        <p className="manager">Exclusively Managed by Natural Retreats</p>
                        <p className="contact">
                            <Phone className="icon" /> <span>888.451.0156</span>
                        </p>
                        <p className="contact">
                            <Mail className="icon" /> <span>concierge@naturalretreats.com</span>
                        </p>
                    </div>
                    <div className='footer-group'>
                        <p className="permit">City of Palm Springs Rental Permit #1039</p>
                        <p>Locations760.com</p>
                    </div>
                    <div className='footer-group'>
                        <p className='web-designer'>Website by <a href="https://charlesnourrcier.com" target="_blank">DevRise Studio</a></p>
                        <p className='contact'>
                            <Phone className="icon" /> <span>337.496.7870</span>
                        </p>
                        <p className="contact">
                            <Mail className="icon" /> <span>contact@devrisestudio.com</span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;