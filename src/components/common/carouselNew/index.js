// Main export file for the modular carousel system

// Core functionality
export { useCarousel } from "./useCarousel";
export { CarouselProvider, useCarouselContext } from "./CarouselContext";

// Components
export { Carousel } from "./Carousel";
export { CarouselNavigation } from "./CarouselNavigation";
export { CarouselThumbnails } from "./CarouselThumbnails";
export { CarouselDots } from "./CarouselDots";
export { CarouselText } from "./CarouselText";

// Combined component for backward compatibility
export { CarouselControls } from "./CarouselControls";

// Utilities
export {
    getThumbnailIndexes,
    getCarouselAriaLabels,
    getCarouselTransform,
} from "./carouselUtils";

// Compound component for backward compatibility and common use cases
export { default as SimpleCarousel } from "./SimpleCarousel";
