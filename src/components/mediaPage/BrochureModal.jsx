import './BrochureModal.css';

const BrochureModal = ({ isOpen, onClose, brochureImage, title }) => {
  if (!isOpen) return null;

  return (
    <div className="brochure-modal-overlay" onClick={onClose}>
      <div className="brochure-modal-content" onClick={e => e.stopPropagation()}>
        <button className="brochure-modal-close" onClick={onClose}>×</button>
        <h3 className="brochure-modal-title">{title}</h3>
        <div className="brochure-modal-container">
          <div className="brochure-modal-image-container">
            <img 
              src={brochureImage} 
              alt={title} 
              className="brochure-modal-image"
            />
          </div>
          <div className="brochure-modal-text-container">
            <p className="brochure-modal-text">
              222 W. CHINO DRIVE (1925) Hidden Gable Estate is named for the many Spanish gables hidden behind its' pink walls, a style that reflects the glamour of Hollywood's Golden Age. A Spanish Colonial Revival, one of the oldest homes in Old Las Palmas, was created by Master Architect McNeal Swasey for Los Angeles fashion designer and importer Mrs. Agnes Swobdi-Meade during the "Roaring Twenties."
            </p>
            <p className="brochure-modal-text">
              Swobdi, a pioneer of the Los Angeles Fashion District, was renowned for her work as an importer, designer and couturiere for silent film stars. McNeal Swasey, an esteemed architect to southern California's elite, was known for using advanced technologies. The house is perfectly oriented to avoid sun exposure on bedroom windows, features a fireproof and earthquake-resistant structure. The thick concrete walls provide thermal massing, virtually eliminating temperature fluctuations throughout the day and night.
            </p>
            <p className="brochure-modal-text">
              This estate's legacy is a rich tapestry, interwoven with the stories of remarkable individuals whose influence spanned fashion, film, government, and industry. Among its distinguished occupants were Clark Gable, the "King of Hollywood" and Carole Lombard, one of the most celebrated actresses of Classic Hollywood Cinema as well as Dan Kimball, a former Secretary of the Navy, who left a lasting impact on naval policy and played an instrumental role during the Cold War and Space Race against the Soviet Union.
            </p>
            <p className="brochure-modal-text">
              If these walls could talk! The current owners are Chuck and Karen Nourbier, from Long Beach, California. Since retiring, they have specialized in the restoration and preservation of historic properties...designed by master architects for extraordinary individuals. Their projects have earned landmark designations, inclusion in the National Register of Historic Places, recognition by the California Register of Historic Resources, Mills Act contracts, and other preservation awards. Their areas of interest include Queen Anne, Craftsman, and Spanish architectural styles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureModal;