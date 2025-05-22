import { memo } from "react";
import PropTypes from "prop-types";
import { useResponsive } from "../../hooks/useResponsive";
import { GalleryUtils } from "../../utils/galleryUtils";
import "./HistoryGallery.css";

const HistoryGallery = ({ items, className, onItemClick }) => {
    const { isMobile } = useResponsive();

    const displayItems = GalleryUtils.getDisplayItems(
        items,
        className,
        isMobile
    );

    const handleKeyDown = (e, slug) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault(); // prevent page scroll on space key
            onItemClick(slug);
        }
    };

    return (
        <div className={`image-gallery-wrapper ${className}`}>
            {displayItems.map((item, index) => (
                <GalleryItem
                    key={`gallery-item-${item.navigation.slug || index}`}
                    item={item}
                    className={className}
                    onItemClick={onItemClick}
                    onKeyDown={handleKeyDown}
                />
            ))}
        </div>
    );
};

const GalleryItem = memo(({ item, className, onItemClick, onKeyDown }) => (
    <div
        className="img-wrapper"
        onClick={() => onItemClick(item.navigation.slug)}
        onKeyDown={e => onKeyDown(e, item.navigate.slug)}
        tabIndex="0"
        role="button"
        aria-label={`View details about ${item.titles.galleryTitle[0]}`}
    >
        <img
            src={item.source}
            alt={item.alt}
            className={`img-gallery-img ${item.size || ""}`}
            loading="lazy"
        />
        <div
            className={
                className === "fun-style" ? "fun-style-overlay" : "text-content"
            }
            aria-hidden="true"
        >
            <p>{item.titles.galleryTitle[0]}</p>
            {item.titles.galleryTitle?.[1] && (
                <p>{item.titles.galleryTitle[1]}</p>
            )}
        </div>
    </div>
));

HistoryGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            titles: PropTypes.shape({
                galleryTitle: PropTypes.arrayOf(PropTypes.string).isRequired,
                htmlTitle: PropTypes.string.isRequired,
                modalTitle: PropTypes.string.isRequired,
            }).isRequired,
            navigation: PropTypes.shape({
                slug: PropTypes.string.isRequired,
                pageRoute: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
    className: PropTypes.string.isRequired,
    onItemClick: PropTypes.func.isRequired,
};

export default memo(HistoryGallery);
