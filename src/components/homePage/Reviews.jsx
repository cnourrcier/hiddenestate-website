import { useState } from 'react';
import CarouselControls from '../carousel/CarouselControls';
import './Reviews.css';
import './ReviewsSlider.css';

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviews = [
        {   id: 1,
            title: "Gorgeous Setting!",
            text: "We used this house for a corporate shoot and our team also stayed at the property, the setting is beautiful and the house is clean, well-stocked, and has a ton of activities. The management crew was extremely responsive to any questions that popped up during our stay. Highly recommend!",
            author: "Corporate Client",
            date: "Recent Stay"
        },
        {   id: 2,
            title: "A Magical Palm Spring Oasis",
            text: "I have no words for the most beautiful and magical week we just spent at this property. Well worth every penny. First, the location can't be beat - walking distance to the best restaurants, coffee shops, and shops. We really didn't NEED a car at all - except for a grocery run.",
            author: "Vacation Guest",
            date: "Recent Stay"
        },
        {   id: 3,
            title: "The house is BEAUTIFUL",
            text: "The furniture, the decor, windows, grounds, and original features were completely in line with the history of the house. It has a quiet elegance that was perfect. The beds are comfortable and bathrooms are plenty. The view, the pool, and the outdoor gathering areas were the real winners this week - we could have stayed forever. Management was communicative and thorough and quickly dealt with any issues.",
            author: "Vacation Guest",
            date: "Recent Stay"
        }
    ];

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % reviews.length
        );
    };

    return (
        <section className="reviews reviews-slider">
            <h2 className='reviews__heading'>Guest Reviews</h2>
            <div className="slider-wrapper">
                <div className="reviews__slider-container">
                    <div 
                        className="reviews__slider" 
                        style={{ 
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {reviews.map((review, index) => (
                            <div 
                                key={index} 
                                className="review-card slider-review-card"
                            >
                                <h3 className="review__title">{review.title}</h3>
                                <p className="review__text">{review.text}</p>
                                <div className="review__attribution">
                                    <span className="review__author">{review.author}</span>
                                    {/* <span className="review__date">{review.date}</span> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <CarouselControls
                items={reviews}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                showPrev={handlePrevious}
                showNext={handleNext}
                showDots={true}
                className={'reviews-carousel'}
            />
        </section>
    );
};

export default Reviews;