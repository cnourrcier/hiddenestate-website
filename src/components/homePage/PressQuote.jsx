import "./PressQuote.css";

const PressQuote = () => {
    return (
        <blockquote className="press-quote">
            <h4 className="press-quote__title">
                &ldquo;Frankly darling, you will give a damn.&rdquo;
            </h4>
            {/* <svg
                className="press-quote__squiggle"
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="M2 12 C 40 4, 70 18, 110 10 S 180 2, 220 12 S 270 18, 298 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg> */}
            <cite className="press-quote__source">
                - Lauran Piro, GOOD HOUSEKEEPING Oct 2, 2014
            </cite>
            <p>
                &ldquo;We love a good pink house, but a rosy-hued home that once
                belonged to one of Hollywood&rsquo;s dreamiest actors makes us
                especially giddy. It&rsquo;s like the real-estate equivalent of
                a strapping gentleman in a pink polo shirt — oddly, it just
                works.
            </p>
            <p className="press-quote__highlight">
                <span>Clark Gable</span> and actress <span>Carole Lombard</span>{" "}
                once called this Spanish Colonial in Palm Springs their home.
            </p>
            <p>
                And it&rsquo;s rife with perplexing famous-people details, like
                half a dozen bathrooms, a saltwater pool, and a guest house
                cutely called a &lsquo;casita&rsquo;. But, exposed wooden beams,
                intricate tilework, and a master bedroom with outdoor access
                make this house a timeless classic (much like Gable
                himself).&rdquo;
            </p>
        </blockquote>
    );
};

export default PressQuote;
