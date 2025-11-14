"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { BaseItem } from "@/data";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";





export default function Featured({ items, featured, heading, subHeading }: { items: BaseItem[], featured: BaseItem, heading: string, subHeading: string }) {
    const locale = useCurrentLocale()
    const t1 = useScopedI18n("Types")
    const t2 = useScopedI18n("Details")
    return (
        <div >
            <div className=" relative sm:h-[30vh] sm:flex flex-col p-6 sm:bg-linear-to-b from-primary to-primary-foreground">
                <h3 className="text-2xl text-center md:text-start sm:text-white">{subHeading}</h3>
                <h2 className="text-4xl font-inter text-center md:text-start md:mt-0 mt-5 sm:text-white ">{heading} </h2>
            </div>
            <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row  items-stretch gap-12">
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
                            className="relative md:flex-1 h-56 bg-white rounded-3xl shadow-xl overflow-hidden"
                        >
                            <Image
                                src={item.images[0]}
                                alt={locale === "fr" ? item.nameFR : item.nameEN}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-semibold text-center px-4">
                                    {locale === "fr" ? item.nameFR : item.nameEN}
                                </h3>
                            </div>
                        </motion.a>
                    ))}
                    <motion.a
                        href="/"
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{
                            amount: 0.5,
                            once: true
                        }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="block bg-white shadow-lg rounded-2xl overflow-hidden  w-full sm:w-80 md:-translate-y-1/3"
                    >
                        <div className="relative h-48 sm:h-64 w-full ">
                            <Image
                                src={featured.images[0]}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center p-4  text-center">
                            <h3 className="text-lg sm:text-xl text-primary font-semibold ">
                                {locale === "fr" ? featured.nameFR : featured.nameEN}

                            </h3>
                            <span className="text-primary-foreground uppercase tracking-wide font-medium font-inter">
                                {t1(featured.type)}
                            </span>
                            <span className=" font-semibold text-sm text-muted-foreground">
                                {t2("from")} {featured.price} €
                            </span>
                        </div>
                    </motion.a>

                </div>
            </div>
        </div>
    );
}
