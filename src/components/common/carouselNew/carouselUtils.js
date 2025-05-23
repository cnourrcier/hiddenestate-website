/**
 * Utility functions for carousel operations
 */

/**
 *
 * @param {number} currentIndex - Current active slide index
 * @param {number} totalItems - Total number of items
 * @param {number} maxThumbnails - Maximum number of thumbnails to show
 * @returns {Array<number>} Array of indexes to display
 */
export const getThumbnailIndexes = (
    currentIndex,
    totalItems,
    maxThumbnails = 5
) => {
    if (totalItems === 0) return [];

    const maxThumbs = Math.min(maxThumbnails, totalItems);
    const sideItems = Math.floor((maxThumbs - 1) / 2);
    const indexes = [];

    // Build array with currentIndex in the center
    for (let i = -sideItems; i <= sideItems; i++) {
        let index = currentIndex + i;

        // Handle wrapping
        if (index < 0) {
            index = totalItems + index; // wrap backwards
        } else if (index >= totalItems) {
            index = index - totalItems; // wrap forwards
        }

        indexes.push(index); // 8, 9, 0, -9, -8
    }

    return indexes;
};

/**
 * Generate aria labels for carousel navigation
 * @param {number} currentIndex - Current slide index
 * @param {number} totalItems - Total number of items
 * @returns {Object} Aria label strings
 */
export const getCarouselAriaLabels = (currentIndex, totalItems) => ({
    carousel: `Image carousel, slide ${currentIndex + 1} of ${totalItems}`,
    previous: `Go to previous slide, ${currentIndex === 0 ? totalItems : currentIndex} of ${totalItems}`,
    next: `Go to next slide, ${currentIndex === totalItems - 1 ? 1 : currentIndex + 2} of ${totalItems}`,
    slide: index => `Slide ${index + 1} of ${totalItems}`,
    thumbnail: index => `Go to slide ${index + 1}`,
});

export const getCarouselTransform = (
    currentIndex,
    direction = "horizontal"
) => {
    const translateValue = -100 * currentIndex;

    return {
        transform:
            direction === "horizontal"
                ? `translateX(${translateValue}%)`
                : `translateY(${translateValue}%)`,
        transition: "transform 0.3s ease-in-out",
    };
};
