"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface Card {
    src: string;
    text?: string;
    span?: string;
    href: string
}

interface ImageGridProps {
    cards: Card[];
    className?: string;
    animateOnce?: boolean;
    stagger?: number;
}

export default function ImageGrid({
    cards,
    className = "",
    animateOnce = false,
    stagger = 0.1,
}: ImageGridProps) {
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
                    href={card.href}
                    key={i}
                    className={`
            relative rounded-2xl overflow-hidden group
            ${card.span ?? ""}
            aspect-4/3 md:aspect-auto
          `}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: i * stagger, ease: "easeOut" }}
                    viewport={{ once: animateOnce, amount: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Background image */}
                    <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src={card.src}
                            alt={card.text ?? "Image"}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            priority={i < 2}
                        />
                    </motion.div>

                    {/* Permanent text overlay */}
                    {card.text && (
                        <div
                            className="
                absolute inset-0 flex items-center justify-center
                bg-black/40 text-white text-lg font-semibold
              "
                        >
                            {card.text}
                        </div>
                    )}
                </motion.a>
            ))}
        </div>
    );
}
