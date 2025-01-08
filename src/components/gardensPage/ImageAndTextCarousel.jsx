import { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {

    const [imageIndex, setImageIndex] = useState(0);

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
            className='image-carousel-container'
            aria-label='Image Carousel'
        >
            <a href="#after-image-carousel-controls" className='skip-link'>Skip Image Carousel Controls</a>
            <div className='image-carousel'>
                <div 
                    className='images-container' 
                    style={{transform: `translateX(-${100 * imageIndex}%)`}}
                >
                    {images.map(({ id, url, alt }, index) => (
                        <img 
                            key={id} 
                            className='image-carousel-img' 
                            src={url} 
                            alt={alt}
                            aria-hidden={index !== imageIndex}
                            />
                    ))}
                </div>
            </div>
            <div className='buttons-and-text-container'>
                    <button 
                        className='nav-btn left' 
                        onClick={showPrevImage}
                        aria-label='View Previous Image'
                    >
                        <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className='image-text-container'>
                        {images.map(({id, text}, index) => (
                            <p 
                                key={id}
                                className={`image-text ${imageIndex === index ? '' : 'hidden'}`}
                            >
                                {text}
                            </p>
                        ))}
                    </div>
                    <button 
                    className='nav-btn right'
                    onClick={showNextImage}
                    aria-label='View Next Image'
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div id='after-image-carousel-controls' />
        </section>
    )
}

export default ImageCarousel;