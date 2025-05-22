import { useMemo } from "react";
import { useResponsive } from "./useResponsive";
import { GALLERY_COLUMNS } from "../config/breakpoints";

export const useColumnLayout = items => {
    const { isMobile, isTablet } = useResponsive();

    const columnCount = useMemo(() => {
        if (isMobile) return GALLERY_COLUMNS.mobile;
        if (isTablet) return GALLERY_COLUMNS.tablet;
        return GALLERY_COLUMNS.desktop;
    }, [isMobile, isTablet]);

    const columns = useMemo(() => {
        const columnsArray = Array.from({ length: columnCount }, () => []);

        items.forEach((item, index) => {
            const columnIndex = index % columnCount;
            columnsArray[columnIndex].push(item);
        });

        return columnsArray;
    }, [items, columnCount]);

    return { columns, columnCount };
};
