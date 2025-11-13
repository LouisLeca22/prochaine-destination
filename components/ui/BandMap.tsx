"use client"

import { useState, useMemo } from "react"
import { Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet/dist/leaflet.css"
import iconUrl from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import { BaseItem } from "@/data"
import { useCurrentLocale, useScopedI18n } from "@/locales/client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import Link from "next/link"

const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false })

const defaultIcon = L.icon({
    iconUrl: iconUrl.src,
    shadowUrl: iconShadow.src,
    iconAnchor: [12, 41],
})
L.Marker.prototype.options.icon = defaultIcon

const cardVariant: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

function BandMap({ items }: { items: BaseItem[] }) {
    const locale = useCurrentLocale()
    const t1 = useScopedI18n("Types")
    const t2 = useScopedI18n("Details")

    const [selectedItem, setSelectedItem] = useState<BaseItem>(items[0])

    const bounds = useMemo(() => {
        const latLngs = items.map(item => [item.lat, item.lng] as [number, number])
        return L.latLngBounds(latLngs)
    }, [items])

    function FitBounds() {
        const map = useMap()
        map.fitBounds(bounds, { padding: [50, 50] })
        return null
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{
                amount: 0.5,
                once: true
            }}
            className="flex flex-col md:flex-row h-[70vh] md:h-[60vh] shadow-lg max-w-6xl mx-auto rounded-2xl overflow-hidden">
            {/* Map */}
            <div className="flex-1 h-[50vh] md:h-auto">
                <MapContainer
                    className="h-full w-full"
                    bounds={bounds}
                    scrollWheelZoom={true}
                    minZoom={5}
                    maxBoundsViscosity={0.8}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />
                    {items.map((item, index) => (
                        <Marker
                            key={index}
                            position={[item.lat, item.lng]}
                            eventHandlers={{
                                click: () => {
                                    setSelectedItem(item)
                                },
                            }}
                        >
                            <Popup>
                                <Link href={`/${item.category}?id=${item.id}`}>
                                    {locale === "fr" ? item.nameFR : item.nameEN}
                                </Link>
                            </Popup>
                        </Marker>
                    ))}
                    <FitBounds />
                </MapContainer>
            </div>

            {/* Card */}
            <motion.a
                href={`/${selectedItem.category}?id=${selectedItem.id}`}
                className="flex flex-row md:flex-col items-center md:items-stretch shrink-0 bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] md:hover:scale-105 w-full md:w-[35%]"
                variants={cardVariant}
            >
                {/* Image */}
                <div className="relative w-28 h-full md:w-full md:h-56 shrink-0">
                    <Image
                        src={selectedItem.images[0]}
                        alt={locale === "fr" ? selectedItem.nameFR : selectedItem.nameEN}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center  items-start md:items-center gap-2 md:gap-4 flex-1 p-4 text-left md:text-center">
                    <h3 className="text-lg md:text-xl text-primary font-semibold ">
                        {locale === "fr" ? selectedItem.nameFR : selectedItem.nameEN}
                    </h3>
                    <span className="text-primary-foreground uppercase tracking-wide font-medium font-inter">
                        {t1(selectedItem.type)}
                    </span>
                    <span className=" font-semibold text-sm text-muted-foreground">
                        {t2("from")} {selectedItem.price} €
                    </span>
                </div>
            </motion.a>
        </motion.div>
    )
}

export default BandMap
