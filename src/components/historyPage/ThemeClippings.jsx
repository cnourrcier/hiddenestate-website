import React, { useState } from 'react';
import './ThemeClippings.css';

const themeImages = {
  Fashion: "/img/Fashion-1920.png",
  "Roaring Twenties": "/img/Roaring-Twenties-1926.png",
  "Classic Hollywood": "/img/Classic-Hollywood.jpg",
  WWII: "/img/WWII-c1940.png",
  "Space Race": "/img/Space-Race.png"
};

const ThemeClippings = () => {
  const [hoveredTheme, setHoveredTheme] = useState(null);

  return (
    <section className="themes-container">
      <div className="theme-snippet-container">
        <header className="themes-header">
          <h1>Step Back in Time: Celebrating History Through Events</h1>
          <p>Explore the rich legacy of Hidden Gable Estate with timeless themes that bring history to life.</p>
        </header>
        {Object.entries({
          Fashion: "Step into a world of high fashion where style knows no bounds. Perfect for runway shows or chic soirées.",
          "Roaring Twenties": "Channel the glitz and glam of the 1920s with flappers, jazz, and the buzz of Prohibition-era charm.",
          "Classic Hollywood": "Relive the golden age of Hollywood with red carpets, star-studded vibes, and timeless elegance.",
          WWII: "Celebrate the resilience of an era with swing dances, vintage decor, and patriotic flair.",
          "Space Race": "Blast off into a space-age celebration filled with futuristic themes and cosmic wonder."
        }).map(([theme, description]) => (
          <div
            key={theme}
            className={`theme-snippet ${hoveredTheme === theme ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredTheme(theme)}
            onMouseLeave={() => setHoveredTheme(null)}
            style={{
              height: hoveredTheme === theme ? '150px' : '150px',
              width: '300px'
            }}
          >
            {hoveredTheme === theme && (
              <div className="theme-image">
                <img
                  src={themeImages[theme]}
                  alt={theme}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className={`theme-content ${hoveredTheme === theme ? 'hidden' : ''}`}>
              <h2>{theme}</h2>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThemeClippings;












// import './ThemeClippings.css';

// const ThemeClippings = () => {

//     return (
//         <section className='themes-container'>
//             <div className='theme-snippet-container'>
//             <header className='themes-header'>
//                 <h1>Step Back in Time: Celebrating History Through Events</h1>
//                 <p>Explore the rich legacy of our Palm Springs property with timeless themes that bring history to life.</p>
//             </header>
//                 <div className="theme-snippet">
//                     <h2>Fashion</h2>
//                     <p>Step into a world of high fashion where style knows no bounds. Perfect for runway shows or chic soirées.</p>
//                 </div>

//                 <div className="theme-snippet">
//                     <h2>Roaring Twenties</h2>
//                     <p>Channel the glitz and glam of the 1920s with flappers, jazz, and the buzz of Prohibition-era charm.</p>
//                 </div>

//                 <div className="theme-snippet">
//                     <h2>Classic Hollywood</h2>
//                     <p>Relive the golden age of Hollywood with red carpets, star-studded vibes, and timeless elegance.</p>
//                 </div>

//                 <div className="theme-snippet">
//                     <h2>WWII</h2>
//                     <p>Celebrate the resilience of an era with swing dances, vintage decor, and patriotic flair.</p>
//                 </div>

//                 <div className="theme-snippet">
//                     <h2>Space Race</h2>
//                     <p>Blast off into a space-age celebration filled with futuristic themes and cosmic wonder.</p>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ThemeClippings; 