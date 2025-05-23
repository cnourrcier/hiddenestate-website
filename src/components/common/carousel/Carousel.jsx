import { useState } from "react";
import CarouselControls from "./CarouselControls";
import "./Carousel.css";

const Carousel = ({
    items,
    showThumbnails = false,
    showText = false,
    className = "",
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [clicked, setClicked] = useState(false);

    function showPrev() {
        setCurrentIndex(index => {
            return index === 0 ? items.length - 1 : index - 1;
        });
    }

    function showNext() {
        setCurrentIndex(index => {
            return index === items.length - 1 ? 0 : index + 1;
        });
    }

    return (
        <div
            className={`carousel-container ${className}`}
            aria-label={`${className} Image Carousel`}
        >
            <a href="#after-carousel-controls" className="skip-link">
                Skip Image Carousel Controls
            </a>

            <div
                onClick={() => setClicked(!clicked)}
                className={`carousel ${clicked ? "zoom" : ""}`}
            >
                <div
                    className="items-container"
                    style={{ transform: `translateX(-${100 * currentIndex}%)` }}
                >
                    {items.map(({ id, source, alt }, index) => (
                        <div key={id} className="item-slide">
                            <img
                                className="carousel-img"
                                src={source}
                                alt={alt}
                                aria-hidden={index !== currentIndex}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <CarouselControls
                items={items}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                showPrev={showPrev}
                showNext={showNext}
                showThumbnails={showThumbnails}
                showText={showText}
                className={className}
            />
            <div id="after-image-carousel-controls" />
        </div>
    );
};

export default Carousel;
