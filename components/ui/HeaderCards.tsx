import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import SplitText from "./SplitText";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion, Variants } from "framer-motion";

interface HeaderCards {
    images: string[];
    heading: string;
    subHeading: string;
    className?: string;
    cards: {
        title: {
            text: string;
            icon: React.ReactNode;
        };
        description: string;
    }[];
    swiperOptions?: {
        speed?: number;
        autoplayDelay?: number;
        loop?: boolean;
        effect?: "fade" | "slide";
    };
}

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: { y: 40, scale: 0.95 },
    show: {
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const HeaderCards: React.FC<HeaderCards> = ({
    images,
    cards,
    heading,
    subHeading,
    className = "",
    swiperOptions = { speed: 1500, autoplayDelay: 4000, loop: true, effect: "fade" },
}) => {
    const { speed, autoplayDelay, loop, effect } = swiperOptions;

    return (
        <header className={`relative w-full min-h-[80vh] mb-20 ${className}`}>
            <div className="absolute inset-0 z-0">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect={effect}
                    speed={speed}
                    autoplay={{
                        delay: autoplayDelay,
                        disableOnInteraction: false,
                    }}
                    loop={loop}
                    className="w-full h-full"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={src}
                                    alt={`Banner ${index + 1}`}
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

            <div className="relative flex items-center justify-center gap-20 text-center flex-col top-0 left-0 w-full min-h-[80vh] md:translate-y-1/5 lg:translate-y-[25%] z-50">
                <h1>
                    <SplitText
                        text={heading}
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

                <p className="text-2xl hidden sm:block text-white max-w-5xl text-shadow-lg ">
                    {subHeading}
                </p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative md:max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-6"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="flex-1 bg-white rounded-3xl flex justify-center items-center gap-2 flex-col  min-h-40 shadow-xl p-3 transform hover:-translate-y-2 transition duration-500"
                        >
                            <h3 className="font-semibold text-slate-800 flex items-center gap-2 justify-start md:justify-center text-left md:text-center">
                                {card.title.icon}
                                {card.title.text}
                            </h3>
                            <p className="text-slate-600 hidden sm:block px-4 leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="bg-black/55 w-full h-full absolute top-0 left-0 z-40"></div>
        </header>
    );
};

export default HeaderCards;
