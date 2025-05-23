import { useCarouselContext } from "./CarouselContext";
import { getCarouselAriaLabels } from "./carouselUtils";

/**
 * Carousel Navigation Component
 * Provides previous/next navigation buttons
 */
export const CarouselNavigation = ({
    showLabels = false,
    position = "sides", // 'sides', 'bottom', 'top
    size = "medium", // 'small', 'medium', 'large'
}) => {
    const {
        currentIndex,
        itemsLength,
        goToPrevious,
        goToNext,
        canGoPrevious,
        canGoNext,
    } = useCarouselContext();

    const ariaLabels = getCarouselAriaLabels(currentIndex, itemsLength);

    if (itemsLength <= 1) return null;

    const buttonClass = `carousel-nav__button carousel-nav__button--${size}`;
    const containerClass = `carousel-nav carousel-nav--${position}`;

    return (
        <div className={containerClass} id="carousel-controls">
            <button
                className={`${buttonClass} carousel-nav__button--previous`}
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
                {showLabels && (
                    <span className="carousel-nav__label">Previous</span>
                )}
            </button>

            <button
                className={`${buttonClass} carousel-nav__button--next`}
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
                {showLabels && (
                    <span className="carousel-nav__label">Next</span>
                )}
            </button>
        </div>
    );
};
