"use client";
import { MapPin } from "lucide-react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Accommodation } from "@/data";
import Image from "next/image";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import AccommodationDetail from "./AccommodationDetail";
import { useAccommodationFilterStore } from "@/store/accommodationFilterState";

export default function AccommodationsList({ accommodations }: { accommodations: Accommodation[] }) {
    const locale = useCurrentLocale()

    const t1 = useScopedI18n("Accommodations")
    const t2 = useScopedI18n("Types")

    const router = useRouter();
    const searchParams = useSearchParams();


    const { selectedId, setSelectedId } = useAccommodationFilterStore()


    useEffect(() => {
        const id = searchParams.get("id");
        setSelectedId(id ? Number(id) : null);
    }, [searchParams]);

    const openDrawer = (id: number) => {
        setSelectedId(id);
        router.push(`?id=${id}`);
    };

    const closeDrawer = () => {
        setSelectedId(null);
        router.push(window.location.pathname);
    };

    if (accommodations.length === 0)
        return <p className="h-full p-4 flex items-center justify-center self-end text-primary text-2xl">{t1("NoAccommodation")}</p>;

    return (
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
                {accommodations.map((a) => (
                    <div
                        key={a.id}
                        className="flex flex-col bg-white rounded-lg shadow hover:shadow-lg overflow-hidden cursor-pointer"
                        onClick={() => openDrawer(a.id)}
                    >
                        <div className="relative w-full h-64 overflow-hidden">
                            <Image
                                src={a.images[0]}
                                alt={locale == "fr" ? a.nameFR : a.nameEN}
                                fill
                                className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                        <div className="p-4 flex flex-col items-center text-center">
                            <h3 className="font-semibold text-cyan-500 text-lg">{locale == "fr" ? a.nameFR : a.nameEN}</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                {t2(a.type)} — {a.price} €
                            </p>

                            <div className="flex items-center gap-1 text-gray-600 text-sm mt-2">
                                <MapPin size={16} className="text-primary" />
                                <span>{a.meetingPoint}</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>


            {selectedId && <AccommodationDetail accommodations={accommodations} closeDrawer={closeDrawer} openDrawer={openDrawer} />}
        </div>
    );
}