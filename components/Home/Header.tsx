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
        "http://images.unsplash.com/photo-1656155035922-ee105c9364b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
        "https://images.unsplash.com/photo-1541777594744-addc2de9d110?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1505896202-4fe971e982fa?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1525474089639-b5fff4440315?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1032",
        "https://images.unsplash.com/photo-1500456759136-362ab38eec6d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg "
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
                    <span className="text-sm md:text-2xl font-josefin-sans text-white font-bold mb-4 uppercase">{t("tagline")} <Link className="text-bold text-secondary" target="_blank" href="http://www.linkedin.com/in/louis-leca">Louis Leca</Link></span>
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