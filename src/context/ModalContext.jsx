import { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from '../components/Modal';

// Import modal content components
import { lazy } from 'react';
const DanKimball = lazy(() => import('../components/historyPage/modalPages/DanKimball'));
const Swobdi = lazy(() => import('../components/historyPage/modalPages/Swobdi'));
const GableLombard = lazy(() => import('../components/historyPage/modalPages/GableLombard'));
const DorisFleeson = lazy(() => import('../components/historyPage/modalPages/DorisFleeson'));
const WarBonds = lazy(() => import('../components/historyPage/modalPages/WarBonds'));
const MasterArchitect = lazy(() => import('../components/historyPage/modalPages/MasterArchitect'));
const SharCracraft = lazy(() => import('../components/historyPage/modalPages/SharCracraft'));
const ClaudeMonet = lazy(() => import('../components/homePage/modalPages/ClaudeMonet'));

// Import images from assets
import claudeMonetInspiration from '../assets/claude-monet-inspiration.svg';

// Import modal data
import { 
  allModalItems as modalItemsData,
  getItemBySlug 
} from '../data/modalData';

// Map of all modal components
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

// Map of images that need to be directly imported
const imageMap = {
  claudeMonetInspiration
};

const allModalItems = modalItemsData.map(item => {
  // Handle component references
  const processedItem = {
    ...item,
    Component: componentMap[item.Component]
  };
  
  // Handle special case images that need to be imported
  if (typeof item.image === 'string' && imageMap[item.image]) {
    processedItem.image = imageMap[item.image];
  }
  
  return processedItem;
});

// Create the context
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Get the current page route (e.g., 'history', 'home', etc.)
  const getCurrentPageRoute = useCallback(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    return pathSegments.length > 0 ? pathSegments[0] : '';
  }, [location]);

  // Open modal by slug
  const openModalBySlug = useCallback((slug) => {
    const foundItem = getItemBySlug(slug);
    
    if (foundItem) {
      // Find the processed item with component references
      const item = allModalItems.find(item => item.slug === slug);
      
      if (item) {
        setModalItem(item);
        setIsModalOpen(true);
        
        // Navigate to the appropriate URL
        navigate(`/${item.pageRoute}/${slug}`);
      }
    }
  }, [navigate]);

  // Open modal by item
  const openModal = useCallback((item) => {
    if (item && item.slug) {
      openModalBySlug(item.slug);
    }
  }, [openModalBySlug]);

  // Close modal
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    
    // Navigate back to the base page route
    const currentPageRoute = getCurrentPageRoute();
    navigate(`/${currentPageRoute}`);
  }, [navigate, getCurrentPageRoute]);

  // Check URL for modal slug on page load or URL change
  const checkUrlForModal = useCallback((pageRoute) => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments.length >= 2 && pathSegments[0] === pageRoute) {
      const slug = pathSegments[1];
      
      // Find item in our processed items array
      const item = allModalItems.find(item => 
        item.slug === slug && item.pageRoute === pageRoute
      );
      
      if (item) {
        setModalItem(item);
        setIsModalOpen(true);
        return true;
      }
    }
    return false;
  }, [location.pathname]);

  // Get items for a specific page route
  const getItemsByPageRoute = useCallback((pageRoute) => {
    return allModalItems.filter(item => item.pageRoute === pageRoute);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modalItem,
        openModal,
        openModalBySlug,
        closeModal,
        checkUrlForModal,
        allModalItems,
        getItemsByPageRoute
      }}
    >
      {children}
      
      {isModalOpen && modalItem && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          item={modalItem}
        />
      )}
    </ModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};