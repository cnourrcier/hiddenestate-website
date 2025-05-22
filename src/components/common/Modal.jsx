import { X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import "./Modal.css";

const Modal = ({
    isOpen,
    onClose,
    item,
    className = "",
    isLoading = false,
}) => {
    useBodyScrollLock(isOpen);

    if (!isOpen) return null;

    if (isLoading) {
        return (
            <div className={`modal-overlay ${className}`}>
                <div className="modal-container">
                    <div className="modal-loading">Loading...</div>
                </div>
            </div>
        );
    }

    if (!item) return null;

    return (
        <div className={`modal-overlay ${className}`}>
            <Helmet>
                <title>{item.titles?.htmlTitle || "Modal"}</title>
            </Helmet>

            <div className="modal-container">
                <div className="modal-header">
                    <h3 className="modal-title">
                        {item.titles?.modalTitle || item.modalTitle}
                    </h3>
                    <button
                        onClick={onClose}
                        className="modal-close-button"
                        aria-label="Close modal"
                    >
                        <X />
                    </button>
                </div>

                {item.modalComponent ? (
                    <item.modalComponent />
                ) : (
                    <div className="modal-content">
                        <img
                            src={item.source}
                            alt={item.alt}
                            className="modal-image"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
