"use client";

import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { Accommodation } from "@/data";
import { useEffect } from "react";
import { useAccommodationFilterStore } from "@/store/accommodationFilterState";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useRouter } from "next/navigation";
import AccommodationDetail from "./AccommodationDetail";

const defaultIcon = L.icon({
    iconUrl: iconUrl.src,
    shadowUrl: iconShadow.src,
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

function Cluster({ accommodations }: { accommodations: Accommodation[] }) {
    const t = useScopedI18n("Types");
    const map = useMap();
    const locale = useCurrentLocale();
    const { selectedId, setSelectedId } = useAccommodationFilterStore();
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

        accommodations.forEach((act) => {
            const marker = L.marker([act.lat, act.lng]);

            const popupContent = `
                <div class="accommodationAccommodation-popup" data-id="${act.id}" 
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
                const clickable = popupEl?.querySelector(".accommodationAccommodation-popup");
                clickable?.addEventListener("click", () => openDrawer(act.id));
            });

            clusterGroup.addLayer(marker);
        });

        map.addLayer(clusterGroup);

        return () => {
            map.removeLayer(clusterGroup);
        };
    }, [map, accommodations, locale]);

    return (
        <>
            {selectedId && (
                <AccommodationDetail
                    accommodations={accommodations}
                    openDrawer={openDrawer}
                    closeDrawer={closeDrawer}
                />
            )}
        </>
    );
}

function MapEventHandler() {
    const { setMapBounds, mapBounds } = useAccommodationFilterStore();
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

export default function AccommodationsMap({ accommodations }: { accommodations: Accommodation[] }) {
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
            <Cluster accommodations={accommodations} />
            <MapEventHandler />
        </MapContainer>
    );
}
