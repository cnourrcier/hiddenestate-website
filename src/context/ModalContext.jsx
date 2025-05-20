import { createContext, lazy, startTransition, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const componentMap = {
    DanKimball: lazy(() => import('../components/historyPage/modalPages/DanKimball')),
    Swobdi: lazy(() => import('../components/historyPage/modalPages/Swobdi')),
    GableLombard: lazy(() => import('../components/historyPage/modalPages/GableLombard')),
    DorisFleeson: lazy(() => import('../components/historyPage/modalPages/DorisFleeson')),
    WarBonds: lazy(() => import('../components/historyPage/modalPages/WarBonds')),
    MasterArchitect: lazy(() => import('../components/historyPage/modalPages/MasterArchitect')),
    SharCracraft: lazy(() => import('../components/historyPage/modalPages/SharCracraft')),
    ClaudeMonet: lazy(() => import('../components/homePage/modalPages/ClaudeMonet')),
};

import claudeMonetInspiration from '../assets/claude-monet-inspiration.svg';

import {
    getItemBySlug,
} from '../data/modalData';
import Modal from "../components/common/Modal";

const imageMap = {
    claudeMonetInspiration
};

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    const [simpleModalOpen, setSimpleModalOpen] = useState(false);
    const [simpleModalItem, setSimpleModalItem] = useState(null);

    useEffect(() => {
        const pathParts = location.pathname.split('/');
        const pathSlug = pathParts.length > 2 ? pathParts[2] : null;

        if (pathSlug) {
        const item = getItemBySlug(pathSlug);
        if (item) {
            const itemWithComponent = {
            ...item,
            Component: componentMap[item.Component]
            };
            if (typeof item.image === 'string' && imageMap[item.image]) {
                item.image = imageMap[item.image];
            }
            startTransition(() => {
                setModalItem(itemWithComponent);
                setIsModalOpen(true);
            });
        }
        } else {
            setIsModalOpen(false);
        }
    }, [location]);
    
    const handleCloseModal = useCallback(() => { 
        const pathParts = location.pathname.split('/');
        if (pathParts.length >= 2 && pathParts[1] !== 'home') {
            navigate(`/${pathParts[1]}`);
        } else {
            navigate('/');
        }
    }, [navigate, location]);
    
    const handleOpenModal = useCallback((slug) => {
      if (slug) {
        const currentPathParts = window.location.pathname.split('/');
        const currentBase = currentPathParts.length > 1 ? currentPathParts[1] : '';

        const basePath = currentBase ? currentBase : 'home';

        navigate(`/${basePath}/${slug}`);
      }
    }, [navigate]);

    const prevLocationRef = useRef(location);

    useEffect(() => {
        // Closes simple modal if already open and location changes (i.e. back button pressed)
        if (simpleModalOpen && location !== prevLocationRef.current) {
            setSimpleModalOpen(false);
            setSimpleModalItem(null);
        }
        prevLocationRef.current = location;
    }, [location, simpleModalOpen]);

    const handleOpenSimpleModal = useCallback((item) => {
        setSimpleModalItem(item);
        setSimpleModalOpen(true);
    }, []);

    const handleCloseSimpleModal = useCallback(() => {
        setSimpleModalItem(null);
        setSimpleModalOpen(false);
    }, []);

    return (
        <ModalContext.Provider value={{ 
            handleOpenModal, 
            handleOpenSimpleModal,
        }}>
            {children}

            {isModalOpen && (
                <Modal 
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    item={modalItem}
                />
            )}

            {simpleModalOpen && (
                <Modal 
                    isOpen={simpleModalOpen}
                    onClose={handleCloseSimpleModal}
                    item={simpleModalItem}
                    className="simple"
                />
            )}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};