"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface Card {
    image: string;
    title: string;
    description: string;
    offsetClass?: string;
}

interface CardGridProps {
    cards: Card[];
}

// Container for staggered animation
const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2, // cards fade in one after another
        },
    },
};

// Card fade-in only
const cardVariant: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function ThreeCards({ cards }: CardGridProps) {
    return (
        <motion.section
            className="max-w-6xl mx-auto my-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
        >
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    className={`relative bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 ${card.offsetClass || ""
                        }`}
                    variants={cardVariant}
                >
                    <div className="relative w-full h-56">
                        <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl text-primary font-semibold mb-2">{card.title}</h3>
                        <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                </motion.div>
            ))}
        </motion.section>
    );
}
