import { create } from "zustand";
import { ActivityType } from "@/data";

interface FiltersState {
    keyword: string;
    type: ActivityType | "all";
    price: [number, number];
    setKeyword: (keyword: string) => void;
    setType: (type: ActivityType | "all") => void;
    setPrice: (price: [number, number]) => void;
}

export const useActivityFilterStore = create<FiltersState>((set) => ({
    keyword: "",
    type: "all",
    price: [0, 100],
    setKeyword: (keyword) => set({ keyword }),
    setType: (type) => set({ type }),
    setPrice: (price) => set({ price }),
}));