import './ImageGallery.css';

const ImageGallery = ({ images }) => {

  // Distribute images across 3 columns
  const distributeImages = () => {
    const columns = [[], [], []];
    
    images.forEach((image, index) => {
      // Push each image to the appropriate column (0, 1, or 2)
      const columnIndex = index % 3;
      columns[columnIndex].push(image);
    });
    
    return columns;
  };

  const columns = distributeImages();

  return (
    <div className="gallery-container">
      <div className='image-gallery'>
        {columns.map((column, columnIndex) => (
          <div className="gallery-column" key={`column-${columnIndex}`}>
            {column.map((image, imageIndex) => (
              <div 
                className="gallery-item" 
                key={`image-${columnIndex}-${imageIndex}`}
              >
                <img 
                  src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/${image.imageID}/public `}
                  alt={image.alt || `Gallery image ${columnIndex * 3 + imageIndex + 1}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;