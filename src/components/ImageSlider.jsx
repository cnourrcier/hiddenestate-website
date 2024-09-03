import { useEffect, useState } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 2) % images.length);
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
        <section className="img-slider-section">
            <div className="img-slider">
                <img src={images[currentImageIndex]} alt={`Resort view ${currentImageIndex + 1}`} />
                <img src={images[(currentImageIndex + 1) % images.length]} alt={`Resort view ${(currentImageIndex + 1) % images.length} + 1`} />
            </div>
        </section>
    )
}

export default ImageSlider;