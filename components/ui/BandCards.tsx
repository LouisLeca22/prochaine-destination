"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { BaseItem } from "@/data";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";





export default function BandCards({ items }: { items: BaseItem[] }) {
    const locale = useCurrentLocale()
    const t1 = useScopedI18n("Types")
    const t2 = useScopedI18n("Details")
    const isMobile = useIsMobile()
    return (
        <div className={isMobile ? 'bg-linear-to-b from-primary to-primary-foreground' : ''}>
            <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
            <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
                    {items.map((item, index) => (
                        <motion.a
                            href={`/${item.category}?id=${item.id}`}
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            viewport={{
                                amount: 0.5,
                                once: true
                            }}
                            className="flex-1 bg-white rounded-3xl shadow-xl overflow-hidden"
                        >
                            <div className="relative w-full h-56">
                                <Image
                                    src={item.images[0]}
                                    alt={locale === "fr" ? item.nameFR : item.nameEN}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            <div className="p-6 flex flex-col text-center justify-center items-center ">
                                <h3 className="text-xl text-primary font-semibold mb-2 h-12 line-clamp-2">
                                    {locale === "fr" ? item.nameFR : item.nameEN}
                                </h3>
                                <span className="text-primary-foreground uppercase tracking-wide font-medium font-inter">
                                    {t1(item.type)}
                                </span>
                                <span className=" font-semibold text-sm text-muted-foreground">
                                    {t2("from")} {item.price} €
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}
