import { useState } from "react";
import Map, {
    Marker,
    Popup,
    NavigationControl,
    FullscreenControl,
    GeolocateControl,
} from "react-map-gl";
import { MapPin } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Location.css";

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN;

const propertyLocation = {
    latitude: 33.8314,
    longitude: -116.54887,
    zoom: 13,
};

const initialViewLocation = {
    latitude: 33.831,
    longitude: -116.54887,
    zoom: 13,
};

const markerInfo = {
    longitude: propertyLocation.longitude,
    latitude: propertyLocation.latitude,
    name: "Hidden Estate",
    address: "222 W Chino Dr. Palm Springs, CA 92262",
};

const mapStyles = [
    { name: "Streets", url: "mapbox://styles/mapbox/streets-v11" },
    { name: "Satellite", url: "mapbox://styles/mapbox/satellite-v9" },
    { name: "Light", url: "mapbox://styles/mapbox/light-v10" },
    { name: "Dark", url: "mapbox://styles/mapbox/dark-v10" },
];

const CustomMarker = ({ onClick }) => (
    <div className="custom-marker" onClick={onClick}>
        <MapPin className="icon" fill="rgba(255, 0, 0, 0.5)" stroke="red" />
    </div>
);

const Location = () => {
    const [popupInfo, setPopupInfo] = useState(null);
    const [currentStyle, setCurrentStyle] = useState(mapStyles[0].url);

    const handleMarkerClick = () => {
        !popupInfo ? setPopupInfo(markerInfo) : setPopupInfo(null);
    };

    return (
        <section className="location">
            <div className="location-content">
                <div className="map-container">
                    <Map
                        initialViewState={initialViewLocation}
                        style={{ width: "100%", height: 400 }}
                        mapStyle={currentStyle}
                        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                    >
                        <Marker
                            longitude={markerInfo.longitude}
                            latitude={markerInfo.latitude}
                        >
                            <CustomMarker onClick={handleMarkerClick} />
                        </Marker>

                        {popupInfo && (
                            <Popup
                                anchor="bottom"
                                longitude={popupInfo.longitude}
                                latitude={popupInfo.latitude}
                                closeOnClick={false}
                                className="custom-popup"
                            >
                                <div className="popupInfo">
                                    <img
                                        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1725299251/Hidden%20Gable%20Estate/home%20page/_I1A0197m_2_oiuer9.jpg`}
                                        alt="Property"
                                    />
                                    <div className="popup-content">
                                        <h3>{popupInfo.name}</h3>
                                        <p>{popupInfo.address}</p>
                                    </div>
                                </div>
                            </Popup>
                        )}

                        <NavigationControl position="top-right" />
                        <FullscreenControl position="top-right" />
                        <GeolocateControl position="top-right" />
                    </Map>
                    <div className="map-style-switcher">
                        {mapStyles.map((style, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentStyle(style.url)}
                                className={
                                    currentStyle === style.url ? "active" : ""
                                }
                            >
                                {style.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="side-content-container">
                    <div className="side-content">
                        <img
                            src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1725299251/Hidden%20Gable%20Estate/home%20page/_I1A0197m_2_oiuer9.jpg`}
                            alt="Property"
                        />
                        <div className="side-content-text">
                            <h3>{markerInfo.name}</h3>
                            <p>{markerInfo.address}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="location-description">
                <p>
                    You'll be within a short walking distance of all the best
                    dining and entertainment, nestled in{" "}
                    <span>Old Las Palmas</span>, a premier neighborhood referred
                    to as the <span>"Beverly Hills"</span> of Palm Springs. Rich
                    in architecture and Hollywood history, this affluent
                    neighborhood also holds estates belonging to well-known
                    figures like Leonardo DiCaprio, Kurt Russel, and Katherine
                    Hepburn.
                </p>
            </div>
        </section>
    );
};

export default Location;
