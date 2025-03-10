import { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './HistoryGallery.css';

const MOBILE_BREAKPOINT = 768;

const HistoryGallery = ({ items, className, onItemClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const handleKeyDown = (e, item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // prevent page scroll on space key
      onItemClick(item);
    }
  };

  const displayItems = useCallback(() => {
    if (className === 'grid-style' && isMobile) {
      const reorderedItems = [...items];
      // Swap Master architect and War Bonds
      if (reorderedItems.length >= 2) {
        [reorderedItems[0], reorderedItems[1]] = [reorderedItems[1], reorderedItems[0]];
      }
      return reorderedItems;
    }
    return items;
  }, [items, className, isMobile]);

  const itemsToDisplay = displayItems();

  return (
    <div className={`image-gallery-wrapper ${className}`}>
      {itemsToDisplay.map((item, index) => ( 
        <div 
          key={`gallery-item-${item.slug || index}`} 
          className='img-wrapper' 
          onClick={() => onItemClick(item)}
          onKeyDown={(e) => handleKeyDown(e, item)}
          tabIndex='0' // Make div focusable for keyboard navigation
          role='button'
          aria-label={`View details about ${item.galleryTitle[0]}`}
        >
          <img
            src={item.image}
            alt={item.galleryTitle[0]}
            className={`img-gallery-img ${item.size || ''}`}
            loading='lazy'
          />
          <div 
            className={className === 'fun-style' ? 'fun-style-overlay' : 'text-content'}
            aria-hidden='true'
          >
            <p>{item.galleryTitle[0]}</p>
            {item.galleryTitle?.[1] && <p>{item.galleryTitle[1]}</p>}
            {item?.year && <p>{item?.year}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

HistoryGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      galleryTitle: PropTypes.arrayOf(PropTypes.string).isRequired,
      slug: PropTypes.string,
      size: PropTypes.string,
      year: PropTypes.string
    })
  ).isRequired,
  className: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default memo(HistoryGallery);