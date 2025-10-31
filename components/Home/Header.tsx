"use client"

import SplitText from "@/components/ui/SplitText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import Image from 'next/image'
import Separator from "@/components/ui/Separator";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";
function Header() {

    const t = useScopedI18n("Home.Header")

    const images = [
        "/images/header/header1.jpg",
        "/images/header/header2.jpg",
        "/images/header/header3.jpg",
        "/images/header/header4.jpg",
        "/images/header/header5.jpg",
        "/images/header/header6.jpg",
        "/images/header/header7.jpg",
    ];
    return (
        <header className="relative w-full h-[90vh] overflow-hidden header-blur">
            <div className="absolute inset-0 z-0">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    speed={1500}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full h-full"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={src}
                                    alt={`Bannière ${index + 1}`}
                                    fill
                                    priority={index === 0}
                                    quality={90}
                                    sizes="100vw"
                                    className="object-cover object-center"
                                />

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="relative top-0 left-0 w-full h-full bg-black/40">
                <h1 className="flex w-full h-full flex-col items-end justify-end px-5 md:px-20 py-30">
                    <span className="text-sm md:text-2xl font-josefin-sans text-white font-bold mb-4 uppercase">{t("tagline")} <Link className="text-bold text-secondary" href="https://louis-leca.web.app/">Louis Leca</Link></span>
                    <Separator width="w-40" className="md:w-70" />
                    <SplitText
                        text={t("next")}
                        className="text-4xl tracking-wide md:text-6xl text-white font-extrabold text-shadow-lg font-inter uppercase"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="end"
                    />

                    <SplitText
                        text={t("destination")}
                        className="text-4xl tracking-wide md:text-6xl text-white font-extrabold text-shadow-lg font-inter uppercase"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="end"
                    />


                </h1>

            </div>

        </header >
    )
}
export default Header