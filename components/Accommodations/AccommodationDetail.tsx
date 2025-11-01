"use client";

import { Accommodation } from "@/data";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useAccommodationFilterStore } from "@/store/accommodationFilterState";

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
    X,
    Mail,
    Phone,
    Globe,
    Facebook,
    Instagram,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
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
import Separator from "@/components/ui/Separator";

// Import dynamique de Leaflet pour éviter les erreurs SSR
const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });

interface AccommodationDetailProps {
    accommodations: Accommodation[];
    closeDrawer: () => void;
    openDrawer: (id: number) => void;
}

export default function AccommodationDetail({
    accommodations,
    closeDrawer,
    openDrawer,
}: AccommodationDetailProps) {
    const locale = useCurrentLocale();
    const t1 = useScopedI18n("Types")
    const t2 = useScopedI18n("Details")
    const { selectedId } = useAccommodationFilterStore();
    const accommodation = accommodations.find((a) => a.id === selectedId);

    if (!accommodation) return null;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeDrawer()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    if (accommodation) {
        const tags = locale === "fr" ? accommodation.tagsFR : accommodation?.tagsEN
        const includes = locale === "fr" ? accommodation.includesFR : accommodation?.includesEN

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
                                className="absolute top-4 right-4 text-secondary rounded-2xl cursor-pointer z-80 "
                                onClick={closeDrawer}
                            >
                                <X strokeWidth={3} style={{
                                    filter: "drop-shadow(0 0 2px #40A0FF) drop-shadow(0 0 2px 40A0FF)"
                                }} size={40} className="text-shadow-lg hover:scale-110 transition-transform" />
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
                                    {accommodation.images.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                src={image}
                                                alt={locale === "fr" ? accommodation.nameFR : accommodation.nameEN}
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
                                <h2 className="text-3xl font-bold text-center mb-2 text-primary">
                                    {locale === "fr" ? accommodation.nameFR : accommodation.nameEN}
                                </h2>
                                <Separator width="w-84" />
                                <div className="flex items-center gap-2 text-gray-600 text-sm">
                                    <span className="uppercase tracking-wide font-medium font-inter">
                                        {t1(accommodation.type)}
                                    </span>
                                    <span className="text-primary font-semibold"> — {t2("from")} {accommodation.price} €</span>
                                </div>

                                {/* Tags */}
                                <motion.div initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }} className="flex flex-wrap gap-2  justify-center">
                                    {tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full flex items-center gap-1"
                                        >
                                            <Hash className="w-4 h-4" /> {tag}
                                        </span>
                                    ))}
                                </motion.div>

                                {/* Description */}
                                <motion.p initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }} className="text-gray-700 text-base leading-relaxed text-center mt-2 font-inter">
                                    {locale === "fr" ? accommodation.descriptionFR : accommodation.descriptionEN}
                                </motion.p>

                                {/* Infos principales */}
                                <motion.div
                                    className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 w-full"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { staggerChildren: 0.15 },
                                        },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {/* <InfoCard icon={<Clock />} text={accommodation.duration} />
                                    <InfoCard icon={<Calendar />} text={t2(accommodation.season)} />
                                    {accommodation.family && <InfoCard icon={<Users />} text={t2("familyFriendly")} />}
                                    {accommodation.ecoFriendly && <InfoCard icon={<Leaf />} text={t2("ecoFriendly")} />}
                                    {accommodation.ecoFriendly && <InfoCard icon={<CheckCircle2 />} text={t2("bookingRequired")} />} */}
                                </motion.div>

                                {/* Horaires + Lieu */}
                                <motion.div
                                    className="bg-gray-50 rounded-2xl p-5 w-full mt-4 flex flex-col gap-3"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* <div className="flex items-center gap-2 text-gray-800 font-semibold">
                                        <Clock className="w-5 h-5 text-primary" />
                                        {t2("startTimes")}
                                    </div>
                                    <div className="flex gap-2 flex-wrap">
                                        {accommodation.startTimes.map((time, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                            >
                                                {time}
                                            </span>
                                        ))}
                                    </div> */}

                                    <div className="flex items-center gap-2 mt-4 text-gray-800 font-semibold">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        {t2("address")}
                                    </div>
                                    <p className="text-gray-700 text-sm ml-7">{accommodation.meetingPoint}</p>
                                </motion.div>

                                {/* Carte Leaflet */}
                                <motion.div initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }} className="w-full h-64 mt-6 rounded-2xl overflow-hidden shadow">
                                    <MapContainer
                                        center={[accommodation.lat, accommodation.lng]}
                                        zoom={13}
                                        style={{ width: "100%", height: "100%" }}
                                        scrollWheelZoom={false}
                                    >
                                        <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution="&copy; OpenStreetMap contributors"
                                        />
                                        <Marker position={[accommodation.lat, accommodation.lng]}></Marker>
                                    </MapContainer>
                                </motion.div>

                                {/* Inclus */}
                                <motion.div
                                    className="bg-gray-50 rounded-2xl p-4 w-full mt-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-primary">
                                        <Info className="w-5 h-5" />
                                        {t2("included")}
                                    </h3>
                                    <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                        {includes.map((item, i) => (
                                            <li key={i} className="flex items-center gap-1">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Organizer / Contact Info */}
                                <motion.div
                                    className="bg-gray-50 rounded-2xl p-4 w-full mt-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-primary">
                                        <Users className="w-5 h-5" />
                                        {accommodation.provider}
                                    </h3>

                                    {/* Provider */}
                                    <p className="text-gray-800 font-medium">{accommodation.provider}</p>

                                    {/* Contact rows */}
                                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                                        {/* Row 1: Email / Phone */}
                                        <a
                                            href={`mailto:${accommodation.email}`}
                                            className="flex items-center gap-2 hover:text-primary transition-colors"
                                        >
                                            <Mail className="w-4 h-4 text-primary" />
                                            {accommodation.email}
                                        </a>
                                        <a
                                            href={`tel:${accommodation.phone}`}
                                            className="flex items-center gap-2 hover:text-primary transition-colors"
                                        >
                                            <Phone className="w-4 h-4 text-primary" />
                                            {accommodation.phone}
                                        </a>

                                        {/* Row 2: Website / Socials */}
                                        <a
                                            href={accommodation.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 hover:text-primary transition-colors"
                                        >
                                            <Globe className="w-4 h-4 text-primary" />
                                            {accommodation.website.replace(/^https?:\/\//, "")}
                                        </a>
                                        <div className="flex items-center gap-4">
                                            <a
                                                href={accommodation.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Facebook"
                                            >
                                                <Facebook className="w-5 h-5 text-primary hover:text-secondary transition-colors" />
                                            </a>
                                            <a
                                                href={accommodation.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Instagram"
                                            >
                                                <Instagram className="w-5 h-5 text-primary hover:text-secondary transition-colors" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>


                                {/* Actions */}
                                <motion.div
                                    className="flex flex-col sm:flex-row justify-center gap-4 mt-10 w-full max-w-md"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="flex-1 border-gray-300 text-primary hover:bg-primary/10 transition-colors"
                                            >
                                                <Calendar className="mr-2 h-4 w-4" />
                                                {t2("availableDates")}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <ShadCalendar
                                                mode="multiple"
                                                selected={accommodation.availability.map((d) => new Date(d))}
                                            />
                                        </PopoverContent>
                                    </Popover> */}

                                    {accommodation.externalBookingLink && (
                                        <Button
                                            className="flex-1 bg-secondary text-primary-foreground hover:bg-secondary/90 transition-colors"
                                            onClick={() => window.open(accommodation.externalBookingLink, "_blank")}
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            {t2("bookNow")}
                                        </Button>
                                    )}
                                </motion.div>

                            </motion.div>

                            {/* Arrows */}
                            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                                <button
                                    className="text-3xl font-bold text-secondary-foreground hover:text-primary cursor-pointer"
                                    onClick={() => {
                                        const index = accommodations.findIndex((a) => a.id === selectedId);
                                        const prev = accommodations[index - 1];
                                        if (prev) openDrawer(prev.id);
                                    }}
                                >
                                    ←
                                </button>
                            </div>

                            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                                <button
                                    className="text-3xl font-bold text-secondary-foreground hover:text-secondary cursor-pointer"
                                    onClick={() => {
                                        const index = accommodations.findIndex((a) => a.id === selectedId);
                                        const next = accommodations[index + 1];
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl text-gray-700 text-sm shadow-sm"
            >
                <span className="text-primary">{icon}</span>
                <span>{text}</span>
            </motion.div>
        );
    }
}
