import React from 'react';
import { X } from 'lucide-react';
import './Modal.css';

const Modal = ({ isOpen, onClose, image, additionalImage, video, title, info }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button 
            onClick={onClose}
            className="modal-close-button"
          >
            <X />
          </button>
        </div>
        
        <div className="modal-content">
          <div className="modal-media-container">
            {video ? (
                <video
                    controls
                >
                    <source src={video} type="video/mp4" />
                </video>
            ) : (
                <>
                    <img
                        src={image}
                        alt={title}
                        className="modal-image"
                    />
                    {additionalImage && (
                        <img 
                            src={additionalImage}
                            alt={title}
                            className='modal-image'
                        />
                    )}
                </>
            )}
          </div>
          <div className='modal-info-container'>
            {info && (
                <p className="modal-info-text">
                {info}
                </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;