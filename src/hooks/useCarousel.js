import { useCallback, useEffect, useState } from "react";

/**
 * Custom hook for managing carousel state and navigation
 * @param {Array} items - Array of carousel items
 * @param {Object} options - Configuration options
 * @returns {Object} Carousel state and methods
 */
export const useCarousel = (items, options = {}) => {
    const {
        initialIndex = 0,
        autoPlay = false,
        autoPlayInterval = 3000,
        loop = true,
        onSlideChange,
    } = options;

    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isPlaying, setIsPlaying] = useState(autoPlay);

    const itemsLength = items?.length || 0;

    const goToSlide = useCallback(
        index => {
            if (!itemsLength) return;

            let newIndex = index;

            if (loop) {
                // Handle wrapping for infinite loop
                if (index < 0) {
                    newIndex = itemsLength - 1;
                } else if (index >= itemsLength) {
                    newIndex = 0;
                }
            } else {
                // Clamp to bounds for non-looping carousel
                newIndex = Math.max(0, Math.min(index, itemsLength - 1));
            }

            setCurrentIndex(newIndex);
            onSlideChange?.(newIndex, items[newIndex]);
        },
        [itemsLength, loop, onSlideChange, items]
    );

    const goToNext = useCallback(() => {
        if (!loop && currentIndex >= itemsLength - 1) return;
        goToSlide(currentIndex + 1);
    }, [currentIndex, itemsLength, loop, goToSlide]);

    const goToPrevious = useCallback(() => {
        if (!loop && currentIndex <= 0) return;
        goToSlide(currentIndex - 1);
    }, [currentIndex, loop, goToSlide]);

    const toggleAutoPlay = useCallback(() => {
        setIsPlaying(prev => !prev);
    }, []);

    const stopAutoPlay = useCallback(() => {
        setIsPlaying(false);
    }, []);

    const startAutoPlay = useCallback(() => {
        setIsPlaying(true);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (!isPlaying || !autoPlay || itemsLength <= 1) return;

        const interval = setInterval(() => {
            goToNext();
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [isPlaying, autoPlay, autoPlayInterval, itemsLength, goToNext]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = e => {
            switch (e.key) {
                case "ArrowLeft":
                    e.preventDefault();
                    goToPrevious();
                    break;
                case "ArrowRight":
                    e.preventDefault();
                    goToNext();
                    break;
                case " ":
                    e.preventDefault();
                    if (autoPlay) toggleAutoPlay();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goToPrevious, goToNext, autoPlay, toggleAutoPlay]);

    return {
        currentIndex,
        currentItem: items?.[currentIndex] || null,
        itemsLength,
        isPlaying,
        canGoNext: loop || currentIndex < itemsLength - 1,
        canGoPrevious: loop || currentIndex > 0,
        goToSlide,
        goToNext,
        goToPrevious,
        toggleAutoPlay,
        startAutoPlay,
        stopAutoPlay,
    };
};
