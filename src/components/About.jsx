import './About.css';

const About = () => {
    return (
        <section className="about">
            <h2>About the Estate</h2>
            <p className="about__subtitle">
                Experience Clark Gable's Palm Springs Retreat that has been lovingly restored
            </p>
            <div className="about__content">
                <p>
                    Clark Gable, famous for his role as Rhett Butler in "Gone with the Wind," owned this estate with his wife Carole Lombard during the 1930s and 1940s. Known as the "desert hideaway," the property boasts many luxurious amenities typical of the era, including sprawling gardens, a large swimming pool, and expansive views of the San Jacinto Mountains.
                </p>
                <p>
                    Located just a couple of hours from Los Angeles, Palm Springs offered a convenient escape from the hustle and bustle of Hollywood. It provided a serene retreat where stars could unwind and enjoy a more private lifestyle within the tranquility of the desert.
                </p>
            </div>
            <blockquote className="about__quote">
                <p>"We love a good pink house, but a rosy-hued home that once belonged to one of Hollywood's dreamiest actors makes us especially giddy. It's like the real-estate equivalent of a strapping gentleman in a pink polo shirt — oddly, it just works."</p>
                - Lauran Piro, GOOD HOUSEKEEPING Oct 2, 2014
            </blockquote>
        </section>
    )
}

export default About;