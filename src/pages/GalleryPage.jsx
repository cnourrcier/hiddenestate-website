import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import UnderConstruction from './UnderConstructionPage';
import './GalleryPage.css';

const images = [
  { id: 1, src: "https://via.placeholder.com/800x600.png?text=Placeholder", alt: "Exterior view of the house" },
  { id: 2, src: "https://via.placeholder.com/800x600.png?text=Placeholder", alt: "Living room with vintage decor" },
  { id: 3, src: "https://via.placeholder.com/800x600.png?text=Placeholder", alt: "Pool area with palm trees" },
  { id: 4, src: "https://via.placeholder.com/800x600.png?text=Placeholder", alt: "Master bedroom" },
  { id: 5, src: "https://via.placeholder.com/800x600.png?text=Placeholder", alt: "Dining area with view" },
  { id: 6, src: "https://via.placeholder.com/800x600.png?text=Placeholder", alt: "Garden path" },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (

    <>
      <Helmet>
        <title>Estate Photos</title>
      </Helmet>

      <UnderConstruction />
    </>
    
    // <main className="gallery-page">

    //   <div className="container">
    //     <h1>Photo Gallery</h1>
    //     <p className="intro">Explore the beauty and charm of Hidden Gable Estate.</p>
        
    //     <div className="image-grid">
    //       {images.map((image) => (
    //         <div key={image.id} className="image-item" onClick={() => setSelectedImage(image)}>
    //           <img src={image.src} alt={image.alt} />
    //           <p className='image-item-title'>Image Title</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {selectedImage && (
    //     <div className="modal" onClick={() => setSelectedImage(null)}>
    //       <img src={selectedImage.src} alt={selectedImage.alt} />
    //       <p>{selectedImage.alt}</p>
    //     </div>
    //   )}
    // </main>
  );
};

export default GalleryPage;