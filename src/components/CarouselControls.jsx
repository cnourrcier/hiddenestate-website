import React from 'react';
import './CarouselControls.css';

const CarouselControls = ({
  images,
  imageIndex,
  showPrevImage,
  showNextImage,
  setImageIndex,
  showThumbnails = false,
  showText = false,
  showDots = false,
  className='',
}) => {
  function getThumbnailIndexes() {
    const indexes = [];
    for (let i = -2; i <= 2; i++) {
      let index = imageIndex + i;
      if (index < 0) index = images.length + index;
      if (index >= images.length) index = index - images.length;
      indexes.push(index);
    }
    return indexes;
  }

  return (
    <div className={`controls-container ${className}`}>
      <button 
        className='nav-btn left' 
        onClick={showPrevImage}
        aria-label='View Previous Image'
      >
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {showThumbnails && (
        <div className='thumbnails-container'>
          {getThumbnailIndexes().map((index) => (
            <button  
              key={images[index].id}
              className={`thumbnail-btn ${imageIndex === index ? 'active' : ''}`}
              onClick={() => setImageIndex(index)}
              aria-label={`View Image ${images[index].id}`}
            >
              <img 
                src={images[index].url} 
                alt={images[index].alt}
                aria-hidden={index !== imageIndex}
              />
              <div className={imageIndex !== index ? 'thumbnail-btn-overlay' : ''} />
            </button>
          ))}
        </div>
      )}

      {showText && (
        <div className='text-container'>
            {images.map(({id, text}, index) => (
                <p 
                key={id}
                className={`image-text ${imageIndex === index ? '' : 'hidden'}`}
                >
                {text}
                </p>
            ))}
        </div>
      )}

      {showDots && (
        <div className="reviews__dots">
            {images.map((_, index) => (
                <span 
                    key={index} 
                    className={`dot ${index === imageIndex ? 'active' : ''}`}
                    onClick={() => setImageIndex(index)}
                />
            ))}
    </div>
      )}

      <button 
        className='nav-btn right'
        onClick={showNextImage}
        aria-label='View Next Image'
      >
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default CarouselControls;