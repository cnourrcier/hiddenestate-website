import {
    useState,
    useCallback,
    useEffect,
    useRef,
    startTransition,
} from "react";
import { useLocation } from "react-router-dom";

export const useSimpleModal = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState(null);
    const prevLocationRef = useRef(location);

    useEffect(() => {
        // Close modal if location changes (back button)
        if (isOpen && location !== prevLocationRef.current) {
            startTransition(() => {
                setIsOpen(false);
                setItem(null);
            });
        }
        prevLocationRef.current = location;
    }, [location, isOpen]);

    const openModal = useCallback(modalItem => {
        startTransition(() => {
            setItem(modalItem);
            setIsOpen(true);
        });
    }, []);

    const closeModal = useCallback(() => {
        startTransition(() => {
            setItem(null);
            setIsOpen(false);
        });
    }, []);

    return {
        isOpen,
        item,
        openModal,
        closeModal,
    };
};
