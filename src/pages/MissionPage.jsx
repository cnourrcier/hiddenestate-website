import { Helmet } from "react-helmet-async";
import "./MissionPage.css";

const MissionPage = () => {
    return (
        <main className="mission">
            <Helmet>
                <title>Historic Preservation</title>
            </Helmet>

            <h1 className="mission__title">Our Mission</h1>

            <p>
                Our Mission is the restoration and preservation of historical
                properties created by master architects for extraordinary
                individuals. Through adaptive reuse, we return these properties
                back to their formal glory while creating a space that is highly
                desirable and economically viable.
            </p>

            <h2>
                <i>Hidden Estate</i>
            </h2>

            <section className="mission__content">
                <img
                    src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734741322/Hidden%20Gable%20Estate/mission%20page/5649_srh49e.jpg`}
                    alt="Restoration property"
                    className="hidden-gable__image"
                />
                <p>
                    Old Las Palmas neighborhood is famous for large celebrity
                    estates hidden behind tall hedges, hence the name "Hidden
                    Estate". Restoration is an on-going process with planned
                    projects during the summer months. We are lucky to have
                    photos from the time the home was completed for guidance.
                    Future plans include restoring the courtyard on the South
                    side, uncovering the original terrazzo floors, and restoring
                    the original tile work in the bathrooms. Yes … under the
                    paint and existing tile is the original tile which was
                    discovered during the 2022 remodel.
                </p>
            </section>

            <section>
                <h2>Nourrcier Family </h2>
                <p>
                    Chuck & Karen Nourrcier - Specializing in restoration and
                    adaptive reuse of Queen Anne, Craftsman and Spanish
                    Architectures.
                </p>
                <p>Long Beach Heritage Preservation Awards: 2020, 2024, 2025</p>
                <p>
                    Landmark and Mills Act: 711 Daisy Ave, 909 Elm Ave, 344 W
                    8th{" "}
                </p>
                <p>Torrey House: 4/23/2018, SG100002319</p>
                <ul>
                    <li>National Register of Historical Places</li>
                    <li>California Register of Historical Resources</li>
                </ul>
            </section>

            <section className="mission__img-grid">
                <div className="mission__grid-item">
                    <img
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734741337/Hidden%20Gable%20Estate/mission%20page/344_W_8th_kivr1w.jpg`}
                        alt="Restoration property"
                    />
                </div>
                <div className="mission__grid-item">
                    <img
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734741452/Hidden%20Gable%20Estate/mission%20page/Los_Angeles_County_Torrey_House_0014_wfuwr1.jpg`}
                        alt="Restoration property"
                    />
                </div>
                <div className="mission__grid-item">
                    <img
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734741335/Hidden%20Gable%20Estate/mission%20page/Burnett_dsdhlz.jpg`}
                        alt="Restoration property"
                    />
                </div>
                <div className="mission__grid-item">
                    <img
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734741336/Hidden%20Gable%20Estate/mission%20page/Elm_ave_d3avwk.jpg`}
                        alt="Restoration property"
                    />
                </div>
            </section>
        </main>
    );
};

export default MissionPage;
