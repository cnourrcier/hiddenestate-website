import ImageCarousel from '../components/gardensPage/ImageCarousel';
import ImageSlider from '../components/gardensPage/ImageSlider';
import './GardensPage.css';

const GardensPage = () => {

    return (
        <div className='gardens'>
            <section className='gardens__top-section'>
                <div className='gardens__top-image'>
                    <img src="https://via.placeholder.com/800x300.png?text=Placeholder" alt="" />
                </div>
                <div className='gardens__title-container'>
                    <h1 className="gardens__title">
                        Gardens 
                    </h1>
                </div>
                <div className='gardens__list-container'>
                    <ul>
                        <li><b>Palm Trees:</b> More than 30 species native to arid and hotter climates from around the world grace the property.  A few are thought to be part of the original landscape.</li>
                        <li><b>Olive Trees:</b> Heavy producing Manzanilla olive trees that are more than 100 years old.</li>
                        <li><b>Roses:</b> Ever expanding collection of roses selected for their ability to survive the summer heat.</li>
                        <li><b>Cactus Motif:</b> The cactus landscape in the Twenties was with specimens collected from Arizona.  We are slowly expanding our present-day Cactus Motif.</li>
                        <li 
                            className='more-link'
                            onClick={() => {
                                // document.querySelector('.gardens__text-content').scrollIntoView();
                                const element = document.getElementById('text-content');
                                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                                window.scrollTo({
                                    top: elementPosition,
                                    behavior: 'instant'
                                });
                            }}
                        >
                            More 
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </li>
                    </ul>
                </div>
            </section>
            
            <section className='gardens__image-slider'>
                {/* <ImageSlider /> */}
                <ImageCarousel />
            </section>

            <section id="text-content" className='gardens__text-content'>
                <p>
                    We strive to create colorful and tropical landscapes that support local wildlife. Gardening in Palm Springs has unique challenges due to the extreme environment of the valley in the summer with temperatures exceeding 120°F.  However, our gardens can be breath-taking during the spring when trees, shrubs, perennials and annuals are outrivaling each other in a riot of colorful blooms.
                </p>
                <p>
                    The Cactus and Succulent Society gathered here in 1929 because Mrs. Swobdi had created “one of the finest collections of Cactus in the United States”.  
                </p>
            </section>
        </div>
    )
}

export default GardensPage;