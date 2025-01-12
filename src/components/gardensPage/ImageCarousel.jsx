import { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ 
  images,
  showThumbnails = false,
  showText = false,
  className = ''
}) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [clicked, setClicked] = useState(false);

    function showPrevImage() {
        setImageIndex(index => {
            return index === 0 ? images.length - 1 : index - 1;
        })
    }

    function showNextImage() {
        setImageIndex(index => {
            return index === images.length - 1 ? 0 : index + 1;
        })
    }

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
        <section 
            className={`image-carousel-container ${className}`}
            aria-label='Image Carousel'
        >
            <a href="#after-image-carousel-controls" className='skip-link'>
                Skip Image Carousel Controls
            </a>
            
            <div onClick={() => setClicked(!clicked)} className={`image-carousel ${clicked ? 'zoom' : ''}`}>
                <div 
                    className='images-container' 
                    style={{transform: `translateX(-${100 * imageIndex}%)`}}
                >
                    {images.map(({ id, url, alt }, index) => (
                        <div
                            key={id} 
                            className='image-slide'
                        >
                            <img 
                                className='image-carousel-img' 
                                src={url} 
                                alt={alt}
                                aria-hidden={index !== imageIndex}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className='controls-container'>
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
            
            <div id='after-image-carousel-controls' />
        </section>
    )
}

export default ImageCarousel;