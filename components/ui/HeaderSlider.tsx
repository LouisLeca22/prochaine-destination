import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import SplitText from "./SplitText"; // adjust path
import "swiper/css";
import "swiper/css/effect-fade";

interface HeaderSliderProps {
    images: string[];
    heading: string;
    className?: string;
    swiperOptions?: {
        speed?: number;
        autoplayDelay?: number;
        loop?: boolean;
        effect?: "fade" | "slide";
    };
}

const HeaderSlider: React.FC<HeaderSliderProps> = ({
    images,
    heading,
    className = "",
    swiperOptions = { speed: 1500, autoplayDelay: 4000, loop: true, effect: "fade" },
}) => {
    const { speed, autoplayDelay, loop, effect } = swiperOptions;

    return (
        <header className={`relative w-full h-[40vh] overflow-hidden header-blur mb-10 ${className}`}>
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

            <div className="relative flex items-center justify-center top-0 left-0 w-full h-full bg-black/40">
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
            </div>
        </header>
    );
};

export default HeaderSlider;
