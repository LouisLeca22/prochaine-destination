"use client";

import { Activity } from "@/data";

export default function ActivitiesList({ activities }: { activities: Activity[] }) {
    if (activities.length === 0)
        return <p className="p-4 text-gray-500">Aucune activité trouvée</p>;

    return (
        <ul className="divide-y">
            {activities.map((a) => (
                <li key={a.id} className="p-3 hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-semibold">{a.name}</h3>
                    <p className="text-sm text-gray-500">
                        {a.type} — {a.price} €
                    </p>
                </li>
            ))}
        </ul>
    );
}