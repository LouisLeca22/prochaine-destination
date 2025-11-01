import { create } from "zustand";
import { AccommodationType } from "@/data";
import L from "leaflet";

interface AccommodationFilterState {
    keyword: string;
    type: AccommodationType | "all";
    price: [number, number];
    mapBounds: L.LatLngBounds | null;
    selectedId: number | null;
    setSelectedId: (id: number | null) => void;

    setKeyword: (keyword: string) => void;
    setType: (type: AccommodationType | "all") => void;
    setPrice: (price: [number, number]) => void;
    setMapBounds: (bounds: L.LatLngBounds | null) => void;
    resetFilters: () => void;
}

export const useAccommodationFilterStore = create<AccommodationFilterState>((set) => ({
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
            price: [0, 1000],
            mapBounds: null,
        }),
}));
