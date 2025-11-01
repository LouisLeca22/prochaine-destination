"use client";

import { Activity } from "@/data";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useActivityFilterStore } from "@/store/activityFilterState";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import {
    Calendar,
    Clock,
    MapPin,
    Leaf,
    Users,
    ExternalLink,
    Hash,
    CheckCircle2,
    Info,
} from "lucide-react";

import { Button } from "@/components/ui/Button_temp";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/Popover";
import { Calendar as ShadCalendar } from "@/components/ui/Calendar";

import dynamic from "next/dynamic";

import "swiper/css";
import "swiper/css/pagination";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// Import dynamique de Leaflet pour éviter les erreurs SSR
const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });

interface ActivityDetailProps {
    activities: Activity[];
    closeDrawer: () => void;
    openDrawer: (id: number) => void;
}

export default function ActivityDetail({
    activities,
    closeDrawer,
    openDrawer,
}: ActivityDetailProps) {
    const locale = useCurrentLocale();
    const t = useScopedI18n("Types")
    const { selectedId } = useActivityFilterStore();
    const activity = activities.find((a) => a.id === selectedId);
    if (!activity) return null;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeDrawer()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <AnimatePresence mode="wait">
            {selectedId !== null && (
                <motion.div
                    className="fixed inset-0 flex justify-end z-50 bg-black/30 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white w-full h-full relative overflow-y-auto shadow-xl"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.4 }}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 bg-primary text-white cursor-pointer active:scale-110 rounded-full w-12 h-12 flex items-center justify-center text-xl font-extrabold z-80 shadow-md"
                            onClick={closeDrawer}
                        >
                            ✕
                        </button>

                        {/* Swiper */}
                        <div className="w-full h-84 relative">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 2500, disableOnInteraction: false }}
                                modules={[Pagination, Autoplay]}
                                className="h-full w-full"
                            >
                                {activity.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={image}
                                            alt={locale === "fr" ? activity.nameFR : activity.nameEN}
                                            fill
                                            className="object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Content */}
                        <motion.div
                            className="flex flex-col items-center max-w-3xl mx-auto mt-10 px-6 pb-20 space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {/* Titre & type */}
                            <h2 className="text-3xl font-bold text-center text-primary">
                                {locale === "fr" ? activity.nameFR : activity.nameEN}
                            </h2>
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                                <span className="uppercase tracking-wide font-medium">
                                    {t(activity.type)}
                                </span>
                                <span className="text-primary font-semibold">— {activity.price} €</span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2  justify-center">
                                {activity.tagsFR.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full flex items-center gap-1"
                                    >
                                        <Hash className="w-4 h-4" /> {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 text-base leading-relaxed text-center mt-2">
                                {locale === "fr" ? activity.descriptionFR : activity.descriptionEN}
                            </p>

                            {/* Infos principales */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 w-full">
                                <InfoCard icon={<Clock />} text={activity.duration} />
                                <InfoCard icon={<Calendar />} text={activity.season} />
                                <InfoCard
                                    icon={<Users />}
                                    text={activity.family ? "Famille" : "Adultes"}
                                />
                                <InfoCard
                                    icon={<Leaf />}
                                    text={
                                        activity.ecoFriendly
                                            ? "Éco-responsable"
                                            : locale === "fr"
                                                ? "Standard"
                                                : "Standard"
                                    }
                                />
                                <InfoCard
                                    icon={<CheckCircle2 />}
                                    text={
                                        activity.bookingRequired
                                            ? locale === "fr"
                                                ? "Réservation obligatoire"
                                                : "Booking required"
                                            : locale === "fr"
                                                ? "Sans réservation"
                                                : "No booking required"
                                    }
                                />
                            </div>

                            {/* Horaires & point de RDV */}
                            <motion.div
                                className="bg-gray-50 rounded-2xl p-5 w-full mt-4 flex flex-col gap-3"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                            >
                                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                                    <Clock className="w-5 h-5 text-primary" />
                                    {locale === "fr" ? "Horaires de départ" : "Start times"}
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {activity.startTimes.map((time, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                        >
                                            {time}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 mt-4 text-gray-800 font-semibold">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    {locale === "fr" ? "Point de rendez-vous" : "Meeting point"}
                                </div>
                                <p className="text-gray-700 text-sm ml-7">{activity.meetingPoint}</p>
                            </motion.div>

                            {/* Carte Leaflet */}
                            <div className="w-full h-64 mt-6 rounded-2xl overflow-hidden shadow">
                                <MapContainer
                                    center={[activity.lat, activity.lng]}
                                    zoom={13}
                                    style={{ width: "100%", height: "100%" }}
                                    scrollWheelZoom={false}
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution="&copy; OpenStreetMap contributors"
                                    />
                                    <Marker position={[activity.lat, activity.lng]}></Marker>
                                </MapContainer>
                            </div>



                            {/* Inclus */}
                            <motion.div
                                className="bg-gray-50 rounded-2xl p-4 w-full mt-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                            >
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-primary">
                                    <Info className="w-5 h-5" />
                                    {locale === "fr" ? "Inclus" : "Included"}
                                </h3>
                                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    {activity.includesFR.map((item, i) => (
                                        <li key={i} className="flex items-center gap-1">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Disponibilités */}
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="mt-4 border-primary text-primary">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        {locale === "fr" ? "Voir les dates disponibles" : "View available dates"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <ShadCalendar
                                        mode="multiple"
                                        selected={activity.availability.map((d) => new Date(d))}
                                    />
                                </PopoverContent>
                            </Popover>

                            {/* Lien externe */}
                            {activity.externalBookingLink && (
                                <Button
                                    className="mt-6 flex items-center gap-2 bg-primary text-white hover:bg-primary/90"
                                    onClick={() => window.open(activity.externalBookingLink, "_blank")}
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    {locale === "fr" ? "Réserver maintenant" : "Book now"}
                                </Button>
                            )}
                        </motion.div>

                        {/* Arrows */}
                        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                            <button
                                className="text-3xl font-bold text-gray-600 hover:text-primary"
                                onClick={() => {
                                    const index = activities.findIndex((a) => a.id === selectedId);
                                    const prev = activities[index - 1];
                                    if (prev) openDrawer(prev.id);
                                }}
                            >
                                ←
                            </button>
                        </div>

                        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                            <button
                                className="text-3xl font-bold text-gray-600 hover:text-primary"
                                onClick={() => {
                                    const index = activities.findIndex((a) => a.id === selectedId);
                                    const next = activities[index + 1];
                                    if (next) openDrawer(next.id);
                                }}
                            >
                                →
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* Sous-composant */
function InfoCard({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl text-gray-700 text-sm"
        >
            <span className="text-primary">{icon}</span>
            <span>{text}</span>
        </motion.div>
    );
}
