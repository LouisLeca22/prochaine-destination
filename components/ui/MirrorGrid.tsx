"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BaseItem } from "@/data";
import { useCurrentLocale } from "@/locales/client";



interface ImageGridProps {
    cards: BaseItem[];
    className?: string;
    animateOnce?: boolean;
    stagger?: number;
}

export default function ImageGrid({
    cards,
    className = "",
    animateOnce = true,
    stagger = 0.1,
}: ImageGridProps) {
    const locale = useCurrentLocale()
    return (
        <div
            className={`
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-4
        md:grid-rows-2
        gap-4
        max-w-[1000px]
        mx-auto
        p-4
        md:h-[600px]
        ${className}
      `}
        >
            {cards.map((card, i) => (
                <motion.a
                    href={`/${card.category}?id=${card.id}`}
                    key={i}
                    className={`
            relative rounded-2xl overflow-hidden group text-center
          ${i === 0 || i === 3 ? " md:row-span-2" : ""}
            aspect-4/3 md:aspect-auto
          `}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: i * stagger, ease: "easeOut" }}
                    viewport={{ once: animateOnce, amount: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Background image */}
                    <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src={card.images[0]}
                            alt={locale === "fr" ? card.nameFR : card.nameEN}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            priority={i < 2}
                        />
                    </motion.div>

                    {/* Permanent text overlay */}

                    <div
                        className="
                absolute inset-0 flex items-center justify-center
                bg-black/40 text-white text-lg font-semibold
              "
                    >
                        {locale === "fr" ? card.nameFR : card.nameEN}
                    </div>

                </motion.a>
            ))}
        </div>
    );
}