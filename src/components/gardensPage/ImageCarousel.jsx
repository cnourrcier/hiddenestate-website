import { useState } from 'react';
import CarouselControls from '../CarouselControls';
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
            
            <CarouselControls
                images={images}
                imageIndex={imageIndex}
                setImageIndex={setImageIndex}
                showPrevImage={showPrevImage}
                showNextImage={showNextImage}
                showThumbnails={showThumbnails}
                showText={showText}
                className={className}
            />
            <div id='after-image-carousel-controls' />
        </section>
    )
}

export default ImageCarousel;