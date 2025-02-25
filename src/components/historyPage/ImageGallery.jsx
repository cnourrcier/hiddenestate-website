import './ImageGallery.css';

const ImageGallery = ({ items, className, onItemClick }) => {
  return (
    <div className={`image-gallery-wrapper ${className}`}>
      {items.map((item, index) => ( 
        <div 
          key={index} 
          className='img-wrapper' 
          onClick={() => onItemClick(item)}
        >
          <img
            src={item.image}
            alt={item.galleryTitle[0]}
            className={`img-gallery-img ${item.size || ''}`}
          />
          <div className={className === 'fun-style' ? 'fun-style-overlay' : 'text-content'}>
            <p>{item.galleryTitle[0]}</p>
            {item.galleryTitle?.[1] && <p>{item.galleryTitle[1]}</p>}
            <p>{item?.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;