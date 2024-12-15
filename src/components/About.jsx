import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <h1 className="about__title">
                Welcome to the "Hidden Gable" 
                <span className="about__location">Located in Old Las Palmas, Palm Springs</span>
            </h1>
            <h2 className="about__subtitle">
                Transform yourself back in time as though it happened one night, but make it your night in a celebrity Palm Springs Estate.
            </h2>
            <div className="about__wrapper">
                <div className="about__image-placeholder">
                    <img 
                        src="/img/Gable-Lombard-39.jpg" 
                        alt="Clark Gable and Carole Lombard's Palm Springs Estate" 
                        className="about__image"
                    />
                </div>
                <div className="about__content">
                    <p>
                        Clark Gable, famous for his role as Rhett Butler in <span className='movie_title'>"Gone with the Wind"</span>, owned this estate with his wife Carole Lombard during the 1930s and 1940s. Known as the <i>"desert hideaway"</i>, the property boasts many luxurious amenities typical of the era, including sprawling gardens, a large swimming pool, and expansive views of the San Jacinto Mountains.
                    </p>
                    <p>
                        Located just a couple of hours from Los Angeles, Palm Springs offered a convenient escape from the hustle and bustle of Hollywood. It provided a serene retreat where stars could unwind and enjoy a more private lifestyle within the tranquility of the desert.
                    </p>
                </div>
            </div>
            <blockquote className="about__quote">
                <p>"We love a good pink house, but a rosy-hued home that once belonged to one of Hollywood's dreamiest actors makes us especially giddy. It's like the real-estate equivalent of a strapping gentleman in a pink polo shirt — oddly, it just works.</p>
                <p className='about__quote-highlight'><span>Clark Gable</span> and actress <span>Carole Lombard</span> once called this Spanish Colonial in Palm Springs their home.</p>
                <p>And it's rife with perplexing famous-people details, like half a dozen bathrooms, a saltwater pool, and a guest house cutely called a <i>'casita'</i>. But, exposed wooden beams, intricate tilework, and a master bedroom with outdoor access make this house a timeless classic (much like Gable himself)."</p>
                <cite className="about__quote-source">- Lauran Piro, GOOD HOUSEKEEPING Oct 2, 2014</cite>
            </blockquote>
        </section>
    )
}

export default About;