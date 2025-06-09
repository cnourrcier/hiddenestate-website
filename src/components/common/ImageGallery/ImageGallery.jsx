import { useColumnLayout } from "../../../hooks/useColumnLayout";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
    const { columns } = useColumnLayout(images);

    return (
        <div className="gallery-container">
            <div className="image-gallery">
                {columns.map((column, columnIndex) => (
                    <div
                        className="gallery-column"
                        key={`column-${columnIndex}`}
                    >
                        {column.map((item, itemIndex) => (
                            <div
                                className="gallery-item"
                                key={`image-${columnIndex}-${itemIndex}`}
                            >
                                <img
                                    src={item.source}
                                    alt={
                                        item.alt ||
                                        `Gallery image ${columnIndex * columns.length + itemIndex + 1}`
                                    }
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
