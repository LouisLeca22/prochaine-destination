"use client";

import { useScopedI18n } from "@/locales/client";
import ScrollFloat from "@/components/ui/ScrollFloat";
import Separator from "@/components/ui/Separator";
import Link from "next/link";
import Image from "next/image";

export default function Experience() {
    const t = useScopedI18n("Home.Experience");

    type Card = {
        title: string;
        href: string;
        src: string;
    }

    const cards: Card[] = [
        {
            title: t("accommodations"),
            href: '/accommodations',
            src: "/images/experience/accommodation.jpg",

        },
        {
            title: t("restaurants"),
            href: "/restaurants",
            src: "/images/experience/restaurant.jpg",
        },
        {
            title: t("activities"),
            href: "/activities",
            src: "/images/experience/leisure.jpg",
        },
    ];


    function Card({ card, i }: { card: Card, i: number }) {
        return (
            <div

                className="sticky top-40 h-[80vh] md:h-[80vh] flex items-center justify-center"
                key={i}
            >
                <Link href={card.href}
                    style={{
                        top: `calc(10vh + ${i * 30}px)`,
                        scale: 0.99 + 0.05 * i,
                    }}
                    className={` h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center absolute w-full rounded-2xl`}
                >
                    <Image
                        src={card.src}
                        alt={card.title}
                        fill
                        className="w-full h-full  object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 ease-out group-hover:bg-black/40" />
                    <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold text-center pointer-events-none">
                        {card.title}
                    </h3>
                </Link>
            </div>

        )
    }

    return (
        <section className="relative bg-background">
            <div className="sticky z-40 overflow-hidden  top-0 left-0 bg-background pt-20 md:pt-15 pb-4 mb-10 text-center flex flex-col items-center">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-3xl  font-josefin-sans font-bold text-primary"
                >
                    {t("Heading")}
                </ScrollFloat>
                <Separator width="w-200" />
            </div>

            <div className="relative mx-auto w-[75vw] md:w-1/2">
                {cards.map((card, i) => (

                    <Card card={card} i={i} key={i} />
                ))}
            </div>
        </section>
    );
}
