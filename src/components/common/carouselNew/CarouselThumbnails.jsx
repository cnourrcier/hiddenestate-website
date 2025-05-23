import { useCarouselContext } from "./CarouselContext";
import { getCarouselAriaLabels, getThumbnailIndexes } from "./carouselUtils";

/**
 * Carousel Thumbnails Component
 * Displays thumbnail navigation for carousel items
 */
export const CarouselThumbnails = ({
    maxThumbnails = 5,
    position = "bottom", // 'bottom', 'top', 'left', 'right'
    size = "medium", // 'small', 'medium', 'large'
    shape = "rectangle", // 'rectangle', 'square', 'circle'
}) => {
    const { items, currentIndex, itemsLength, goToSlide } =
        useCarouselContext();

    const arialabels = getCarouselAriaLabels(currentIndex, itemsLength);
    const thumbnailIndexes = getThumbnailIndexes(
        currentIndex,
        itemsLength,
        maxThumbnails
    );

    if (itemsLength <= 1) return null;

    const containerClass = `carousel-thumbnails carousel-thumbnails--${position} carousel-thumbnails--${size}`;
    const thumbnailClass = `carousel-thumbnails__item carousel-thumbnails__item--${shape}`;

    return (
        <div
            className={containerClass}
            role="tablist"
            aria-label="Carousel navigation thumbnails"
        >
            {thumbnailIndexes.map(index => {
                const item = items[index];
                const isActive = currentIndex === index;

                return (
                    <button
                        key={item.id}
                        className={`${thumbnailClass} ${isActive ? "carousel-thumbnails__item--active" : ""}`}
                        onClick={() => goToSlide(index)}
                        aria-label={arialabels.thumbnail(index)}
                        role="tab"
                        aria-selected={isActive}
                        tabIndex={isActive ? 0 : -1}
                        type="button"
                    >
                        <img
                            src={item.source}
                            alt={item.alt}
                            className="carousel-thumbnails__image"
                            loading="lazy"
                            draggable={false}
                        />
                        {!isActive && (
                            <div
                                className="carousel-thumbnails__overlay"
                                aria-hidden="true"
                            />
                        )}
                        {isActive && (
                            <div
                                className="carousel-thumbnails__active-indicator"
                                aria-hidden="true"
                            />
                        )}
                    </button>
                );
            })}
        </div>
    );
};
