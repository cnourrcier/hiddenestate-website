import { useState, useEffect, useCallback, startTransition } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutingService } from "../services/routingService";
import { DataService } from "../services/dataService";

export const useUrlModal = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadModalFromUrl = async () => {
            const slug = RoutingService.parseModalSlugFromPath(
                location.pathname
            );

            if (!slug) {
                startTransition(() => {
                    setIsModalOpen(false);
                    setModalItem(null);
                });
                return;
            }

            setIsLoading(true);
            try {
                const item = await DataService.getModalItemBySlug(slug);
                if (item) {
                    startTransition(() => {
                        setModalItem(item);
                        setIsModalOpen(true);
                    });
                }
            } catch (error) {
                console.error("Failed to load modal item:", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadModalFromUrl();
    }, [location.pathname]);

    const openModal = useCallback(
        slug => {
            if (!slug) return;

            const basePath = RoutingService.getBasePathFromLocation(
                location.pathname
            );
            const modalPath = RoutingService.buildModalPath(basePath, slug);
            navigate(modalPath);
        },
        [navigate, location.pathname]
    );

    const closeModal = useCallback(() => {
        const closePath = RoutingService.buildClosePath(location.pathname);
        navigate(closePath);
    }, [navigate, location.pathname]);

    return {
        isModalOpen,
        modalItem,
        isLoading,
        openModal,
        closeModal,
    };
};
