import { useCarouselContext } from "./CarouselContext";
import { getCarouselAriaLabels } from "./carouselUtils";

/**
 * Carousel Dots Component
 * provides dot indicator navigation for carousel
 */
export const CarouselDots = ({
    position = "bottom", // 'bottom', 'top', 'left', 'right'
    size = "medium", // 'small', 'medium', 'large'
    variant = "filled", // 'filled', 'outlined', 'line'
    showNumbers = false,
}) => {
    const { items, currentIndex, itemsLength, goToSlide } =
        useCarouselContext();

    const ariaLabels = getCarouselAriaLabels(currentIndex, itemsLength);

    if (itemsLength <= 1) return null;

    const containerClass = `carousel-dots carousel-dots--${position} carousel-dots--${size} carousel-dots--${variant}`;

    return (
        <div
            className={containerClass}
            role="tablist"
            aria-label="Carousel slide indicators"
        >
            {items.map((item, index) => {
                const isActive = currentIndex === index;

                return (
                    <button
                        key={item.id}
                        className={`carousel-dots__dot ${isActive ? "carousel-dots__dot--active" : ""}`}
                        onClick={() => goToSlide(index)}
                        aria-label={ariaLabels.slide(index)}
                        role="tab"
                        aria-selected={isActive}
                        tabIndex={isActive ? 0 : -1}
                        type="button"
                    >
                        {showNumbers && (
                            <span
                                className="carousel-dots__number"
                                aria-hidden="true"
                            >
                                {index + 1}
                            </span>
                        )}
                        <span
                            className="carousel-dots__indicator"
                            aria-hidden="true"
                        />
                    </button>
                );
            })}
        </div>
    );
};
