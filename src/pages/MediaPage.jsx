import { Helmet } from "react-helmet-async";
import UnderConstructionPage from './UnderConstructionPage';
import './MediaPage.css';

const MediaPage = () => {
    const mediaEvents = [
        {
          id: 1,
          title: "Modernism 2025 Featured Home Tour",
          date: "March 15, 2025",
          description: "Our property was featured in the prestigious Modernism 2025 Home Tour, showcasing its unique architectural design and contemporary aesthetics.",
          imageUrl: "/images/modernism-tour-2025.jpg",
          link: "https://modernism2025.com/featured-homes",
          type: "image"
        },
        /*
        {
          id: 2,
          title: "Architectural Digest TV Feature",
          date: "June 2025",
          description: "Our property was showcased on Architectural Digest's 'Amazing Spaces' TV show.",
          videoUrl: "https://youtube.com/embed/your-video-id",
          imageUrl: "/images/ad-feature.jpg",
          link: "https://architecturaldigest.com/amazing-spaces",
          type: "video"
        }
        */
    ];

    return (
        <main>
            <Helmet>
                <title>Palm Springs Events</title>
            </Helmet>
            
            <UnderConstructionPage />
            {/* <div className="media-page-container">
                <header className="media-page-header">
                    <h1>Media Features</h1>
                    <p>Our property has been featured in various media events. Explore them below.</p>
                </header>

                <section className="media-events">
                    {mediaEvents.map((event) => (
                    <div key={event.id} className="media-event-card">
                        <div className="media-event-image">
                        {event.type === "video" ? (
                            <iframe 
                            src={event.videoUrl} 
                            title={event.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                            </iframe>
                        ) : (
                            <img src={event.imageUrl} alt={event.title} />
                        )}
                        </div>
                        <div className="media-event-content">
                        <h2>{event.title}</h2>
                        <span className="event-date">{event.date}</span>
                        <p>{event.description}</p>
                        <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-link">
                            Visit Event Website
                        </a>
                        </div>
                    </div>
                    ))}
                </section>
            </div> */}
        </main>
    )
}

export default MediaPage;