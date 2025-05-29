import "./GableQuote.css";

export const GableQuote = () => {
    return (
        <blockquote className="about__quote">
            <h4 className="about__quote-title">
                "Frankly darling, you will give a damn."
            </h4>
            <cite className="about__quote-source">
                - Lauran Piro, GOOD HOUSEKEEPING Oct 2, 2014
            </cite>
            <p>
                "We love a good pink house, but a rosy-hued home that once
                belonged to one of Hollywood's dreamiest actors makes us
                especially giddy. It's like the real-estate equivalent of a
                strapping gentleman in a pink polo shirt — oddly, it just works.
            </p>
            <p className="about__quote-highlight">
                <span>Clark Gable</span> and actress <span>Carole Lombard</span>{" "}
                once called this Spanish Colonial in Palm Springs their home.
            </p>
            <p>
                And it's rife with perplexing famous-people details, like half a
                dozen bathrooms, a saltwater pool, and a guest house cutely
                called a <i>'casita'</i>. But, exposed wooden beams, intricate
                tilework, and a master bedroom with outdoor access make this
                house a timeless classic (much like Gable himself)."
            </p>
        </blockquote>
    );
};
