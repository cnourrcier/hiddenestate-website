import "./Highlights.css";
import oldLasPalmasIcon from "../../assets/old-las-palmas.png";
import richHollywoodHistoryIcon from "../../assets/rich-hollywood-history.png";
import spanishRevivalIcon from "../../assets/spanish-revival.png";
import secludedGatedIcon from "../../assets/secluded-gated.png";
import restoredPeriodFurnishingsIcon from "../../assets/restored-period-furnishings.png";

const HIGHLIGHTS = [
    {
        icon: oldLasPalmasIcon,
        label: "Old Las Palmas, Palm Springs",
    },
    {
        icon: richHollywoodHistoryIcon,
        label: "Rich Hollywood History",
    },
    {
        icon: spanishRevivalIcon,
        label: "Historic 1920s Spanish Revival",
    },
    {
        icon: secludedGatedIcon,
        label: "Secluded & Gated",
    },
    {
        icon: restoredPeriodFurnishingsIcon,
        label: "Restored with Period Furnishings",
    },
];

const Highlights = () => {
    return (
        <section className="highlights">
            <ul className="highlights__list">
                {HIGHLIGHTS.map(({ icon, label }) => (
                    <li key={label} className="highlights__item">
                        <img
                            src={icon}
                            alt=""
                            className="highlights__icon"
                            loading="lazy"
                        />
                        <svg
                            className="highlights__divider"
                            viewBox="0 0 60 10"
                            aria-hidden="true"
                        >
                            <line
                                x1="0"
                                y1="5"
                                x2="60"
                                y2="5"
                                stroke="currentColor"
                                strokeWidth="1"
                            />
                            <circle
                                cx="30"
                                cy="5"
                                r="2.5"
                                fill="currentColor"
                            />
                        </svg>
                        <span className="highlights__label">{label}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Highlights;
