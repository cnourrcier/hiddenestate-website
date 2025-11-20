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

export const IMAGE_MAP = {
    claudeMonetInspiration: () =>
        import("../assets/claude-monet-inspiration.svg"),
};
