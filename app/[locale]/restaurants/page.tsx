"use client";
import SplitText from "@/components/ui/SplitText";
import RestaurantsList from "@/components/Restaurants/RestaurantsList";
import RestaurantsFilter from "@/components/Restaurants/RestaurantsFilter";
import { Restaurant, restaurants } from "@/data";
import { useRestaurantFilterStore } from "@/store/restaurantFilterState";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";

import { useRouter, useSearchParams } from "next/navigation";

const RestaurantsMap = dynamic(() => import("@/components/Restaurants/RestaurantMap"), { ssr: false });

export default function RestaurantsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const idFromUrl = searchParams.get("id");


    const locale = useCurrentLocale()
    const t = useScopedI18n("Restaurants")

    const isMobile = useIsMobile();

    const allRestaurants = useMemo(() => restaurants, []);

    const { keyword, price, type, mapBounds, selectedId, setKeyword, setType, setPrice, setSelectedId } = useRestaurantFilterStore();


    const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(allRestaurants);
    useEffect(() => {
        const keywordParam = searchParams.get("keyword") || "";
        const typeParam = (searchParams.get("type") as any) || "all";
        const minPrice = Number(searchParams.get("minPrice")) || 0;
        const maxPrice = Number(searchParams.get("maxPrice")) || 100;

        setKeyword(keywordParam);
        setType(typeParam);
        setPrice([minPrice, maxPrice]);
    }, []);

    useEffect(() => {
        if (idFromUrl) {
            setSelectedId(Number(idFromUrl));
        }
    }, [idFromUrl, setSelectedId]);

    useEffect(() => {

        if (selectedId) {
            router.replace(`?id=${selectedId}`, { scroll: false });
            return;
        }
        const params = new URLSearchParams();


        if (keyword) params.set("keyword", keyword);
        if (type && type !== "all") params.set("type", type);
        if (price[0] !== 0) params.set("minPrice", price[0].toString());
        if (price[1] !== 100) params.set("maxPrice", price[1].toString());

        const queryString = params.toString();
        const newUrl = queryString ? `?${queryString}` : window.location.pathname;

        router.replace(newUrl, { scroll: false });
    }, [keyword, type, price, router]);

    useEffect(() => {
        let filtered = allRestaurants.filter((a) => {
            const name = locale === "fr" ? a.nameFR : a.nameEN
            const matchesKeyword = name.toLowerCase().includes(keyword.toLowerCase());
            const matchesType = type === "all" || a.type === type;
            const matchesPrice = a.price >= price[0] && a.price <= price[1];

            return matchesKeyword && matchesType && matchesPrice;
        });


        if (mapBounds && !isMobile) {
            filtered = filtered.filter((a) =>
                mapBounds.contains([a.lat, a.lng])
            );
        }


        setFilteredRestaurants(filtered);
    }, [keyword, type, price, mapBounds, isMobile, allRestaurants]);


    return (
        <div className="flex flex-col gap-4 p-4 h-screen">
            <SplitText
                text={t("Heading")}
                className="text-3xl md:p-3 mt-20 md:mt-0 tracking-wide md:text-5xl text-primary font-extrabold text-shadow-sm font-inter "
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign={isMobile ? "center" : "end"}
            />
            <RestaurantsFilter restaurantsCount={filteredRestaurants.length} />
            <div className="flex md:flex-row flex-1 gap-4 overflow-hidden">
                <div className="w-full md:w-1/2 overflow-y-auto">
                    <RestaurantsList restaurants={filteredRestaurants} />
                </div>

                <div className="md:block hidden w-1/2">
                    <RestaurantsMap restaurants={filteredRestaurants}
                    />
                </div>
            </div>
        </div>

    );
}
