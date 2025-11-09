"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BaseItem, } from "@/data";
import { useEffect, useState } from "react";
import { getRandomItems } from "@/utils";
import { useCurrentLocale } from "@/locales/client";


function OverlappingCards({
    items,
    buttonText,
}: { items: BaseItem[], buttonText: string }) {

    const locale = useCurrentLocale();
    const [cards, setCards] = useState<BaseItem[]>([])

    useEffect(() => {
        setCards(getRandomItems(items, 3))

    }, [items])



    const handleRandomize = () => {
        setCards(getRandomItems(items, 3));
    };

    if (cards.length < 3) return null;

    return (
        <section className="mx-auto relative w-full max-w-6xl flex flex-col-reverse gap-4 md:gap-0 sm:flex-row">
            {/* Left Card */}
            <motion.a
                href={`/${cards[0].category}?id=${cards[0].id}`}
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
                className="md:translate-x-[25%] md:-translate-y-[15%] w-full sm:w-[400px] h-64 rounded-xl overflow-hidden shadow-lg z-10 relative"
            >
                <Image
                    src={cards[0].images[0]}
                    alt="Les calanques de Marseille"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-semibold text-center px-4">
                        {locale === "fr" ? cards[0].nameFR : cards[0].nameEN}
                    </h3>
                </div>
            </motion.a>

            {/* Center Card */}
            <motion.a
                href={`/${cards[1].category}?id=${cards[1].id}`}
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false, amount: .5 }}
                className="md:translate-y-1/2 w-full md:w-[400px] h-64 rounded-xl overflow-hidden shadow-2xl z-30 relative"
            >
                <Image
                    src={cards[1].images[0]}
                    alt="La Cité radieuse – Le Corbusier"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-semibold text-center px-4">
                        {locale === "fr" ? cards[1].nameFR : cards[1].nameEN}
                    </h3>
                </div>
            </motion.a>

            {/* Right Card */}
            <motion.a
                href={`/${cards[2].category}?id=${cards[2].id}`}
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: false, amount: .5 }}
                className="md:-translate-x-1/3 md:-translate-[10%] w-full md:w-[400px] h-64 rounded-xl overflow-hidden shadow-lg z-20 relative"
            >
                <Image
                    src={cards[2].images[0]}
                    alt="Les îles du Frioul"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-semibold text-center px-4">
                        {locale === "fr" ? cards[2].nameFR : cards[2].nameEN}
                    </h3>
                </div>
            </motion.a>

            {/* Button */}
            <motion.div
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: false, amount: .5 }}
                className="md:absolute right-10 -bottom-20 text-center"
            >
                <button onClick={() => handleRandomize()} className="flex items-center gap-2 bg-secondary text-primary-foreground font-medium border-none rounded-xl px-4 py-2 w-full cursor-pointer justify-center overflow-hidden hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 4v5h.582a9.001 9.001 0 0117.338 2H22v5h-5v-.582a9.001 9.001 0 01-17.338-2H2V9h5v.582a7 7 0 0013.416 1.836A7 7 0 004.582 9H4z"
                        />
                    </svg>
                    {buttonText}
                </button>
            </motion.div>
        </section>
    );
}

export default OverlappingCards;
