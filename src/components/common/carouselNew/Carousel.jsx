import { useState } from "react";
import { useCarouselContext } from "./CarouselContext";
import { getCarouselAriaLabels, getCarouselTransform } from "./carouselUtils";
import "./Carousel.css";

/**
 * Core Carousel Component
 * Handles slide display and zoom functionality
 */
export const Carousel = ({
    showZoom = false,
    direction = "horizontal",
    aspectRatio = "auto",
}) => {
    const { items, currentIndex, className, ariaLabel } = useCarouselContext();

    const [isZoomed, setIsZoomed] = useState(false);
    const ariaLabels = getCarouselAriaLabels(currentIndex, items.length);

    const handleSlideClick = () => {
        if (showZoom) {
            setIsZoomed(!isZoomed);
        }
    };

    const handleKeyDown = e => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleSlideClick();
        }
    };

    return (
        <div className="carousel-container" aria-label={ariaLabel}>
            <a href="#carousel-controls" className="skip-link">
                Skip to carousel controls
            </a>

            <div
                className={`carousel ${isZoomed ? "carousel-zoomed zoom" : ""} ${className}`}
                onClick={handleSlideClick}
                onKeyDown={handleKeyDown}
                tabIndex={showZoom ? 0 : -1}
                role={showZoom ? "button" : "img"}
                aria-label={
                    showZoom ? "Click to zoom image" : ariaLabels.carousel
                }
                style={{
                    aspectRatio:
                        aspectRatio !== "auto" ? aspectRatio : undefined,
                    curser: showZoom ? "pointer" : "default",
                }}
            >
                <div
                    className="carousel__slides"
                    style={getCarouselTransform(currentIndex, direction)}
                >
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className="carousel__slide"
                            role="img"
                            aria-label={item.alt}
                            aria-hidden={index !== currentIndex}
                        >
                            <img
                                className="carousel__image"
                                src={item.source}
                                alt={item.alt}
                                loading={
                                    Math.abs(index - currentIndex) <= 1
                                        ? "eager"
                                        : "lazy"
                                }
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>

                {showZoom && (
                    <div
                        className="carousel__zoom-indicator"
                        aria-hidden="true"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
};
