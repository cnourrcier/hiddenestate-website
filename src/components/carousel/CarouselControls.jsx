import React from 'react';
import './CarouselControls.css';

const CarouselControls = ({
  items,
  currentIndex,
  showPrev,
  showNext,
  setCurrentIndex,
  showThumbnails = false,
  showText = false,
  showDots = false,
  className='',
}) => {
  function getThumbnailIndexes() {
    const indexes = [];
    for (let i = -2; i <= 2; i++) {
      let index = currentIndex + i;
      if (index < 0) index = items.length + index;
      if (index >= items.length) index = index - items.length;
      indexes.push(index);
    }
    return indexes;
  }

  return (
    <div className={`controls-container ${className}`}>
      <button 
        className='nav-btn left' 
        onClick={showPrev}
        aria-label='View Previous Item'
      >
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {showThumbnails && (
        <div className='thumbnails-container'>
          {getThumbnailIndexes().map((index) => (
            <button  
              key={items[index].id}
              className={`thumbnail-btn ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View Item ${items[index].id}`}
            >
              <img 
                src={items[index].url} 
                alt={items[index].alt}
                aria-hidden={index !== currentIndex}
              />
              <div className={currentIndex !== index ? 'thumbnail-btn-overlay' : ''} />
            </button>
          ))}
        </div>
      )}

      {showText && (
        <div className='text-container'>
            {items.map((item, index) => (
                <div 
                  key={item.id}
                  className={`image-text ${currentIndex === index ? '' : 'hidden'}`}
                >
                  <p>
                  {item.text} {' '}
                  {item.text2 && (
                    <span className='small-text'>{item.text2}</span>
                  )}
                  </p>
                </div>
            ))}
        </div>
      )}

      {showDots && (
        <div className="reviews__dots">
            {items.map((_, index) => (
                <span 
                    key={index} 
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                />
            ))}
    </div>
      )}

      <button 
        className='nav-btn right'
        onClick={showNext}
        aria-label='View Next Item'
      >
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default CarouselControls;