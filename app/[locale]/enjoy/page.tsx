"use client";

import ActivitiesList from "@/components/Enjoy/ActivitiesList";
import ActivitiesFilter from "@/components/Enjoy/ActivitiesFilter";
import { activities, Activity } from "@/data";
import { useActivityFilterStore } from "@/store/activityFilterStore";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

const ActivitiesMap = dynamic(() => import("@/components/Enjoy/ActivitiesMap"), { ssr: false });

export default function HomePage() {

    const allActivities = useMemo(() => activities, []);

    const { keyword, price, type } = useActivityFilterStore();
    const [mapBounds, setMapBounds] = useState<L.LatLngBounds | null>(null);


    const [filteredActivities, setFilteredActivities] = useState<Activity[]>(allActivities);

    useEffect(() => {
        let filtered = allActivities.filter((a) => {
            const matchesKeyword = a.name.toLowerCase().includes(keyword.toLowerCase());
            const matchesType = type === "all" || a.type === type;
            const matchesPrice = a.price >= price[0] && a.price <= price[1];

            return matchesKeyword && matchesType && matchesPrice;
        });

        if (mapBounds) {
            filtered = filtered.filter((a) =>
                mapBounds.contains([a.lat, a.lng])
            );
        }


        setFilteredActivities(filtered);
    }, [keyword, type, price, mapBounds, allActivities]);


    return (
        <div className="flex pt-5 flex-col gap-4 p-4 h-screen">
            <ActivitiesFilter />
            <div className="flex flex-1 gap-4 overflow-hidden">
                <div className="w-1/2 overflow-y-auto">
                    <ActivitiesList activities={filteredActivities} />
                </div>

                <div className="w-1/2">
                    <ActivitiesMap activities={filteredActivities} onBoundsChange={setMapBounds}
                    />
                </div>
            </div>
        </div>

    );
}
