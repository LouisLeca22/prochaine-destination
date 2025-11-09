import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import SplitText from "./SplitText"; // adjust path
import "swiper/css";
import "swiper/css/effect-fade";

interface HeaderCards {
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

const HeaderCards: React.FC<HeaderCards> = ({
    images,
    heading,
    className = "",
    swiperOptions = { speed: 1500, autoplayDelay: 4000, loop: true, effect: "fade" },
}) => {
    const { speed, autoplayDelay, loop, effect } = swiperOptions;

    return (
        <header className={`relative w-full min-h-[80vh]   ${className}`}>
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

            <div className="relative flex items-center justify-center gap-20 text-center  flex-col  top-0 left-0 w-full min-h-[80vh] md:translate-y-1/6 z-50">
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
                <p className="text-3xl hidden sm:block text-white max-w-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur labore eligendi molestiae laborum qui consequatur perspiciatis voluptatum veritatis quisquam repellendus culpa ratione nostrum neque, corporis aliquid, eaque, corrupti in!</p>

                <div className=" relative  px-6 md:px-16 md:max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">

                    <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition duration-500">
                        <h3 className="text-xl font-semibold mb-3 text-slate-800">📍 Les incontournables</h3>
                        <p className="text-slate-600 hidden sm:block leading-relaxed">
                            Falaises, ruelles, ports et lumière — des lieux emblématiques à explorer entre mer et campagne.
                        </p>
                    </div>

                    <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition duration-500">
                        <h3 className="text-xl font-semibold mb-3 text-slate-800">🚶‍♀️ À vivre</h3>
                        <p className="text-slate-600 hidden sm:block leading-relaxed">
                            Randonnées, rencontres, artisanat — des expériences à ressentir pleinement.
                        </p>
                    </div>

                    <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition duration-500">
                        <h3 className="text-xl font-semibold mb-3 text-slate-800">🎨 Culture</h3>
                        <p className="text-slate-600 hidden sm:block leading-relaxed">
                            Un territoire où la tradition inspire la création — expositions, spectacles et patrimoine vivant.
                        </p>
                    </div>

                </div>
            </div>

            <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-40"></div>

        </header>
    );
};

export default HeaderCards;
