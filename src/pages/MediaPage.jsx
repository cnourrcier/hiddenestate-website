import { Helmet } from "react-helmet-async";
import UnderConstructionPage from './UnderConstructionPage';
import './MediaPage.css';

const MediaPage = () => {

    const mediaSpotlights = [
        {
            id: 1,
            headline: "Modernism 2025 Featured Home Tour",
            date: "March 15, 2025",
            type: "image",
            description: "Our property was featured in the prestigious Modernism 2025 Home Tour, showcasing its unique architectural design and contemporary aesthetics.",
            imageUrl: "/images/modernism-tour-2025.jpg",
            link: "https://modernism2025.com/featured-homes",
        },
        {
            id: 1,
            image: '/images/media/architectural-digest.jpg',
            type: 'image',
            headline: "Desert Gem: The Hidden History of Palm Springs' Most Iconic Rental",
            source: 'Architectural Digest',
            link: 'https://www.architecturaldigest.com/example-link',
            date: 'June 2024'
        },
        {
            id: 2,
            image: '/images/media/travel-leisure.jpg',
            type: 'image',
            headline: "Step Back in Time: Palm Springs' Historic Vacation Getaway",
            source: 'Travel + Leisure',
            link: 'https://www.travelandleisure.com/example-link',
            date: 'April 2024'
        },
        {
            id: 3,
            video: 'https://www.youtube.com/embed/your-video-id',
            type: 'video',
            headline: 'Inside Tour: Mid-Century Modern Marvel in Palm Springs',
            source: 'Homes & Gardens YouTube Channel',
            link: 'https://www.youtube.com/watch?v=your-video-id',
            date: 'March 2024'
        },
        {
            id: 4,
            image: '/images/media/palm-springs-life.jpg',
            type: 'image',
            headline: "The Rich History Behind Palm Springs' Celebrity Haven",
            source: 'Palm Springs Life',
            link: 'https://www.palmspringslife.com/example-link',
            date: 'February 2024'
        },
        {
            id: 5,
            image: '/images/media/conde-nast-traveler.jpg',
            type: 'image',
            headline: 'Desert Oasis: The Storied Property That Captivates Travelers',
            source: 'Condé Nast Traveler',
            link: 'https://www.cntraveler.com/example-link',
            date: 'December 2023'
        },
        {
            id: 6,
            video: 'https://www.youtube.com/embed/another-video-id',
            type: 'video',
            headline: 'Celebrity Secrets: The Palm Springs Hideaway with a Star-Studded Past',
            source: 'Vanity Fair Video',
            link: 'https://www.youtube.com/watch?v=another-video-id',
            date: 'October 2023'
        }
    ];

    return (
        <main>
            <Helmet>
                <title>Palm Springs Events</title>
            </Helmet>

            <UnderConstructionPage />
            
            {/* <div className="media-page">
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
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="media-link">
                            View Feature
                        </a>
                        </div>
                    </div>
                    ))}
                </div>
            </div> */}
        </main>
    )
}

export default MediaPage;