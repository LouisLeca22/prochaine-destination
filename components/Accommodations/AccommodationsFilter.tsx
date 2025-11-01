"use client";

import { AccommodationType } from "@/data";
import { useScopedI18n } from "@/locales/client";
import { useAccommodationFilterStore } from "@/store/accommodationFilterState";
import { Input } from "@/components/ui/Input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select"
import CountUp from "../ui/CountUp";

export default function AccommodationsFilter({ accommodationsCount }: { accommodationsCount: number }) {
    const { keyword, price, setKeyword, setType, setPrice, resetFilters } = useAccommodationFilterStore();
    const t1 = useScopedI18n("Filter")
    const t2 = useScopedI18n("Types")
    const t3 = useScopedI18n("Accommodations")


    return (
        <div className="shadow-sm md:h-15 text-primary-foreground self-center w-full md:w-[70vw] flex-col md:flex-row flex gap-4 items-center bg-secondary p-3 mb-3 rounded-xl">
            <span className="ml-4 font-medium">
                <CountUp from={0} to={accommodationsCount} className="mr-1" />
                {accommodationsCount > 1 ? t3("foundAccommodationsPlural") : t3("foundAccommodationSingular")}
            </span>

            <Input
                type="text"
                placeholder={t1("searchPlaceholder")}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="border text-primary-foreground! border-primary-foreground px-2 py-1 flex-1 dark:bg-transparent placeholder:text-primary-foreground"
            />

            <Select defaultValue="all" onValueChange={(val) => setType(val as AccommodationType | "all")}
            >
                <SelectTrigger className="md:w-[180px] w-full text-primary-foreground! border-primary-foreground dark:bg-transparent">
                    <SelectValue className="hover:bg-primary-foreground! hover:text-white!" />
                </SelectTrigger>
                <SelectContent className="bg-secondary border-primary-foreground">
                    <SelectItem
                        className="text-primary-foreground! data-[state=checked]:bg-transparent! data-[state=checked]:text-primary-foreground! 
 hover:bg-primary-foreground! hover:text-white!"
                        value="all"
                    >
                        {t1("anyType")}
                    </SelectItem>
                    {Object.entries(AccommodationType).map(([key, val]) => (
                        <SelectItem className="text-primary-foreground! hover:bg-primary-foreground! hover:text-white!" key={key} value={val}>
                            {t2(key as keyof typeof AccommodationType)}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
                <label>{t1("priceLabel")}</label>

                <Input
                    inputMode="numeric"
                    pattern="[0-9]*"
                    min={0}
                    value={price[0]}
                    onChange={(e) => {
                        const value = e.target.value
                        if (/^\d*$/.test(value)) {

                            setPrice([Number(e.target.value), price[1]])
                        }
                    }
                    }
                    className="w-20 border text-primary-foreground! text-center border-primary-foreground rounded-lg px-1 dark:bg-transparent"
                />
                <span>-</span>

                <Input
                    min={0}
                    value={price[1]}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    onChange={(e) => {
                        const value = e.target.value
                        if (/^\d*$/.test(value)) {
                            setPrice([price[0], Number(e.target.value)])
                        }
                    }
                    }
                    className="w-20 border text-primary-foreground! text-center border-primary-foreground rounded-lg px-1 dark:bg-transparent"
                />
            </div>
            <button
                onClick={resetFilters}
                className="bg-secondary-foreground text-primary-foreground! border border-transparent cursor-pointer active:scale-110 px-3 py-1 rounded-lg hover:bg-gray-200 transition"
            >
                {t1("reset")}
            </button>
        </div>
    );
}