import { Helmet } from "react-helmet-async";
import { useModal } from "../context/ModalContext";
import "./ArchitecturePage.css";

const CLOUDINARY_UPLOAD_URL = `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload`;

// Builds a Cloudinary URL for an asset, optionally resized (width) and
// auto-optimised (format + quality).
const cloudinaryUrl = (asset, width) =>
    width
        ? `${CLOUDINARY_UPLOAD_URL}/f_auto,q_auto,w_${width}/${asset}`
        : `${CLOUDINARY_UPLOAD_URL}/${asset}`;

// srcSet so phones download a small version instead of the 2000px+ original
const cloudinarySrcSet = (asset, widths) =>
    widths.map(width => `${cloudinaryUrl(asset, width)} ${width}w`).join(", ");

const IMAGE_WIDTHS = [800, 1400, 2000];
const FULL_WIDTH_SIZES = "(min-width: 1400px) 1400px, 100vw";

const HERO_ASSET =
    "v1735402995/Hidden%20Gable%20Estate/history%20page/MasterArchitect_xk0htu.jpg";
const INTERIOR_ASSET =
    "v1734719349/Hidden%20Gable%20Estate/home%20page/5734_dy1q44.jpg";

// Career highlights, carried over word-for-word from the Master Architect modal
const CAREER_HIGHLIGHTS = [
    "Swasey's early works included the Ambassador Hotel home of the famous Coconut Grove and Huntington Library, working under Principal Architect Myron Hunt.",
    "He was the chief architect of Lake Arrowhead village and surrounding 50,000 acres.",
    "Architect to the rich and famous, e.g. Lionel Barrymore Home in Beverly Hills in 1925, Judge John F McCarthy home in Los Angeles 1926, and Henry S McKee Mansion 1927",
    "Smith, Stanley W., Building, Los Angeles, CA, 1924 aka Peerless Motor Car Co. in Los Angeles",
    "St. Regis Hotel 1254 w 6th, 1925 and Hotel Constance, Pasadena 1926",
    "Twentieth Century Fox Films Sound Studio, West Los Angeles",
];

// Newspaper coverage from the modal, oldest first. width/height are the
// natural pixel size of each file (reserves space so the page doesn't jump).
const PRESS_CLIPPINGS = [
    {
        asset: "v1737773427/Hidden%20Gable%20Estate/history%20page/Los_Angeles_Evening_Citizen_News_1924_06_25_15_76_small_pm4t4l.png",
        width: 1728,
        height: 716,
        wide: true,
        caption: "Hollywood Daily Citizen, June 25, 1924",
        alt: "Hollywood Daily Citizen, June 25, 1924: front of Section III announcing that Peerless will open its new Hollywood building, with photographs of the interior and exterior.",
    },
    {
        asset: "v1737774605/Hidden%20Gable%20Estate/history%20page/The_Los_Angeles_Times_1925_10_04_108_small_pc5utk.jpg",
        width: 288,
        height: 328,
        caption: "Los Angeles Times, October 4, 1925",
        alt: "Los Angeles Times clipping headlined “Barrymores Build in Beverly Hills”, reporting that McNeal Swasey designed the Lionel Barrymores' new home.",
    },
    {
        asset: "v1737773427/Hidden%20Gable%20Estate/history%20page/The_Los_Angeles_Times_1925_10_12_6_small_ujelwt.jpg",
        width: 864,
        height: 1155,
        caption: "Los Angeles Times, October 12, 1925",
        alt: "Los Angeles Times advertisement for the formal opening of the Hotel St. Regis at 1254 W. Sixth Street, with a drawing of the building.",
    },
    {
        asset: "v1737773426/Hidden%20Gable%20Estate/history%20page/Los_Angeles_Times_1931_April_6_pg_74_small_naa4cp.png",
        width: 384,
        height: 439,
        caption: "Los Angeles Times, April 6, 1931",
        alt: "Los Angeles Times, April 6, 1931, page 74: a sketch and floor plan of a house.",
    },
];

const Squiggle = () => (
    <svg
        className="architecture__squiggle"
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
    </svg>
);

const ArchitecturePage = () => {
    const { openSimpleModal } = useModal();

    return (
        <main className="architecture">
            <Helmet>
                <title>Spanish Colonial Revival Architecture</title>
            </Helmet>

            <figure className="architecture__hero">
                <img
                    src={cloudinaryUrl(HERO_ASSET, 1400)}
                    srcSet={cloudinarySrcSet(HERO_ASSET, IMAGE_WIDTHS)}
                    sizes={FULL_WIDTH_SIZES}
                    width="2657"
                    height="1568"
                    alt="Vintage black-and-white photograph of a Spanish Colonial Revival house under construction, with clay-tile roofs, a tall chimney and a sign naming McNeal Swasey as architect."
                    className="architecture__hero-image"
                />
                <figcaption className="architecture__caption">
                    Under construction &mdash; the sign reads &ldquo;Palm
                    Springs Construction Co., McNeal Swasey, Architect, Geo. M.
                    Holstein Jr., Builder&rdquo;
                </figcaption>
            </figure>

            <section
                className="architecture__intro"
                aria-labelledby="architecture-intro-title"
            >
                <h1 className="architecture__title">
                    Architecture
                    <span className="architecture__subtitle">
                        Spanish Colonial Revival &ndash; Master Architect McNeal
                        Swasey
                    </span>
                </h1>
                <Squiggle />
                <h2
                    id="architecture-intro-title"
                    className="architecture__intro-heading"
                >
                    222 W Chino aka &ldquo;Hidden Estate&rdquo;
                </h2>
                <div className="architecture__intro-text">
                    <p>
                        Key architectural elements were first developed for
                        Peerless building in Los Angeles. It exhibits quality of
                        design and distinctive features; including its varied
                        gable low pitched roofs with clay barrel tiles,
                        asymmetrical fa&ccedil;ade, square tower, casement
                        windows, wrought iron grillwork, and French doors with
                        shutters. Glazed tile used for interior and exterior
                        decoration. Heavy beamed ceilings, recessed windows,
                        thick/heavy walls and arched entry ways.
                    </p>
                    <p>
                        McNeal Swasey applied new technologies significant for
                        the period first implemented with the design of the
                        Hotel Constance. Considered fireproof from its masonry
                        construction and metal shielding of all electrical
                        wires. Reinforced masonry with thick walls provides
                        massive stability and resistance to seismic
                        disturbances. Floor plan with building perfectly
                        oriented to prevent sun exposure to bedroom walls during
                        the desert hot months. McNeal used a cooling technique
                        called thermal massing to prevent heat buildup during
                        the daytime. All these features were designed to keep
                        the house comfortable during desert summer months before
                        air conditioning was available.
                    </p>
                </div>
            </section>

            <figure className="architecture__feature">
                <img
                    src={cloudinaryUrl(INTERIOR_ASSET, 1400)}
                    srcSet={cloudinarySrcSet(INTERIOR_ASSET, IMAGE_WIDTHS)}
                    sizes={FULL_WIDTH_SIZES}
                    width="2160"
                    height="1440"
                    alt="Living room at Hidden Estate with a high, heavy-beamed ceiling, a Spanish-style fireplace, an arched window and French doors."
                    className="architecture__feature-image"
                    loading="lazy"
                />
            </figure>

            <section
                className="architecture__architect"
                aria-labelledby="architecture-architect-title"
            >
                <h2
                    id="architecture-architect-title"
                    className="architecture__section-title"
                >
                    Master Architect McNeal Swasey
                </h2>
                <ul className="architecture__highlights">
                    {CAREER_HIGHLIGHTS.map(highlight => (
                        <li key={highlight} className="architecture__highlight">
                            {highlight}
                        </li>
                    ))}
                </ul>
            </section>

            <section
                className="architecture__press"
                aria-labelledby="architecture-press-title"
            >
                <h2
                    id="architecture-press-title"
                    className="architecture__section-title"
                >
                    In the Press
                </h2>
                <p className="architecture__press-intro">
                    Newspaper coverage of McNeal Swasey&rsquo;s work,
                    1924&ndash;1931. Click any clipping to enlarge.
                </p>
                <div className="architecture__press-grid">
                    {PRESS_CLIPPINGS.map(clipping => {
                        const source = cloudinaryUrl(clipping.asset);

                        return (
                            <figure
                                key={clipping.asset}
                                className={`architecture__clipping${clipping.wide ? " architecture__clipping--wide" : ""}`}
                            >
                                <button
                                    type="button"
                                    className="architecture__clipping-button"
                                    onClick={() =>
                                        openSimpleModal({
                                            source,
                                            alt: clipping.alt,
                                            modalTitle: clipping.caption,
                                        })
                                    }
                                    aria-label={`Enlarge: ${clipping.caption}`}
                                >
                                    <img
                                        src={source}
                                        width={clipping.width}
                                        height={clipping.height}
                                        alt={clipping.alt}
                                        loading="lazy"
                                    />
                                </button>
                                <figcaption className="architecture__caption">
                                    {clipping.caption}
                                </figcaption>
                            </figure>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default ArchitecturePage;
