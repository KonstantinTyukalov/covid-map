import React, { useEffect, useState } from "react";
import { MapContainer, Popup, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import joinApis from "../services/joinApis";
import JoinedApiModel from "../models/joined-api-model";

let startPosition = { lat: 56.99, lng: 40.97 };

const MapPlaceholder = () => {
    return <p>Covid map </p>;
};

function Map() {
    const [countries, setCountries] = useState<JoinedApiModel[]>([]);
    useEffect(() => {
        joinApis().then((res) => {
            if (res) setCountries(res);
        });
    }, []);
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
            {countries.map((c, i) => {
                const pos = { lat: c.latlng[0], lng: c.latlng[1] };
                return (
                    <CircleMarker
                        key={i}
                        center={pos}
                        radius={Math.log(c.TotalConfirmed)}
                    >
                        <Popup>
                            <p>Country:{c.Country}</p>
                            <p>Total Confirmed:{c.TotalConfirmed}</p>
                            <p>Total Deaths:{c.TotalDeaths}</p>
                        </Popup>
                    </CircleMarker>
                );
            })}
        </MapContainer>
    );
}
export default Map;
