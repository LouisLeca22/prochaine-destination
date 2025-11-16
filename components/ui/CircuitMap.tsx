import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

export interface Circuit {
    name: string;
    positions: [number, number][];
    color: string;
}

interface CircuitMapProps {
    circuits: Circuit[];
    center: [number, number];
    zoom: number;
    minMarkerZoom?: number;
}

const ZoomMarkers: React.FC<{
    positions: [number, number][];
    name: string;
    minZoom: number;
}> = ({ positions, name, minZoom }) => {
    const map = useMap();
    const [visible, setVisible] = useState(map.getZoom() >= minZoom);

    useEffect(() => {
        const updateVisibility = () => setVisible(map.getZoom() >= minZoom);

        map.on("zoomend", updateVisibility);

        return () => {
            map.off("zoomend", updateVisibility);
        };
    }, [map, minZoom]);

    if (!visible) return null;

    return (
        <>
            {positions.map((pos, i) => (
                <Marker key={i} position={pos as LatLngExpression}>
                    <Popup>
                        {name} — point {i + 1}
                    </Popup>
                </Marker>
            ))}
        </>
    );
};

const CircuitMap: React.FC<CircuitMapProps> = ({
    circuits,
    center,
    zoom,
    minMarkerZoom = 14,
}) => {
    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom
            className="w-full h-96 rounded"
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {circuits.map((c, idx) => (
                <Polyline
                    key={idx}
                    positions={c.positions}
                    pathOptions={{ color: c.color, weight: 4 }}
                />
            ))}

            {circuits.map((c, idx) => (
                <ZoomMarkers
                    key={idx}
                    positions={c.positions}
                    name={c.name}
                    minZoom={minMarkerZoom}
                />
            ))}
        </MapContainer>
    );
};

export default CircuitMap;
