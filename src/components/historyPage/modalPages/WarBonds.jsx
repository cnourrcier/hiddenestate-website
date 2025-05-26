import "./WarBonds.css";

const WarBonds = () => {
    return (
        <div className="war-bonds">
            <section className="war-bonds__img-container">
                <img
                    src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1737777180/Hidden%20Gable%20Estate/history%20page/The_Desert_Sun_1943_03_05_3_small_ltea5p.jpg`}
                    alt="The Desert Sun March 5 1943"
                />
                <p>Desert Sun March 5, 1943</p>
            </section>

            <section className="war-bonds__text-content">
                <h3>War Bonds</h3>
                <h4>Ernest Alschuler's winter home in 1943</h4>
                <ul className="list">
                    <li className="list-item">
                        President Sentinel Radio Company, very active in local
                        Palm Springs community.
                    </li>
                    <li className="list-item">
                        Credited with developing the first portable television.
                    </li>
                </ul>
            </section>

            <section className="war-bonds__img-container">
                <img
                    src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1737777180/Hidden%20Gable%20Estate/history%20page/The_Desert_Sun_1948_12_21_8_small_thlayp.jpg`}
                    alt="The Desert Sun December 21 1948"
                />
                <p>Desert Sun Dec 21, 1948</p>
            </section>
        </div>
    );
};

export default WarBonds;
