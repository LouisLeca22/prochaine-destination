import { motion } from "framer-motion";
import Separator from "./Separator";
import { Swiper, SwiperSlide } from "swiper/react";
import { BaseItem } from "@/data";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import { useCurrentLocale } from "@/locales/client";
import { Autoplay } from "swiper/modules";
import Link from "next/link";



function Carrousel<T extends BaseItem>({ items, title, description }: { items: T[], title: string, description: string }) {
    const locale = useCurrentLocale();
    const isMobile = useIsMobile()
    return (
        <div className="flex w-full sm:flex-row flex-col items-center relative">

            <motion.div
                className="sm:flex-1 w-full sm:h-[70vh] bg-white text-primary-foreground flex items-center justify-center flex-col p-6"
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                viewport={{
                    amount: 0.5,
                    once: true
                }}
            >
                <h2 className="text-4xl font-josefin-sans font-bold text-primary mb-4">
                    {title}
                </h2>
                <Separator width="w-40" className="mx-auto mb-8" />
                <p className="text-lg text-center text-gray-600 px-6 leading-relaxed">
                    {description}
                </p>
            </motion.div>


            <motion.div initial={{ opacity: 0, y: -120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                viewport={{
                    amount: 0.5,
                    once: true
                }} className="md:flex-3 overflow-hidden w-full h-[50vh]  shadow-lg z-20 sm:-ml-8">
                <Swiper
                    slidesPerView={isMobile ? 1 : 3}
                    spaceBetween={isMobile ? 0 : 30}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="w-full h-full"
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
                                        <h3 className="text-white text-2xl font-semibold text-center px-4">
                                            {locale === "fr" ? item.nameFR : item.nameEN}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
}

export default Carrousel;
