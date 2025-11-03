"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import SplitText from "@/components/ui/SplitText";
import ScrollReveal from "@/components/ui/ScrollReveal"
import { useScopedI18n } from "@/locales/client";
import { motion } from 'framer-motion'
import Separator from "@/components/ui/Separator";



export function ExplorePage() {
    const t = useScopedI18n("Explore")
    const headerImages = [
        "https://images.unsplash.com/photo-1446038202205-1c96430dbdab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
        "https://images.unsplash.com/photo-1534781600251-463b503104b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
        "https://images.unsplash.com/photo-1656155035922-ee105c9364b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
    ];

    const discoverImages = [
        'https://images.unsplash.com/photo-1512649408904-c0a00fb810da?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1331',
        'https://images.unsplash.com/photo-1593812350679-8bfcb563b297?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1167',
        'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170',
        'https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171',
    ]
    return (
        <>
            <header className="relative w-full h-[40vh] overflow-hidden header-blur">
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
                        {headerImages.map((src, index) => (
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
                <div className="relative flex items-center justify-center top-0 left-0 w-full h-full bg-black/40">
                    <h1>
                        <SplitText
                            text={t("Heading")}
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
            </header>

            <section className="h-screen max-w-6xl mx-auto my-16 px-6 grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false }}
                >
                    {discoverImages.map((src, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                show: { opacity: 1, y: 0 },
                            }}
                            className="relative w-full h-50 rounded-3xl overflow-hidden shadow-xl  hover:shadow-2xl transition-shadow duration-300"
                        >
                            <Image
                                src={src}
                                alt={`Discover image ${i + 1}`}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    <h2 className="text-3xl font-josefin-sans font-bold text-primary mb-4">
                        Découvrir autrement
                    </h2>
                    <Separator width="w-100" className="mx-auto" />
                    <p className="leading-relaxed mt-10">
                        Découvrez des lieux chargés d’histoire, des expériences uniques et des
                        rencontres inattendues. Chaque destination révèle une atmosphère, un
                        savoir-faire et un patrimoine à préserver.
                    </p>
                </motion.div>
            </section>

            <section className="h-[50vh] max-w-6xl mx-auto my-16 px-6">
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    textClassName="text-3xl!"
                >
                    When does a man die? When he is hit by a bullet? No! When he suffers a disease?
                    No! When he ate a soup made out of a poisonous mushroom?
                    No! A man dies when he is forgotten!
                </ScrollReveal>
            </section>
        </>
    )
}
export default ExplorePage