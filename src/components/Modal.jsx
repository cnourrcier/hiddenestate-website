import { Suspense, useEffect } from 'react';
import { X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './Modal.css';

const Modal = ({ isOpen, onClose, item, className='' }) => {

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = '';
  }, [isOpen]);
  
  if (!isOpen) return null;

  const LoadingPlaceholder = () => (
    <div className="modal-loading-placeholder">
      <div className="loading-spinner"></div>
      <p>Loading page...</p>
    </div>
  );

  return (
    <div className={`modal-overlay ${className}`}>

      <Helmet>
        <title>{item.HTMLTitle}</title>
      </Helmet>

      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-title">{item.modalTitle}</h3>
          <button 
            onClick={onClose}
            className="modal-close-button"
          >
            <X />
          </button>
        </div>

        {item.Component ? (
            <Suspense fallback={<LoadingPlaceholder />}>
              <item.Component />
            </Suspense>
          ) : (
            <div className="modal-content">
                    <img
                        src={item.image}
                        alt={item.modalTitle}
                        className="modal-image"
                    />
            </div>
        )}
      </div>
    </div>
  );
};

export default Modal;