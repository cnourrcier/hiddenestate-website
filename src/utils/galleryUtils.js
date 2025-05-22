export class GalleryUtils {
    static reorderItemsForMobile(items, className) {
        if (className !== "grid-style") return items;

        const reorderedItems = [...items];
        // Swap Master architect and War Bonds for mobile
        if (reorderedItems.length >= 2) {
            [reorderedItems[0], reorderedItems[1]] = [
                reorderedItems[1],
                reorderedItems[0],
            ];
        }
        return reorderedItems;
    }

    static getDisplayItems(items, className, isMobile) {
        return isMobile ? this.reorderItemsForMobile(items, className) : items;
    }
}
