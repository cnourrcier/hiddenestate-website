import { Helmet } from "react-helmet-async";
import Carousel from "../components/common/carousel/Carousel";
import { useModal } from "../context/ModalContext";
import {
    currentGardenImages,
    historicalGardenImages,
} from "../data/imagesData";
import "./GardensPage.css";

const GardensPage = () => {
    const { openSimpleModal } = useModal();

    const openModal = item => {
        openSimpleModal(item);
    };

    return (
        <main className="gardens">
            <Helmet>
                <title>Solitude and Tranquility</title>
            </Helmet>

            <section className="gardens__top-section">
                <div className="gardens__top-image">
                    <img
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736474130/Hidden%20Gable%20Estate/gardens%20page/house_collage_with_cactus_landscape_-_m_small_mlylay.jpg`}
                        alt=""
                    />
                </div>
                <div className="gardens__title-container">
                    <h1 className="gardens__title">Botanical Gardens</h1>
                </div>
                <div className="gardens__list-container">
                    <ul>
                        <li>
                            <b>Palm Trees:</b> More than 30 species native to
                            arid and hotter climates from around the world grace
                            the property. A few are thought to be part of the
                            original landscape.
                        </li>
                        <li>
                            <b>Olive Trees:</b> Heavy producing Manzanilla olive
                            trees that are more than 100 years old.
                        </li>
                        <li>
                            <b>Roses:</b> Ever expanding collection of roses
                            selected for their ability to survive the summer
                            heat.
                        </li>
                        <li>
                            <b>Cactus Motif:</b> The cactus landscape in the
                            Twenties was with specimens collected from Arizona.
                            We are slowly expanding our present-day Cactus
                            Motif.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="gardens__image-slider">
                <Carousel
                    items={currentGardenImages}
                    showThumbnails={true}
                    className="gardens-modern-carousel"
                />
            </section>

            <section className="gardens__middle-content">
                <div id="text-content" className="gardens__text-content">
                    <p>
                        We strive to create colorful and tropical landscapes
                        that support local wildlife. Gardening in Palm Springs
                        has unique challenges due to the extreme environment of
                        the valley in the summer with temperatures exceeding
                        120°F. However, our gardens can be breath-taking during
                        the spring when trees, shrubs, perennials and annuals
                        are outrivaling each other in a riot of colorful blooms.
                    </p>
                    <p>
                        The Cactus and Succulent Society gathered here in 1929
                        because Mrs. Swobdi had created “one of the finest
                        collections of Cactus in the United States”.
                    </p>
                    <p className="click-hint">
                        Click on any photo to enlarge for more detail!
                    </p>
                </div>
                <div className="gardens__showcase-images-container">
                    <img
                        onClick={() =>
                            openModal({
                                source: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736364423/Hidden%20Gable%20Estate/gardens%20page/LosAngelesTimes_1929_April_18_hrnpb8.png`,
                                modalTitle: "",
                            })
                        }
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736364423/Hidden%20Gable%20Estate/gardens%20page/LosAngelesTimes_1929_April_18_hrnpb8.png`}
                        alt=""
                    />
                    <img
                        onClick={() =>
                            openModal({
                                source: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736364893/Hidden%20Gable%20Estate/gardens%20page/Cactus_event_-_m_small_lgdphh.jpg`,
                                modalTitle:
                                    "Swobdi hosting Cactus and Succulent Society of America 1929",
                            })
                        }
                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736364893/Hidden%20Gable%20Estate/gardens%20page/Cactus_event_-_m_small_lgdphh.jpg`}
                        alt=""
                    />
                </div>
            </section>

            <section className="gardens__image-and-text-slider">
                <Carousel
                    items={historicalGardenImages}
                    className="gardens-historic-carousel"
                    showText={true}
                />
            </section>
        </main>
    );
};

export default GardensPage;
