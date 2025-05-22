import { useEffect } from "react";

export const useBodyScrollLock = isLocked => {
    useEffect(() => {
        if (isLocked) {
            const originalStyle = document.body.style.overflow;
            document.body.style.overflow = "hidden";

            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [isLocked]);
};
