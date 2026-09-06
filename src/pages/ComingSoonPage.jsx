import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./ComingSoonPage.css";

const ComingSoonPage = ({ title }) => {
    return (
        <main className="coming-soon">
            <Helmet>
                <title>{title} | Hidden Estate</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <div className="coming-soon__content">
                <h1 className="coming-soon__heading">{title}</h1>
                <svg
                    className="coming-soon__squiggle"
                    viewBox="0 0 300 20"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path
                        d="M2 12 C 40 4, 70 18, 110 10 S 180 2, 220 12 S 270 18, 298 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                </svg>
                <p className="coming-soon__subtitle">Coming Soon</p>
                <p className="coming-soon__message">
                    We&rsquo;re putting the finishing touches on this page.
                    Please check back soon, or reach out and we&rsquo;ll be
                    happy to help in the meantime.
                </p>
                <Link to="/inquire" className="coming-soon__button">
                    Inquire Now
                </Link>
            </div>
        </main>
    );
};

ComingSoonPage.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ComingSoonPage;
