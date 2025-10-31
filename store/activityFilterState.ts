import { create } from "zustand";
import { ActivityType } from "@/data";
import L from "leaflet";

interface ActivityFilterState {
    keyword: string;
    type: ActivityType | "all";
    price: [number, number];
    mapBounds: L.LatLngBounds | null;
    selectedId: number | null;
    setSelectedId: (id: number | null) => void;

    setKeyword: (keyword: string) => void;
    setType: (type: ActivityType | "all") => void;
    setPrice: (price: [number, number]) => void;
    setMapBounds: (bounds: L.LatLngBounds | null) => void;
    resetFilters: () => void;
}

export const useActivityFilterStore = create<ActivityFilterState>((set) => ({
    keyword: "",
    type: "all",
    price: [0, 100],
    mapBounds: null,
    selectedId: null,

    setKeyword: (keyword) => set({ keyword }),
    setType: (type) => set({ type }),
    setPrice: (price) => set({ price }),
    setMapBounds: (bounds) => set({ mapBounds: bounds }),
    setSelectedId: (id) => set({ selectedId: id }),


    resetFilters: () =>
        set({
            keyword: "",
            type: "all",
            price: [0, 100],
            mapBounds: null,
        }),
}));
