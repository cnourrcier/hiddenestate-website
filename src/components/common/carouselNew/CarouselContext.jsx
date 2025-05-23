import { createContext, useContext } from "react";
import { useCarousel } from "./useCarousel";

const CarouselContext = createContext(null);

export const useCarouselContext = () => {
    const context = useContext(CarouselContext);

    if (!context) {
        throw new Error(
            "useCarouselContext must be used within a CarouselProvider"
        );
    }

    return context;
};

export const CarouselProvider = ({
    children,
    items = [],
    options = {},
    className = "",
    ariaLabel,
}) => {
    const carouselState = useCarousel(items, options);

    const contextValue = {
        ...carouselState,
        items,
        className,
        ariaLabel: ariaLabel || `Carousel with ${items.length} items`,
    };

    return (
        <CarouselContext.Provider value={contextValue}>
            <div className={`carousel-wrapper ${className}`}>{children}</div>
        </CarouselContext.Provider>
    );
};
