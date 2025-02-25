import './Features.css';

const Features = () => {

    return (
        <section className='features-section'>
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

export default Features;