import { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = () => {

    const images = [
        { id: 1, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736293118/Hidden%20Gable%20Estate/gardens%20page/_I1A0136_3_small_vexlvc.jpg`, alt: 'Image 1' },
        { id: 2, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736293119/Hidden%20Gable%20Estate/gardens%20page/_I1A0210_2_small_qxnziq.jpg`, alt: 'Image 2' },
        { id: 3, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736293119/Hidden%20Gable%20Estate/gardens%20page/_I1A0204_2_small_irjpo0.jpg`, alt: 'Image 3' },
        { id: 4, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736293119/Hidden%20Gable%20Estate/gardens%20page/_I1A0059_1_small_hzalpi.jpg`, alt: 'Image 4' },
        { id: 5, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736293117/Hidden%20Gable%20Estate/gardens%20page/_I1A0056_2_small_fvc4yi.jpg`, alt: 'Image 5' },
        { id: 6, url: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736293118/Hidden%20Gable%20Estate/gardens%20page/_I1A0053_1_small_smq5bv.jpg`, alt: 'Image 6' },
    ];

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

    function getThumbnailIndexes () {
        const indexes = [];
        for (let i = -2; i <= 2; i++) {
          let index = imageIndex + i;
          if (index < 0) index = images.length + index;
          if (index >= images.length) index = index - images.length;
          indexes.push(index);
        }
        return indexes;
    };

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
            <div className='buttons-container'>
                    <button 
                        className='nav-btn left' 
                        onClick={showPrevImage}
                        aria-label='View Previous Image'
                    >
                        <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className='thumbnails-container'>
                        {getThumbnailIndexes().map((index ) => (
                            <button  
                                key={images[index].id}
                                className={`thumbnail-btn ${imageIndex === index ? 'active' : ''}`}
                                onClick={() => setImageIndex(index)}
                                aria-label= {`View Image ${images[index].id}`}
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