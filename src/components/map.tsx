import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

let startPosition = { lat: 56.99, lng: 40.97 };

const MapPlaceholder = () => {
    return <p>Covid map </p>;
};
class Map extends React.Component {
    render() {
        return (
            <MapContainer
                center={startPosition}
                zoom={5}
                scrollWheelZoom={true}
                placeholder={MapPlaceholder}
                style={{ height: "75vh", width: "100wh" }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        );
    }
}
export default Map;
