import React, { useState, useEffect } from 'react';
import './FadingCategories.css';

const categories = [
    "Vacation Rentals",
    "Corporate Events",
    "Weddings",
    "Reunions",
    "Dinner Parties",
    "Film",
    "Photography",
    "Garden Parties",
    "Private Tours"
];

const FadingCategories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
                setIsVisible(true);
            }, 1000);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="fading-categories-container">
            <div className={`fading-category ${isVisible ? 'visible' : ''}`}>
                {categories[currentIndex]}
            </div>
        </div>
    );
};

export default FadingCategories;