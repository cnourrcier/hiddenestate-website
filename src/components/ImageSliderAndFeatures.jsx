import { useEffect, useState } from 'react';
import './ImageSliderAndFeatures.css';

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 3) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const images = [
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1725299252/Clark%20Gable%20Pitch%20Site/_I1A0049m_3_vjqjha.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1725299255/Clark%20Gable%20Pitch%20Site/_I1A0134m_2_t86hwi.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1725299251/Clark%20Gable%20Pitch%20Site/_I1A0144m_2_rbhhfh.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1725299251/Clark%20Gable%20Pitch%20Site/_I1A0197m_2_oiuer9.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1725299252/Clark%20Gable%20Pitch%20Site/_I1A0228m_2_tmssut.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1725299255/Clark%20Gable%20Pitch%20Site/_I1A0234m_2_u8rwvb.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1725299255/Clark%20Gable%20Pitch%20Site/_I1A0246m_2_dq6rbc.jpg`,
        `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1725299255/Clark%20Gable%20Pitch%20Site/_I1A0248m_2_r6icmu.jpg`,
    ];

    return (
        <section className="img-slider-and-features-section">
            <div className="img-slider">
                <img src={images[currentImageIndex]} alt={`Resort view ${currentImageIndex + 1}`} />
                <img src={images[(currentImageIndex + 1) % images.length]} alt={`Resort view ${(currentImageIndex + 1) % images.length} + 1`} />
                <img src={images[(currentImageIndex + 2) % images.length]} alt={`Resort view ${(currentImageIndex + 2) % images.length + 1}`} />
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