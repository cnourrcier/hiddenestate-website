import { useCarouselContext } from "./CarouselContext";

/**
 * Carousel Text Component
 * Displays text content associated with carousel items
 */
export const CarouselText = ({
    position = "bottom", // 'bottom', 'top', 'overlay'
    alignment = "center", // 'left', 'center', 'right'
    variant = "default", // 'default', 'minimal', 'detailed'
    showTitle = true,
    showDescription = true,
    showCounter = false,
}) => {
    const { items, currentIndex, itemsLength } = useCarouselContext();

    const currentItem = items[currentIndex];

    if (
        !currentItem ||
        (!currentItem.text && !currentItem.text2 && !currentItem.title)
    ) {
        return null;
    }

    const containerClass = `carousel-text carousel-text--${position} carousel-text--${alignment} carousel-text--${variant}`;

    return (
        <div className={containerClass}>
            {showCounter && (
                <div className="carousel-text__counter" aria-live="polite">
                    <span className="carousel-text__current">
                        {currentIndex + 1}
                    </span>
                    <span className="carousel-text__separator"> / </span>
                    <span className="carousel-text__total">{itemsLength}</span>
                </div>
            )}

            <div className="carousel-text__content">
                {showTitle && currentItem.title && (
                    <h3 className="carousel-text__title">
                        {currentItem.title}
                    </h3>
                )}

                {showDescription && currentItem.text && (
                    <p className="carousel-text__description">
                        {currentItem.text}
                        {currentItem.text2 && (
                            <span className="carousel-text__secondary">
                                {" "}
                                {currentItem.text2}
                            </span>
                        )}
                    </p>
                )}
            </div>
        </div>
    );
};
