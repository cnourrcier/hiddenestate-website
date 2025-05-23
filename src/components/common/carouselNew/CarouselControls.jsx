import { useCarouselContext } from "./CarouselContext";
import { getThumbnailIndexes, getCarouselAriaLabels } from "./carouselUtils";

/**
 * Combined Carousel Controls Component
 * Handles navigation buttons with thumbnails positioned between them
 * This recreates the original layout structure for backward compatibility
 */
export const CarouselControls = ({
    showThumbnails = false,
    showText = false,
    showDots = false,
    maxThumbnails = 5,
    className = "",
}) => {
    const {
        items,
        currentIndex,
        itemsLength,
        goToPrevious,
        goToNext,
        goToSlide,
        canGoPrevious,
        canGoNext,
    } = useCarouselContext();

    const ariaLabels = getCarouselAriaLabels(currentIndex, itemsLength);
    const thumbnailIndexes = getThumbnailIndexes(
        currentIndex,
        itemsLength,
        maxThumbnails
    );

    if (itemsLength <= 1) return null;

    return (
        <div
            className={`controls-container ${className}`}
            id="carousel-controls"
        >
            {/* Previous Button */}
            <button
                className="nav-btn left"
                onClick={goToPrevious}
                disabled={!canGoPrevious}
                aria-label={ariaLabels.previous}
                type="button"
            >
                <svg
                    aria-hidden="true"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M15 19l-7-7 7-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* Thumbnails Container (between nav buttons) */}
            {showThumbnails && (
                <div
                    className="thumbnails-container"
                    role="tablist"
                    aria-label="Carousel navigation thumbnails"
                >
                    {thumbnailIndexes.map(index => {
                        const item = items[index];
                        const isActive = currentIndex === index;

                        return (
                            <button
                                key={item.id}
                                className={`thumbnail-btn ${isActive ? "active" : ""}`}
                                onClick={() => goToSlide(index)}
                                aria-label={ariaLabels.thumbnail(index)}
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
                                        className="thumbnail-btn-overlay"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Text Container (between nav buttons when no thumbnails) */}
            {showText && !showThumbnails && (
                <div className="text-container">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className={`image-text ${currentIndex === index ? "" : "hidden"}`}
                        >
                            <p>
                                {item.text}{" "}
                                {item.text2 && (
                                    <span className="small-text">
                                        {item.text2}
                                    </span>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* Dots Container (between nav buttons when no thumbnails or text) */}
            {showDots && !showThumbnails && !showText && (
                <div
                    className="reviews__dots"
                    role="tablist"
                    aria-label="Carousel slide indicators"
                >
                    {items.map((item, index) => {
                        const isActive = currentIndex === index;

                        return (
                            <button
                                key={item.id}
                                className={`dot ${isActive ? "active" : ""}`}
                                onClick={() => goToSlide(index)}
                                aria-label={ariaLabels.slide(index)}
                                role="tab"
                                aria-selected={isActive}
                                tabIndex={isActive ? 0 : -1}
                                type="button"
                            />
                        );
                    })}
                </div>
            )}

            {/* Next Button */}
            <button
                className="nav-btn right"
                onClick={goToNext}
                disabled={!canGoNext}
                aria-label={ariaLabels.next}
                type="button"
            >
                <svg
                    aria-hidden="true"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M9 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};
