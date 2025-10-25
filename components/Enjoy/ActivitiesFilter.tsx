"use client";

import { ActivityType } from "@/data";
import { useActivityFilterStore } from "@/store/activityFilterStore";

export default function ActivitiesFilter({ activitiesCount }: { activitiesCount: number }) {
    const { keyword, price, type, setKeyword, setType, setPrice, resetFilters } = useActivityFilterStore();

    return (
        <div className="md:w-[70vw] md:self-end w-full flex-col md:flex-row flex gap-4 items-center bg-gray-100 p-3 rounded-xl">
            <span className="ml-4 text-gray-700 font-medium">
                {activitiesCount} activité{activitiesCount > 1 ? "s" : ""} trouvée{activitiesCount > 1 ? "s" : ""}
            </span>

            <input
                type="text"
                placeholder="Recherche..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="border rounded-lg px-2 py-1 flex-1"
            />

            <select
                value={type}
                onChange={(e) => setType(e.target.value as ActivityType | "all")}
                className="border rounded-lg px-2 py-1"
            >
                <option value="all">Tous les types</option>
                {Object.entries(ActivityType).map(([key, val]) => (
                    <option key={key} value={val}>
                        {key
                            .toLowerCase()
                            .replace(/_/g, " ")
                            .replace(/^\w/, (c) => c.toUpperCase())}
                    </option>
                ))}
            </select>

            <div className="flex items-center gap-2">
                <label>Prix :</label>
                <input
                    type="number"
                    min={0}
                    max={100}
                    value={price[0]}
                    onChange={(e) =>
                        setPrice([Number(e.target.value), price[1]])
                    }
                    className="w-16 border rounded-lg px-1"
                />
                <span>-</span>
                <input
                    type="number"
                    min={0}
                    max={100}
                    value={price[1]}
                    onChange={(e) =>
                        setPrice([price[0], Number(e.target.value)])
                    }
                    className="w-16 border rounded-lg px-1"
                />
            </div>
            <button
                onClick={resetFilters}
                className="bg-white border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-200 transition"
            >
                Réinitialiser
            </button>
        </div>
    );
}