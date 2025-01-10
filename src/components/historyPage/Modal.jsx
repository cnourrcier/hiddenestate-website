import React from 'react';
import { X } from 'lucide-react';
import './Modal.css';

const Modal = ({ isOpen, onClose, item, className='' }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${className}`}>
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

            <item.Component />

          ) : (

            <div className="modal-content">
              <div className="modal-media-container">
                {item.video ? (

                  <video
                      controls
                  >
                      <source src={item.video} type="video/mp4" />
                  </video>

                ) : (

                  <>
                    <img
                        src={item.image}
                        alt={item.modalTitle}
                        className="modal-image"
                    />
                    {item.additionalImage && (
                        <img 
                            src={item.additionalImage}
                            alt={item.modalTitle}
                            className='modal-image'
                        />
                    )}
                  </>
                )}
              </div>
              <div className='modal-info-container'>
                {item.info && (
                    <p className="modal-info-text">
                    {item.info}
                    </p>
                )}
              </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default Modal;