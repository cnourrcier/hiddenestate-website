import './Features.css';

const Features = () => {
    return (
        <section className="features">
            <h2>Palm Springs Vacation Home for Events</h2>
            <p className="features__subtitle">
                Vacation Rental, Corporate Events, Weddings, Reunions, Dinner Parties, Film, Photography, Garden Parties, Private Tours
            </p>
            <div className="features__description">
                <p>
                    The perfect Palm Springs vacation / event home. A custom built 5 bedroom, 6 bath estate situated on nearly an acre lot with over 3300 square feet of luxury living.
                </p>
                <p>
                    The Oldest home in Old Las Palmas, established in 1925. The Spanish Colonial Revival estate was Created by Master Architect McNeal Swasey. The estate was constructed during the height of the Spanish Revival architectural movement, a common design choice in the Palm Springs area during the 1920s and 1930s, reflecting the glamourous lifestyle of Hollywood's golden age.
                </p>
            </div>
            <h3 className="features__subheading">Features</h3>
            <ul className="features__list">
                <li><span className='feature'>Amazing Location:</span> Walking distance to downtown Palm Springs</li>
                <li><span className='feature'>Mountain Views:</span> The estate offers breathtaking views of San Jacinto Mountains, a signature feature of many luxury estates in Old Las Palms</li>
                <li><span className='feature'>Expansive Grounds:</span> The property is set on a Large lot (nearly an acre), with lush gardens, mature palm trees, and ample outdoor space</li>
                <li><span className='feature'>Large Saltwater Swimming Pool and Pool Cabana with outdoor kitchen/BBQ facilities:</span> Central features of the estate, the pool area is designed for both leisure and entertaining guests</li>
                <li><span className='feature'>Pickle Ball Court:</span> Surrounded by mature date palms, ancient Olive trees and breathtaking views, is adaptable for hosting various outdoor events</li>
                <li><span className='feature'>Private Casita above Garage:</span> Perfect location for the bride on wedding day or just relaxing on the second-floor deck admiring the pool area and mountains</li>
                <li><span className='feature'>Gated, Private and Secluded:</span> Many event parking options</li>
            </ul>
        </section>
    )
}

export default Features;