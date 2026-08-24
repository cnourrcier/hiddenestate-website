import { Link } from "react-router-dom";
import "./FilmPhotoSection.css";

const FilmPhotoSection = () => {
    return (
        <section className="film-photo">
            <div className="film-photo__image-wrapper">
                <img
                    src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/b15f97d6-4821-4bb9-3542-ff32be863e00/public`}
                    alt="Historic weathervane and Spanish tile roof detail at Hidden Estate"
                    className="film-photo__image"
                    loading="lazy"
                />
            </div>
            <div className="film-photo__content">
                <h2 className="film-photo__title">
                    Film and Photo Opportunities
                </h2>
                <p className="film-photo__subtitle">
                    Historic architecture and multiple cinematic settings
                </p>
                <div className="film-photo__links">
                    <Link
                        to="/rental/filmlocation"
                        className="film-photo__link"
                    >
                        Film Location
                    </Link>
                    <Link to="/galleries/estate" className="film-photo__link">
                        Architecture
                    </Link>
                    <Link to="/history" className="film-photo__link">
                        History
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FilmPhotoSection;
