import Carousel from "../../common/carousel/Carousel";
import { swobdiImages } from "../../../data/imagesData";
import "./Swobdi.css";

const Swobdi = () => {
    return (
        <div className="swobdi">
            <section className="swobdi__text-content">
                <header>
                    <h3>“Roaring Twenties, Liberated Women, and Flappers"</h3>
                    <h4>Winter Residence until 1931</h4>
                </header>
                <ul>
                    <li className="list-item">
                        Mrs Agnes Swobdi is credited with pioneering the Los
                        Angeles Fashion District with her original designs and
                        exclusive imports.
                    </li>
                    <li className="list-item">
                        As an importer, curating her latest collection featured
                        in her many shops, she made numerous trans-Atlantic
                        crossings visiting all of Europe, traveled extensively
                        throughout Asia on the Orient Express and special trips
                        to Japan, Australia and Hawaii.
                    </li>
                    <li className="list-item">
                        Her most favorite places to visit included the ruins of
                        Rome, the temples of Asia, the lagoons of Mandalay, and
                        the pretty gardens of Japan.
                    </li>
                    <li className="list-item">
                        As a couturière, her dresses and hats were worn by
                        Silent Film actresses in the 1920s.
                    </li>
                    <li className="list-item">
                        Many of her fashions were featured in the 1924 film “Try
                        and forget it” staring Bryant Washburn and directed by
                        Cullen Tate.
                    </li>
                    <li className="list-item">
                        Swobdi's parties were legendary, and certainly included
                        rising stars and Hollywood's elite.
                    </li>
                </ul>
            </section>
            <section className="swobdi__carousel-container">
                <p>Click on an image to enlarge</p>
                <Carousel
                    items={swobdiImages}
                    showText={true}
                    className="swobdi-carousel"
                />
            </section>
        </div>
    );
};

export default Swobdi;
