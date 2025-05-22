import Carousel from "../../common/carousel/Carousel";
import "./Swobdi.css";

const Swobdi = () => {
    const images = [
        {
            id: 1,
            url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-fashions_j2in6j.jpg`,
            text: `"Julanne Johnson, leading woman for Douglas Fairbanks, has beauty which may well be likened to the most beautiful in art"`,
            text2: `Los Angeles Times 1924`,
            alt: "",
        },
        {
            id: 2,
            url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736874700/Hidden%20Gable%20Estate/history%20page/swobdi-with-glove_hwp2tj.jpg`,
            text: `Ruth Clifford, she was also, for a time, the voice of Walt Disney's Minnie Mouse and Daisy Duck`,
            text2: `Los Angeles Times 1923`,
            alt: "",
        },
        {
            id: 3,
            url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/stranger-within-our-gates_zghaht.jpg`,
            text: `Los Angeles Evening Express 1926`,
            alt: "",
        },
        {
            id: 4,
            url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-feather-hat_stddkw.jpg`,
            text: `Aileen Pringle, Goldwyn Star`,
            text2: `Los Angeles Times 1923`,
            alt: "",
        },
        {
            id: 5,
            url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-chinese-robe_ypeydp.jpg`,
            text: `Mary Astor, she may be best remembered for her performance as Brigid O'Shaughnessy in The Maltese Falcon (1941)`,
            text2: `Los Angeles Times 1923`,
            alt: "",
        },
        {
            id: 6,
            url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736874698/Hidden%20Gable%20Estate/history%20page/swobdi-25-years-in-business_uitt4o.jpg`,
            text: `Mrs Swobdi started as a Millinery Shop in 1901`,
            alt: "",
        },
        {
            id: 7,
            url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/LA-fashion-show_a7ix14.jpg`,
            text: `Los Angeles Herald 1917`,
            alt: "",
        },
        {
            id: 8,
            url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-illustration_du4jwq.jpg`,
            text: `Extracted from one of Mrs Swobdi's advertisements`,
            text2: `Los Angeles Times 1923`,
            alt: "",
        },
        {
            id: 9,
            url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736874700/Hidden%20Gable%20Estate/history%20page/swobdi-on-display-for-your-approval_df1vj1.jpg`,
            text: `Los Angeles Evening Express 1926`,
            alt: "",
        },
        {
            id: 10,
            url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736874699/Hidden%20Gable%20Estate/history%20page/swobdi-large-hat_djrnsn.jpg`,
            text: `Los Angeles Times 1920`,
            alt: "",
        },
        {
            id: 11,
            url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1737419003/Hidden%20Gable%20Estate/history%20page/swobdi_at_house_-_m_sojiro.jpg`,
            text: `Mrs Swobdi in front of her winter home circa 1928`,
            alt: "",
        },
    ];

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
                    items={images}
                    showText={true}
                    className="swobdi-carousel"
                />
            </section>
        </div>
    );
};

export default Swobdi;
