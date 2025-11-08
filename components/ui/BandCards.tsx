"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";


interface Card {
    image: string;
    title: string;
    description: string;
    offsetClass?: string;
    href: string;
}

interface CardGridProps {
    cards: Card[];
}

export default function BandCards({ cards }: CardGridProps) {
    const isMobile = useIsMobile()
    return (
        <div className={isMobile ? 'bg-linear-to-b from-primary to-primary-foreground' : ''}>
            <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
            <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
                    {cards.map((card, index) => (
                        <motion.div
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
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl text-primary font-semibold mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
