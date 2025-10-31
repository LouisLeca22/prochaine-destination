"use client";

import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { Activity } from "@/data";
import { useEffect } from "react";
import { useActivityFilterStore } from "@/store/activityFilterState";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useRouter } from "next/navigation";
import ActivityDetail from "./ActivityDetail";

const defaultIcon = L.icon({
    iconUrl: iconUrl.src,
    shadowUrl: iconShadow.src,
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

function Cluster({ activities }: { activities: Activity[] }) {
    const t = useScopedI18n("Types");
    const map = useMap();
    const locale = useCurrentLocale();
    const { selectedId, setSelectedId } = useActivityFilterStore();
    const router = useRouter();

    const openDrawer = (id: number) => {
        setSelectedId(id);
        router.push(`?id=${id}`);
    };

    const closeDrawer = () => {
        setSelectedId(null);
        router.push(window.location.pathname);
    };

    useEffect(() => {
        const clusterGroup = L.markerClusterGroup();

        activities.forEach((act) => {
            const marker = L.marker([act.lat, act.lng]);

            const popupContent = `
                <div class="activity-popup" data-id="${act.id}" 
                    style="width:220px; border-radius:10px; overflow:hidden; 
                    font-family:sans-serif; cursor:pointer;">
                    <div style="position: relative; width: 100%; height: 120px; overflow: hidden;">
                        <img src="${act.images[0]}" 
                             alt="${locale === "fr" ? act.nameFR : act.nameEN}" 
                             style="width:100%; height:100%; object-fit:cover;" />
                    </div>
                    <div style="padding:8px; text-align:center;">
                        <h3 style="color:#06b6d4; font-weight:600; font-size:1rem; margin-bottom:4px;">
                            ${locale === "fr" ? act.nameFR : act.nameEN}
                        </h3>
                        <p style="color:#6b7280; font-size:0.85rem; margin:0;">
                            ${t(act.type)} — ${act.price} €
                        </p>
                    </div>
                </div>
            `;

            marker.bindPopup(popupContent, { className: "custom-popup", autoPanPadding: [5, 5] });

            marker.on("popupopen", (e) => {
                const popupEl = e.popup.getElement();
                const clickable = popupEl?.querySelector(".activity-popup");
                clickable?.addEventListener("click", () => openDrawer(act.id));
            });

            clusterGroup.addLayer(marker);
        });

        map.addLayer(clusterGroup);

        return () => {
            map.removeLayer(clusterGroup);
        };
    }, [map, activities, locale]);

    return (
        <>
            {selectedId && (
                <ActivityDetail
                    activities={activities}
                    openDrawer={openDrawer}
                    closeDrawer={closeDrawer}
                />
            )}
        </>
    );
}

function MapEventHandler() {
    const { setMapBounds, mapBounds } = useActivityFilterStore();
    const map = useMapEvents({
        moveend: () => setMapBounds(map.getBounds()),
        zoomend: () => setMapBounds(map.getBounds()),
    });

    useEffect(() => {
        if (mapBounds === null) {
            map.setView([49.2, 0.7], 8);
        }
    }, [mapBounds, map]);

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
            <MapEventHandler />
        </MapContainer>
    );
}
