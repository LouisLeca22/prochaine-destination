"use client";

import { motion } from "framer-motion";
import { Landmark } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Separator from "@/components/ui/Separator";
import AnimatedLink from "@/components/ui/AnimatedLink";
import { BaseItem } from "@/data";
import { useCurrentLocale } from "@/locales/client";


type Card = {
    title: string,
    description: string
    image: string
}

interface BlockProps {
    cards: [Card, Card]
    title: string,
    description: string,
    asideTitle: string,
    asideDescription: string,
    items: BaseItem[]
    asideIcon: React.ReactNode
    buttonText: string
    buttonLink: string
}



export default function Block({ cards, title, description, asideTitle, asideDescription, items, asideIcon, buttonText, buttonLink }: BlockProps) {
    const locale = useCurrentLocale()
    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                    className="lg:col-span-2 flex flex-col justify-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-josefin-sans font-bold text-primary mb-4 text-center lg:text-left">
                        {title}
                    </h2>
                    <Separator className="w-24 sm:w-40 mx-auto lg:mx-0 mb-4" />
                    <p className="text-sm sm:text-base text-center lg:text-left mb-6">
                        {description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {cards.map((card, i) => (
                            <motion.article
                                key={i}
                                className="rounded-xl overflow-hidden bg-white shadow"
                                whileHover={{ scale: 1.03, y: -4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-48 sm:h-56 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{card.title}</h3>
                                    <p className="text-sm text-primary-foreground mt-2">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>

                <motion.aside
                    className="rounded-xl p-5 bg-white shadow flex flex-col mt-10 lg:mt-0"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center shadow">
                            {asideIcon}
                        </div>
                        <h2 className="text-primary text-base sm:text-lg text-center">
                            {asideTitle}
                        </h2>
                    </div>

                    <p className="text-sm text-primary-foreground text-center mb-6 leading-relaxed">
                        {asideDescription}
                    </p>

                    <div className="flex-1 w-full relative min-h-[250px] sm:min-h-[300px]">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            className="w-full h-full rounded-lg"
                        >
                            {items.map((item, i) => (
                                <SwiperSlide key={item.id || i}>
                                    <Link href={`/${item.category}?id=${item.id}`} className="block w-full h-full">
                                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                                            <Image
                                                src={item.images[0]}
                                                alt={locale === "fr" ? item.nameFR : item.nameEN}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                <h3 className="text-white text-xl sm:text-2xl font-semibold text-center px-4">
                                                    {locale === "fr" ? item.nameFR : item.nameEN}
                                                </h3>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <AnimatedLink text={buttonText} href={buttonLink} />
                    </div>
                </motion.aside>
            </div>
        </div>
    );
}
