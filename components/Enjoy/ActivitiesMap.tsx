import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { Activity } from "@/data";
import { useEffect } from "react";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
    iconUrl: iconUrl.src,
    shadowUrl: iconShadow.src,
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

function Cluster({ activities }: { activities: Activity[] }) {
    const map = useMap();

    useEffect(() => {
        const clusterGroup = L.markerClusterGroup();
        activities.forEach(act => {
            const marker = L.marker([act.lat, act.lng]);
            marker.bindPopup(act.name);
            clusterGroup.addLayer(marker);
        });

        map.addLayer(clusterGroup);

        // Clean up on unmount
        return () => {
            map.removeLayer(clusterGroup);
        };
    }, [map, activities]);

    return null;
}

export default function ActivitiesMap({ activities }: { activities: Activity[] }) {
    return (
        <MapContainer
            center={[49.2, 0.7]}
            zoom={8}
            minZoom={6}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />
            <Cluster activities={activities} />
        </MapContainer>
    );
}