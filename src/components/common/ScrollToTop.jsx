import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Modal content is opened by appending a slug segment to these base paths
// (see useUrlModal / RoutingService), e.g. "/history" -> "/history/some-slug".
// Treat those as the same page so opening/closing a modal doesn't jump scroll.
const MODAL_BASE_PATHS = ["", "home", "history"];

const getRouteKey = pathname => {
    const firstSegment = pathname.split("/")[1] || "";
    return MODAL_BASE_PATHS.includes(firstSegment) ? firstSegment : pathname;
};

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const previousRouteKey = useRef(getRouteKey(pathname));

    useEffect(() => {
        const routeKey = getRouteKey(pathname);
        if (routeKey !== previousRouteKey.current) {
            window.scrollTo(0, 0);
        }
        previousRouteKey.current = routeKey;
    }, [pathname]);

    return null;
};

export default ScrollToTop;
