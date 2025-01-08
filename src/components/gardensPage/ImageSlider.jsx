import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const images = [
    { id: 1, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736280026/Hidden%20Gable%20Estate/gardens%20page/_I1A0136_3_uhv176.jpg`, alt: 'Image 1' },
    { id: 2, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736280027/Hidden%20Gable%20Estate/gardens%20page/_I1A0210_2_kvizti.jpg`, alt: 'Image 2' },
    { id: 3, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736280028/Hidden%20Gable%20Estate/gardens%20page/_I1A0204_2_u7pjv4.jpg`, alt: 'Image 3' },
    { id: 4, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736280024/Hidden%20Gable%20Estate/gardens%20page/_I1A0059_1_zgvawd.jpg`, alt: 'Image 4' },
    { id: 5, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736280024/Hidden%20Gable%20Estate/gardens%20page/_I1A0056_2_ndttbm.jpg`, alt: 'Image 5' },
    { id: 6, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736280028/Hidden%20Gable%20Estate/gardens%20page/_I1A0053_1_omxacp.jpg`, alt: 'Image 6' },
  ];

const thumbnails = [
    { id: 1, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736293118/Hidden%20Gable%20Estate/gardens%20page/_I1A0136_3_small_vexlvc.jpg`, alt: 'Image 1' },
    { id: 2, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736293119/Hidden%20Gable%20Estate/gardens%20page/_I1A0210_2_small_qxnziq.jpg`, alt: 'Image 2' },
    { id: 3, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736293119/Hidden%20Gable%20Estate/gardens%20page/_I1A0204_2_small_irjpo0.jpg`, alt: 'Image 3' },
    { id: 4, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736293119/Hidden%20Gable%20Estate/gardens%20page/_I1A0059_1_small_hzalpi.jpg`, alt: 'Image 4' },
    { id: 5, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736293117/Hidden%20Gable%20Estate/gardens%20page/_I1A0056_2_small_fvc4yi.jpg`, alt: 'Image 5' },
    { id: 6, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736293118/Hidden%20Gable%20Estate/gardens%20page/_I1A0053_1_small_smq5bv.jpg`, alt: 'Image 6' },
];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getThumbnailIndexes = () => {
    const indexes = [];
    for (let i = -2; i <= 2; i++) {
      let index = currentIndex + i;
      if (index < 0) index = images.length + index;
      if (index >= images.length) index = index - images.length;
      indexes.push(index);
    }
    return indexes;
  };

  return (
    <div className="slider-container">
      <div className="main-image">
        <img 
          src={images[currentIndex].url} 
          alt={images[currentIndex].alt}
        />
      </div>

      <div className="navigation">
        <button className="nav-button prev" onClick={goToPrev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="thumbnails">
          {getThumbnailIndexes().map((index) => (
            <button
              key={thumbnails[index].id}
              onClick={() => goToSlide(index)}
              className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
            >
              <img
                src={thumbnails[index].url}
                alt={`Thumbnail ${index + 1}`}
              />
              <div className={currentIndex !== index ? 'thumbnail-overlay' : ''} />
            </button>
          ))}
        </div>

        <button className="nav-button next" onClick={goToNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;