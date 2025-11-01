import { create } from "zustand";
import { RestaurantType } from "@/data";
import L from "leaflet";

interface RestaurantFilterState {
    keyword: string;
    type: RestaurantType | "all";
    price: [number, number];
    mapBounds: L.LatLngBounds | null;
    selectedId: number | null;
    setSelectedId: (id: number | null) => void;

    setKeyword: (keyword: string) => void;
    setType: (type: RestaurantType | "all") => void;
    setPrice: (price: [number, number]) => void;
    setMapBounds: (bounds: L.LatLngBounds | null) => void;
    resetFilters: () => void;
}

export const useRestaurantFilterStore = create<RestaurantFilterState>((set) => ({
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
