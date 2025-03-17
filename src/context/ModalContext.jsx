import { createContext, lazy, startTransition, useCallback, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


// Import all modal content components lazily
const DanKimball = lazy(() => import('../components/historyPage/modalPages/DanKimball'));
const Swobdi = lazy(() => import('../components/historyPage/modalPages/Swobdi'));
const GableLombard = lazy(() => import('../components/historyPage/modalPages/GableLombard'));
const DorisFleeson = lazy(() => import('../components/historyPage/modalPages/DorisFleeson'));
const WarBonds = lazy(() => import('../components/historyPage/modalPages/WarBonds'));
const MasterArchitect = lazy(() => import('../components/historyPage/modalPages/MasterArchitect'));
const SharCracraft = lazy(() => import('../components/historyPage/modalPages/SharCracraft'));
const ClaudeMonet = lazy(() => import('../components/homePage/modalPages/ClaudeMonet'));

import claudeMonetInspiration from '../assets/claude-monet-inspiration.svg';

import {
    getItemBySlug,
} from '../data/modalData';
import Modal from "../components/Modal";

const componentMap = {
    DanKimball,
    Swobdi,
    GableLombard,
    DorisFleeson,
    WarBonds,
    MasterArchitect,
    SharCracraft,
    ClaudeMonet,
};

const imageMap = {
    claudeMonetInspiration
};

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalItem, setModalItem] = useState(null);

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

    return (
        <ModalContext.Provider value={{ handleOpenModal, }}>
            {children}

            {isModalOpen && (
                <Modal 
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    item={modalItem}
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