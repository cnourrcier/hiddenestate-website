import { useEffect, useState } from 'react';
import './ImageSliderAndFeatures.css';

const ImageSlider = () => {
    const [showAlternateImages, setShowAlternateImages] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setShowAlternateImages((prev) => !prev);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const images = [
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734804922/Hidden%20Gable%20Estate/home%20page/5750_y8gi72.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719452/Hidden%20Gable%20Estate/home%20page/5837_g7sld1.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719349/Hidden%20Gable%20Estate/home%20page/5734_dy1q44.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719350/Hidden%20Gable%20Estate/home%20page/5742_mr4ibo.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719454/Hidden%20Gable%20Estate/home%20page/5757_ufhw0g.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1734719454/Hidden%20Gable%20Estate/home%20page/5757_ufhw0g.jpg`,

    ];

    // Get the current images based on the showAlternateImages state
    const displayedImages = [
        showAlternateImages ? images[1] : images[0],  // First slot alternates between images 0 and 1
        showAlternateImages ? images[3] : images[2],  // Second slot alternates between images 2 and 3
        showAlternateImages ? images[5] : images[4],  // Third slot alternates between images 4 and 5
    ];

    return (
        <section className="img-slider-and-features-section">
            <div className="img-slider">
                {
                    displayedImages.map((image, index) => (
                        <img 
                            key={index}
                            src={image}
                            alt={`Resort view ${index + 1}`}
                        />
                    ))
                }
            </div>
            <div className="features">
                <h2 className="features__heading">Features</h2>
                <ul className="features__list">
                    <li><span className='feature'>Amazing Location:</span> Walking distance to downtown Palm Springs</li>
                    <li><span className='feature'>Mountain Views:</span> The estate offers breathtaking views of San Jacinto Mountains, a signature feature of many luxury estates in Old Las Palms</li>
                    <li><span className='feature'>Expansive Grounds:</span> The property is set on a Large lot (nearly an acre), with lush gardens, mature palm trees, and ample outdoor space</li>
                    <li><span className='feature'>Large Saltwater Swimming Pool and Pool Cabana with outdoor kitchen/BBQ facilities:</span> Central features of the estate, the pool area is designed for both leisure and entertaining guests</li>
                    <li><span className='feature'>Pickle Ball Court:</span> Surrounded by mature date palms, ancient Olive trees and breathtaking views, is adaptable for hosting various outdoor events</li>
                    <li><span className='feature'>Private Casita above Garage:</span> Perfect location for the bride on wedding day or just relaxing on the second-floor deck admiring the pool area and mountains</li>
                    <li><span className='feature'>Gated, Private and Secluded:</span> Many event parking options</li>
                </ul>
            </div>
        </section>
    )
}

export default ImageSlider;