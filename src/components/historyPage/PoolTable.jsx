import { memo } from "react";
import "./PoolTable.css";

const PoolTable = () => {
    const imageSrc = `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/eea86cc9-c1e4-450d-acd6-25ccc43af800/public`;

    return (
        <section
            className="pool-table"
            aria-labelledby="pool-table-section-title"
        >
            <div className="pool-table__flex-container">
                <div className="pool-table__image-section">
                    <div className="pool-table__image-container">
                        <img
                            src={imageSrc}
                            alt="Historic pool table from Kirk Douglas's home on Via Lola"
                            loading="lazy"
                        />
                    </div>
                    <p className="pool-table__craftsman">
                        <strong>Handcrafted for Kirk Douglas by Adler</strong>
                    </p>
                </div>
                <div className="pool-table__content-container">
                    <div className="pool-table__text-container">
                        <div className="pool-table__text-title">
                            <h3 id="pool-table-section-title">
                                A Piece of Hollywood History
                            </h3>
                        </div>
                        <blockquote className="pool-table__quote">
                            "If pool tables could talk, the one from my dad's
                            home on Via Lola would tell some incredible stories.
                            Everyone from politicians to movie stars has played
                            on it — a true piece of Hollywood history."
                        </blockquote>
                        <p className="pool-table__attribution">
                            — <em>Joel Douglas</em>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(PoolTable);
