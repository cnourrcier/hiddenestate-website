import { lazy } from "react";

export const MODAL_COMPONENTS = {
    DanKimball: lazy(
        () => import("../components/historyPage/modalPages/DanKimball")
    ),
    Swobdi: lazy(() => import("../components/historyPage/modalPages/Swobdi")),
    GableLombard: lazy(
        () => import("../components/historyPage/modalPages/GableLombard")
    ),
    DorisFleeson: lazy(
        () => import("../components/historyPage/modalPages/DorisFleeson")
    ),
    WarBonds: lazy(
        () => import("../components/historyPage/modalPages/WarBonds")
    ),
    MasterArchitect: lazy(
        () => import("../components/historyPage/modalPages/MasterArchitect")
    ),
    SharCracraft: lazy(
        () => import("../components/historyPage/modalPages/SharCracraft")
    ),
};

// Maps an item's `source` string to a lazy import for bundled (local) images.
// Currently empty: every modal image is hosted on a CDN.
export const IMAGE_MAP = {};
