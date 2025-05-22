import { createContext, useContext } from "react";
import { useUrlModal } from "../hooks/useUrlModal";
import { useSimpleModal } from "../hooks/useSimpleModal";
import Modal from "../components/common/Modal";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const urlModal = useUrlModal();
    const simpleModal = useSimpleModal();

    return (
        <ModalContext.Provider
            value={{
                openModal: urlModal.openModal,
                openSimpleModal: simpleModal.openModal,
            }}
        >
            {children}

            {urlModal.isModalOpen && (
                <Modal
                    isOpen={urlModal.isModalOpen}
                    onClose={urlModal.closeModal}
                    item={urlModal.modalItem}
                    isLoading={urlModal.isLoading}
                />
            )}

            {simpleModal.isOpen && (
                <Modal
                    isOpen={simpleModal.isOpen}
                    onClose={simpleModal.closeModal}
                    item={simpleModal.item}
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
