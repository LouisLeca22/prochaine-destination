"use client"

import SplitText from "@/components/ui/SplitText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from 'next/image'
import Separator from "@/components/ui/Separator";
function Header() {

    const images = [
        "/images/header1.jpg",
        "/images/header2.jpg",
        "/images/header3.jpg",
        "/images/header4.jpg",
        "/images/header5.jpg",
        "/images/header6.jpg",
        "/images/header7.jpg",
    ];
    return (
        <header className="relative w-full h-[90vh] overflow-hidden">
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

                                {/* <div className="absolute inset-0 bg-black/40" /> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="relative top-0 left-0 w-full h-full bg-black/40">
                <div className="flex w-full h-full flex-col items-end justify-end px-10 py-20">
                    <span className="text-1xl md:text-2xl font-josefin-sans text-white font-bold mb-4 uppercase">L'air du large, l'art en partage</span>
                    <Separator width="w-40" className="md:w-92" />
                    <SplitText
                        text="PROCHAINE"
                        className="text-4xl tracking-wide md:text-6xl text-white font-extrabold text-shadow-lg font-inter"
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
                        text="DESTINATION"
                        className="text-4xl tracking-wide md:text-6xl text-white font-extrabold text-shadow-lg font-inter"
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


                </div>

            </div>

        </header >
    )
}
export default Header