import "./Highlights.css";

const iconProps = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

const MissionIcon = () => (
    <svg {...iconProps}>
        <path d="M14 56V30q0-4 4-4h4V18q0-4 4-4h4V8q0-2 2-2t2 2v6h4q4 0 4 4v8h4q4 0 4 4v26z" />
        <path d="M28 56V44q0-4 4-4t4 4v12" />
        <circle cx="32" cy="20" r="1.75" fill="currentColor" stroke="none" />
        <line x1="52" y1="56" x2="52" y2="40" />
        <path d="M52 40c-4-4-8-2-12-6" />
        <path d="M52 40c-2-6 0-10-4-14" />
        <path d="M52 40c2-6 0-12 4-16" />
        <path d="M52 40c4-4 8-2 10-6" />
    </svg>
);

const CameraIcon = () => (
    <svg {...iconProps}>
        <rect x="14" y="30" width="26" height="17" rx="1.5" />
        <circle cx="21" cy="20" r="6.5" />
        <circle cx="35" cy="20" r="6.5" />
        <circle cx="21" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="35" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <path d="M40 34l10-5v20l-10-5z" />
        <circle cx="20" cy="38.5" r="4" />
        <line x1="26" y1="47" x2="26" y2="54" />
        <line x1="26" y1="54" x2="17" y2="59" />
        <line x1="26" y1="54" x2="35" y2="59" />
        <line x1="26" y1="54" x2="26" y2="59" />
    </svg>
);

const PalmTreeIcon = () => (
    <svg {...iconProps}>
        <path d="M32 58V32" />
        <path d="M32 32c1-9-1-15 3-21" />
        <path d="M32 32c-8-6-6-12-14-16" />
        <path d="M32 32c-8 2-8 8-16 8" />
        <path d="M32 32c8-6 6-12 14-16" />
        <path d="M32 32c8 2 8 8 16 8" />
    </svg>
);

const GateIcon = () => (
    <svg {...iconProps}>
        <circle cx="13" cy="11" r="3.5" />
        <rect x="9.5" y="17" width="7" height="39" />
        <circle cx="51" cy="11" r="3.5" />
        <rect x="47.5" y="17" width="7" height="39" />
        <path d="M20 24l10-4v32l-10-3.5z" />
        <path d="M44 24l-10-4v32l10-3.5z" />
        <circle cx="25" cy="36" r="2.5" />
        <circle cx="39" cy="36" r="2.5" />
    </svg>
);

const ArmchairIcon = () => (
    <svg {...iconProps}>
        <path d="M16 32c0-11 7-18 16-18s16 7 16 18v10H16z" />
        <path d="M16 32v20" />
        <path d="M48 32v20" />
        <rect x="16" y="42" width="32" height="10" />
        <line x1="21" y1="52" x2="19" y2="59" />
        <line x1="43" y1="52" x2="45" y2="59" />
        <line x1="25" y1="52" x2="25" y2="59" />
        <line x1="39" y1="52" x2="39" y2="59" />
    </svg>
);

const HIGHLIGHTS = [
    {
        Icon: MissionIcon,
        label: "Old Las Palmas, Palm Springs",
    },
    {
        Icon: CameraIcon,
        label: "Rich Hollywood History",
    },
    {
        Icon: PalmTreeIcon,
        label: "Historic 1920s Spanish Revival",
    },
    {
        Icon: GateIcon,
        label: "Secluded & Gated",
    },
    {
        Icon: ArmchairIcon,
        label: "Restored with Period Furnishings",
    },
];

const Highlights = () => {
    return (
        <section className="highlights">
            <ul className="highlights__list">
                {HIGHLIGHTS.map(({ Icon, label }) => (
                    <li key={label} className="highlights__item">
                        <span className="highlights__icon">
                            <Icon />
                        </span>
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
