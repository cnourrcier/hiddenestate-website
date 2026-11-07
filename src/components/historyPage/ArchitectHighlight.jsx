import { Link } from "react-router-dom";
import "./ArchitectHighlight.css";

const ArchitectHighlight = () => {
    return (
        <section className="master-architect__container">
            <div className="master-architect__text-container">
                <h3>Master Architect McNeal Swasey</h3>
                <p>
                    A Spanish Colonial Revival and one of the oldest homes in
                    Old Las Palmas designed by Master Architect McNeal Swasey
                </p>
            </div>
            <div className="master-architect__img-container">
                <Link to="/architecture">
                    <img
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1735402995/Hidden%20Gable%20Estate/history%20page/MasterArchitect_xk0htu.jpg`}
                        alt="Master Architect McNeal Swasey"
                    />
                </Link>
                <p>(Click image to view more!)</p>
            </div>
        </section>
    );
};

export default ArchitectHighlight;
