import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import "./ContactPage.css";

const website = window.location.hostname;
const bookingUrl =
    "https://www.naturalretreats.com/property-detail-page?name=hidden-estate-7351";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        website,
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: null,
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        // Form validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                submitted: false,
                error: "Please fill out all fields",
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({
                submitted: false,
                error: "Please enter a valid email address",
            });
            return;
        }

        setIsLoading(true);

        try {
            // Send email via backend
            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/api/send-email`,
                formData
            );
            console.log("Form submitted:", response.data);

            // Reset form and show success message
            setFormData({
                name: "",
                email: "",
                message: "",
                website,
            });

            setFormStatus({
                submitted: true,
                error: null,
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormStatus({
                    submitted: false,
                    error: null,
                });
            }, 5000);
        } catch (error) {
            console.error("Failed to send email:", error);
            setFormStatus({
                submitted: false,
                error: "Failed to send your message. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleBookingClick = () => {
        window.open(bookingUrl, "_blank", "noopener,noreferrer");
    };

    const handleSocialClick = platform => {
        let url;
        switch (platform) {
            case "facebook":
                url =
                    "https://www.facebook.com/share/1Bc7GxCz7L/?mibextid=wwXIfr";

                break;
            case "instagram":
                url =
                    "https://www.instagram.com/hiddenestatepalmsprings?igsh=MXNlMmFzdHhmNzJ0Zg==";
                break;
            default:
                return;
        }
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <main className="contact-page">
            <Helmet>
                <title>Contact - Hidden Estate | Palm Springs</title>
                <meta
                    name="description"
                    content="Contact the historic Hidden Estate in Palm Springs, the former retreat of Clark Gable and Carole Lombard. Check availability and follow us on social media."
                />
            </Helmet>

            <div className="container">
                <h1>
                    Contact Us
                    <span className="intro">
                        Inquire about the Hidden Estate
                    </span>
                </h1>

                <div className="contact-content">
                    <div className="contact-form">
                        {formStatus.submitted ? (
                            <div className="form-success">
                                <i className="fas fa-check-circle"></i>
                                <p>
                                    Thank you for your message! We'll get back
                                    to you soon about your interest in the
                                    Hidden Estate.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                {formStatus.error && (
                                    <div className="form-error">
                                        <i className="fas fa-exclamation-circle"></i>
                                        <p>{formStatus.error}</p>
                                    </div>
                                )}

                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="What would you like to know about the Hidden Estate?"
                                        rows="6"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="contact-btn"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <i
                                                className="fas fa-spinner fa-spin"
                                                style={{ marginRight: "8px" }}
                                            ></i>
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    <div className="contact-sidebar">
                        <div className="availability-section">
                            <h3>Book Your Stay</h3>
                            <p>
                                Ready to experience the luxury and history of
                                the Hidden Estate? Check availability and make
                                your reservation.
                            </p>
                            <button
                                className="availability-btn"
                                onClick={handleBookingClick}
                                type="button"
                                aria-label="Check availability and book your stay"
                            >
                                <i className="fas fa-calendar-check"></i>
                                Check Availability
                            </button>
                        </div>

                        <div className="social-section">
                            <h3>Follow Us</h3>
                            <p>
                                Stay connected and see the latest from the
                                Hidden Estate.
                            </p>
                            <div className="social-links">
                                <button
                                    className="social-link facebook"
                                    onClick={() =>
                                        handleSocialClick("facebook")
                                    }
                                    type="button"
                                    aria-label="Follow us on Facebook"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button
                                    className="social-link instagram"
                                    onClick={() =>
                                        handleSocialClick("instagram")
                                    }
                                    type="button"
                                    aria-label="Follow us on Instagram"
                                >
                                    <i className="fab fa-instagram"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
