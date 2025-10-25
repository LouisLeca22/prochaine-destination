"use client";

import ActivitiesList from "@/components/Enjoy/ActivitiesList";
import Filters from "@/components/Enjoy/Filters";
import { activities, Activity } from "@/data";
import { useActivityFilterStore } from "@/store/activityFilterStore";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

const ActivitiesMap = dynamic(() => import("@/components/Enjoy/ActivitiesMap"), { ssr: false });

export default function HomePage() {

    const allActivities = useMemo(() => activities, []);

    const { keyword, price, type } = useActivityFilterStore();


    const [filteredActivities, setFilteredActivities] = useState<Activity[]>(allActivities);

    useEffect(() => {
        let filtered = allActivities.filter((a) => {
            const matchesKeyword = a.name.toLowerCase().includes(keyword.toLowerCase());
            const matchesType = type === "all" || a.type === type;
            const matchesPrice = a.price >= price[0] && a.price <= price[1];
            return matchesKeyword && matchesType && matchesPrice;
        });


        setFilteredActivities(filtered);
    }, [keyword, type, price, allActivities]);



    return (
        <div className="flex pt-5 flex-col gap-4 p-4 h-screen">
            <Filters />

            <div className="flex flex-1 gap-4 overflow-hidden">
                {/* Liste */}
                <div className="w-1/2 overflow-y-auto">
                    <ActivitiesList activities={filteredActivities} />
                </div>

                {/* Carte */}
                <div className="w-1/2">
                    <ActivitiesMap activities={filteredActivities} />
                </div>
            </div>
        </div>

    );
}
