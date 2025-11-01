"use client"

import { useScopedI18n } from "@/locales/client";
import ScrollFloat from "../ui/ScrollFloat"
import Separator from "../ui/Separator"
import { motion, Variants } from "framer-motion";
import Link from "next/link";

function Targets() {
    const t = useScopedI18n("Home.Targets");

    const cards = [
        { id: 1, title: t("culture"), img: "/images/targets/culture.jpg", href: "/culture" },
        { id: 2, title: t("friends"), img: "/images/targets/friends.jpg", href: "/friends" },
        { id: 3, title: t("family"), img: "/images/targets/family.jpg", href: "/family" },
        { id: 4, title: t("adventure"), img: "/images/targets/adventure.jpg", href: "/adventure" },
        { id: 5, title: t("couple"), img: "/images/targets/couple.jpg", href: "/couple" },
        { id: 6, title: t("relax"), img: "/images/targets/relax.jpg", href: "/relax" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="min-h-screen snap-start">
            <div className="sticky z-40 overflow-hidden  top-0 left-0 bg-background pt-20 md:pt-15 pb-4 text-center flex flex-col items-center">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-3xl font-josefin-sans font-bold text-cyan-500"
                >
                    {t("Heading")}
                </ScrollFloat>
                <Separator width="w-200" />
            </div>
            <motion.div
                className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pt-5 pb-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        variants={cardVariants}
                        className="relative h-64 md:h-54 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                    >
                        <Link href={card.href}>
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: `url(${card.img})` }}
                            ></div>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-2xl text-white font-semibold font-josefin-sans tracking-wide">
                                    {card.title}
                                </h3>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
export default Targets