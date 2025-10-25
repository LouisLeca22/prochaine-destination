"use client";

import ActivitiesList from "@/components/Enjoy/ActivitiesList";
import Filters from "@/components/Enjoy/Filters";
import { activities } from "@/data";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const ActivitiesMap = dynamic(() => import("@/components/Enjoy/ActivitiesMap"), { ssr: false });

export default function HomePage() {

    const allActivities = useMemo(() => activities, []);

    return (
        <div className="flex pt-5 flex-col gap-4 p-4 h-screen">
            {/* ✅ Plus besoin de props */}
            <Filters />

            <div className="flex flex-1 gap-4 overflow-hidden">
                {/* Liste */}
                <div className="w-1/2 overflow-y-auto">
                    <ActivitiesList activities={allActivities} />
                </div>

                {/* Carte */}
                <div className="w-1/2">
                    <ActivitiesMap activities={allActivities} />
                </div>
            </div>
        </div>

    );
}
