"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import Image from 'next/image';
import { useRef } from 'react';
import AnimatedLink from "../ui/AnimatedLink";
import { useScopedI18n } from "@/locales/client";
import ScrollFloat from "../ui/ScrollFloat";


type Item = {
    id: number,
    title: string,
    img: string,
    desc: string,
    href: string
}




const Headline = ({ item, reverse }: { item: Item, reverse: boolean }) => {
    const t = useScopedI18n("Home.Headlines")
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section className="h-[50vh] md:m-10 pt-20 md:pt-10 relative">
            <div
                className={`max-w-[1100px] h-full m-auto flex items-center justify-center md:gap-20 
        ${reverse ? "md:flex-row-reverse" : ""}
        flex-col md:flex-row`}
            >
                <div ref={ref} className="flex-1 h-full relative w-full">
                    <div className="hidden md:block absolute top-4 left-4 w-full h-full bg-primary rounded-2xl md:rounded-3xl"></div>
                    <Image
                        fill
                        className="object-cover w-full h-full shadow-lg shadow-gray-700/40 rounded-none md:rounded-2xl"
                        src={item.img}
                        alt={item.title}
                    />
                    <div className="absolute inset-0 bg-black/50 md:hidden"></div>
                </div>


                <motion.div
                    className="flex-1 flex flex-col justify-center items-center text-center h-full gap-3 
           absolute md:static inset-0 md:inset-auto p-6 md:p-0  text-white md:text-foreground"
                    style={{ y }}
                >
                    <h2 className="text-2xl text-primary font-bold">{item.title}</h2>
                    <p className=" font-inter">{item.desc}</p>
                    <AnimatedLink href={item.href} text={t("more")} />
                </motion.div>
            </div>
        </section>
    );
};



function Headlines() {
    const t = useScopedI18n("Home.Headlines")

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })


    const items: Item[] = [
        {
            id: 1,
            title: t("Titles.autumn"),
            img: "/images/headlines/autumn.jpg",
            desc: t("Descriptions.autumn"),
            href: "/autumn"
        },
        {
            id: 2,
            title: t("Titles.citypass"),
            img: "/images/headlines/citypass.jpg",
            desc: t("Descriptions.citypass"),
            href: "citypass"
        },
        {
            id: 3,
            title: t("Titles.sustainable"),
            img: "/images/headlines/sustainable.jpg",
            desc: t("Descriptions.sustainable"),
            href: "sustainable"
        },
        {
            id: 4,
            title: t("Titles.weekend"),
            img: "/images/headlines/weekend.jpg",
            desc: t("Descriptions.weekend"),
            href: "sustainable"
        },
    ]
    return (
        <div className="relative" ref={ref}>
            <div className='sticky z-40 bg-background pt-30 md:pt-15 top-0 left-0 pb-4 md:px-100 text-center'>
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    textClassName="text-3xl font-josefin-sans font-bold text-primary"
                >
                    {t("Heading")}
                </ScrollFloat>
                <motion.div style={{ scaleX }} className='h-1 bg-linear-to-r from-cyan-400 to-cyan-600 rounded-full'></motion.div>
            </div>

            {items.map((item, index) => {
                return <Headline item={item} key={item.id} reverse={index % 2 !== 0} />
            })}

        </div>
    )
}
export default Headlines