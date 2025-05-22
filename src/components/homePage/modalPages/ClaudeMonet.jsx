import claudeMonetInspiration from "../../../assets/claude-monet-inspiration.svg";
import "./ClaudeMonet.css";

const ClaudeMonet = () => {
    return (
        <div className="modal-content">
            <div className="modal-info">
                <img
                    src={claudeMonetInspiration}
                    alt="Claude Monet - House Among the Palms"
                    className="modal-main-image"
                />

                <div className="modal-text">
                    <h2>Claude Monet's Influence on the Hidden Gable Estate</h2>

                    <p>
                        The estate interior and exterior colors have been
                        meticulously restored as they existed in the twenties.
                        Swobdi, a frequent world traveler, got her inspiration
                        and color pallet choices from Claude Monet's pink home
                        in Giverny.
                    </p>

                    <p>
                        Pink exterior walls with green shutters, yellow crown
                        molding, exterior tile with all Monet's favorite colors
                        reflect this influence. Monet lived in his pink home
                        from 1883 until his death in 1926.
                    </p>

                    <p>
                        Another example of Monet's influence is his painting
                        "House Among the Palms" with pink exterior and red tile
                        roof, which bears striking similarities to the Hidden
                        Gable Estate's aesthetic.
                    </p>

                    <blockquote>
                        "Color is my daylong obsession, joy, and torment" -
                        Claude Monet
                    </blockquote>

                    <div className="historical-note">
                        <h3>Historical Connection</h3>
                        <p>
                            This artistic influence represents the cultural
                            exchange between European aesthetics and the
                            developing architectural identity of Palm Springs in
                            the 1920s, when the Hidden Gable Estate was
                            established.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClaudeMonet;
