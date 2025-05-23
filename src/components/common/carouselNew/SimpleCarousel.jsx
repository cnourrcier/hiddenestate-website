import { CarouselProvider, Carousel, CarouselControls } from "./index";

/**
 * Simple Carousel Component
 * Provides backward compatibility with the original carousel API
 * while using the new modular system underneath
 */
const SimpleCarousel = ({
    items = [],
    showThumbnails = false,
    showText = false,
    showDots = false,
    showZoom = false,
    className = "",
    ariaLabel,
    autoPlay = false,
    autoPlayInterval = 3000,
    loop = true,
    onSlideChange,
    ...props
}) => {
    const carouselOptions = {
        autoPlay,
        autoPlayInterval,
        loop,
        onSlideChange,
    };

    return (
        <CarouselProvider
            items={items}
            options={carouselOptions}
            className={className}
            ariaLabel={ariaLabel}
        >
            <Carousel showZoom={showZoom} {...props} />

            <CarouselControls
                showThumbnails={showThumbnails}
                showText={showText}
                showDots={showDots}
                className={className}
            />
        </CarouselProvider>
    );
};

export default SimpleCarousel;
