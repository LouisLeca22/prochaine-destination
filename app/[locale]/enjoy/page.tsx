"use client";

import ActivitiesList from "@/components/Enjoy/ActivitiesList";
import ActivitiesFilter from "@/components/Enjoy/ActivitiesFilter";
import { activities, Activity } from "@/data";
import { useActivityFilterStore } from "@/store/activityFilterStore";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ActivitiesMap = dynamic(() => import("@/components/Enjoy/ActivitiesMap"), { ssr: false });

export default function HomePage() {
    const isMobile = useIsMobile();

    const allActivities = useMemo(() => activities, []);

    const { keyword, price, type, mapBounds } = useActivityFilterStore();


    const [filteredActivities, setFilteredActivities] = useState<Activity[]>(allActivities);

    useEffect(() => {
        let filtered = allActivities.filter((a) => {
            const matchesKeyword = a.name.toLowerCase().includes(keyword.toLowerCase());
            const matchesType = type === "all" || a.type === type;
            const matchesPrice = a.price >= price[0] && a.price <= price[1];

            return matchesKeyword && matchesType && matchesPrice;
        });


        if (mapBounds && !isMobile) {
            filtered = filtered.filter((a) =>
                mapBounds.contains([a.lat, a.lng])
            );
        }


        setFilteredActivities(filtered);
    }, [keyword, type, price, mapBounds, isMobile, allActivities]);


    return (
        <div className="flex pt-25 md:pt-6 flex-col gap-4 p-4 h-screen">
            <ActivitiesFilter activitiesCount={filteredActivities.length} />
            <div className="flex md:flex-row flex-1 gap-4 overflow-hidden">
                <div className="w-full md:w-1/2 overflow-y-auto">
                    <ActivitiesList activities={filteredActivities} />
                </div>

                <div className="md:block hidden w-1/2">
                    <ActivitiesMap activities={filteredActivities}
                    />
                </div>
            </div>
        </div>

    );
}
