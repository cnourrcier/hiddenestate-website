import { useState, useEffect, useCallback } from "react";
import { BREAKPOINTS } from "../config/breakpoints";

export const useResponsive = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    return {
        windowWidth,
        isMobile: windowWidth <= BREAKPOINTS.mobile,
        isTablet: windowWidth <= BREAKPOINTS.tablet,
        isDesktop: windowWidth > BREAKPOINTS.tablet,
    };
};
