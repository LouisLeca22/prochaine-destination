"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { BaseItem } from "@/data";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";





const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariant: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function ThreeCards({ items }: { items: BaseItem[] }) {
    const t1 = useScopedI18n("Types")
    const t2 = useScopedI18n("Details")
    const locale = useCurrentLocale()
    return (
        <motion.section
            className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
        >
            {items.map((item, index) => (
                <motion.a
                    href={`/${item.category}?id=${item.id}`}
                    key={index}
                    className={`relative bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105`}
                    variants={cardVariant}
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
                    <div className="p-6 flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl text-primary font-semibold mb-2 h-12 line-clamp-2">{locale === "fr" ? item.nameFR : item.nameEN}</h3>
                        <span className="text-primary-foreground uppercase tracking-wide font-medium font-inter">
                            {t1(item.type)}
                        </span>
                        <span className=" font-semibold text-sm text-muted-foreground">
                            {t2("from")} {item.price} €
                        </span>
                    </div>
                </motion.a>
            ))}
        </motion.section>
    );
}
