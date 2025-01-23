import { useRef, useState } from 'react';
import axios from 'axios';
import './ContactPage.css';

const ContactPage = () => {
    const form = useRef();
    const [submitStatus, setSubmitStatus] = useState('');

    const sendEmail = async(e) => {
        e.preventDefault();
    
        // Collect form data
        const formData = {
            name: form.current.name.value,
            email: form.current.email.value,
            message: form.current.message.value,
        };

        try {
            // Send email via backend
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/send-email`, formData);
            setSubmitStatus(response.data.message);
            form.current.reset();
        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('Failed to send email. Please try again.');
        }
      };

    return (
        <div className="contact-page">
            <div className="container">
                <h1>Contact Us</h1>

                <div className="contact-content">
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                        {submitStatus && <p>{submitStatus}</p>}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ContactPage;