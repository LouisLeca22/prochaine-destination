"use client"
import ScrollFloat from '@/components/ui/ScrollFloat';
import { useScopedI18n } from '@/locales/client';
import Separator from "@/components/ui/Separator";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';

function Favorites() {
    const t = useScopedI18n("Home.Favorites");

    const slides = [
        {
            src: "/images/favorties/lighthouse.jpg",
            title: t("coast"),
            href: "/coast"
        },
        {
            src: "/images/favorties/modern_art.jpg",
            title: t("museum"),
            href: "/museum"
        },
        {
            src: "/images/favorties/hiking.jpg",
            title: t("hiking"),
            href: "/hiking"
        },
        {
            src: "/images/favorties/tasting.jpg",
            title: t("tasting"),
            href: "/tasting"
        },
    ];

    return (
        <section className="h-screen">
            <div className="sticky z-40 overflow-hidden  top-0 left-0 bg-background pt-20 md:pt-15 pb-4 mb-10 text-center flex flex-col items-center">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-3xl font-josefin-sans font-bold text-primary"
                >
                    {t("Heading")}
                </ScrollFloat>
                <Separator width="w-200" />
            </div>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 200,
                    modifier: 1.2,
                    slideShadows: true,
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="w-[90vw] h-[90vh] max-w-[1000px] mt-20 flex items-center justify-center"
            >
                {slides.map(({ src, title, href }, i) => (
                    <SwiperSlide
                        key={i}
                        className="w-[70vw]! md:w-[500px]!  h-[60%]! rounded-2xl overflow-hidden shadow-lg relative"
                    >
                        <Link href={href}>
                            <div className="absolute inset-0 overflow-hidden group">
                                <Image
                                    src={src}
                                    alt={title}
                                    fill
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 ease-out group-hover:bg-black/40" />
                                <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold text-center pointer-events-none">
                                    {title}
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
export default Favorites;
