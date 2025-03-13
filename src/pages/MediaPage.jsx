import { Helmet } from "react-helmet-async";
import { useState } from "react";
import BrochureModal from '../components/mediaPage/BrochureModal';
import './MediaPage.css';

const MediaPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedBrochure, setSelectedBrochure] = useState(null);

    const handleOpenModal = (brochureImage, headline) => {
        setSelectedBrochure({ image: brochureImage, title: headline });
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const mediaSpotlights = [
        {
            id: 1,
            headline: "Old Las Palmas Home Tour: A Peek Behind the Hedges lll, Celebrating Our First 100 Years",
            date: "February 17, 2025",
            type: "brochure",
            description: "Our property was featured in the prestigious Modernism 2025 Home Tour, showcasing its unique architectural design and contemporary aesthetics.",
            source: 'Modernism 2025 Featured Home Tour',
            brochureClosed: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740960594/Hidden%20Gable%20Estate/events/modernism-2025-featured-home-tour/magazine-closed-transparentbg_small_us9e9k.png`,
            brochureOpen: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1740960594/Hidden%20Gable%20Estate/events/modernism-2025-featured-home-tour/magazine-open-transparentbg_small_s1t5fj.png`,
            link: "https://modernismweek.com/2025/home-tours/old-las-palmas-home-tour-peek/",
            linkTitle: "Event Website"
        },
        // {
        //     id: 2,
        //     video: 'https://www.youtube.com/embed/your-video-id',
        //     type: 'video',
        //     headline: 'Inside Tour: Mid-Century Modern Marvel in Palm Springs',
        //     source: 'Featured on Discovery Channel',
        //     link: 'https://www.youtube.com/watch?v=your-video-id',
        //     date: 'June 2025'
        // },
    ];

    return (
        <main>
            <Helmet>
                <title>Hidden Gable Estate Media Events</title>
            </Helmet>
            
            <div className="media-page">
                <div className="media__header-container">
                    <h1 className="media__header">
                    <span className="star">★</span> IN THE MEDIA <span className="star">★</span>
                    </h1>
                    <p className="media__subheader">
                    Our historic Palm Springs property has been featured in numerous publications and videos.
                    Explore some of our favorite media spotlights below.
                    </p>
                </div>

                <div className="media-spotlight-container">
                    {mediaSpotlights.map((item) => (
                    <div className="media-spotlight-card" key={item.id}>
                        <div className="media-content">
                        {item.type === 'image' ? (
                            <img src={item.image} alt={item.headline} className="media-image" />
                        ) : item.type === 'brochure' ? (
                            <div className="media-brochure-container">
                                <img 
                                    src={item.brochureClosed} 
                                    alt="Brochure closed view" 
                                    className="media-brochure-closed" 
                                />
                                <img 
                                    src={item.brochureOpen} 
                                    alt="Brochure open view" 
                                    className="media-brochure-open" 
                                />
                                {/* <div className="media-brochure-overlay">
                                    <button
                                        className="media-link"
                                        onClick={() => handleOpenModal(item.brochureOpen, item.headline)}
                                    >
                                        Read Article
                                    </button>
                                </div> */}
                            </div>
                        ) : (
                            <div className="media-video-wrapper">
                            <iframe
                                src={item.video}
                                title={item.headline}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="media-video"
                            ></iframe>
                            </div>
                        )}
                        </div>
                        <div className="media-info">
                            <h2 className="media-headline">{item.headline}</h2>
                            <div className="media-source-date">
                                <span className="media-source">{item.source}</span>
                                <span className="media-date">{item.date}</span>
                            </div>
                            {/* <a href={item.link} target="_blank" rel="noopener noreferrer" className={ item.linkTitle ? 'media-link' : 'hidden'}>
                                {item.linkTitle ? item.linkTitle : 'View Feature'}
                            </a> */}
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <BrochureModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                brochureImage={selectedBrochure?.image}
                title={selectedBrochure?.title}
            />
        </main>
    )
}

export default MediaPage;