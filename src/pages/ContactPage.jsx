import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import "./ContactPage.css";

const website = window.location.hostname;

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

    return (
        <main className="contact-page">
            <Helmet>
                <title>Contact - Hidden Estate | Palm Springs</title>
                <meta
                    name="description"
                    content="Contact the historic Hidden Estate in Palm Springs, the former retreat of Clark Gable and Carole Lombard."
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
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
