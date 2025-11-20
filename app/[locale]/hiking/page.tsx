"use client"

import HeaderPolygon from "@/components/ui/HeaderPolygon"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { useScopedI18n } from "@/locales/client"
import { motion } from "framer-motion"
import { Activity, ArrowUpCircle, CircleCheckBig, Clock, Download, MapPin, MapPlus, Mountain, Route } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function HikingPage() {

    const headerImages = [
        "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171",
        "https://images.unsplash.com/photo-1525474089639-b5fff4440315?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1032",
        "https://images.unsplash.com/photo-1628941490404-d4e2ef1d7ec4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170"
    ]

    const t1 = useScopedI18n("Hiking")
    const t2 = useScopedI18n("Components")

    const hikingOneImages: [string, string, string, string] = [
        "https://images.unsplash.com/photo-1590089349708-9842d3f6ca25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpZmZzfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1591387091135-1bd5a83d27ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1724863617908-070a2345ffa4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1677462083945-c34b99cbde09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const hikingTwoImages: [string, string, string, string] = [
        "https://images.pexels.com/photos/33595422/pexels-photo-33595422.jpeg",
        "https://images.pexels.com/photos/18709446/pexels-photo-18709446.jpeg",
        "https://images.pexels.com/photos/1460280/pexels-photo-1460280.jpeg",
        "https://images.pexels.com/photos/34757101/pexels-photo-34757101.jpeg"
    ]

    const hikingThreeImages: [string, string, string, string] = [
        "https://images.pexels.com/photos/1009355/pexels-photo-1009355.jpeg",
        "https://images.pexels.com/photos/1118667/pexels-photo-1118667.jpeg",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]

    const hikingFourImages: [string, string, string, string] = [
        "https://images.pexels.com/photos/247506/pexels-photo-247506.jpeg",
        "https://images.pexels.com/photos/1373937/pexels-photo-1373937.jpeg",
        "https://images.unsplash.com/photo-1638340389325-31f8fdd7c0ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y292ZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.pexels.com/photos/792375/pexels-photo-792375.jpeg"
    ]

    const hikingFiveImages: [string, string, string, string] = [
        "https://images.pexels.com/photos/1076081/pexels-photo-1076081.jpeg",
        "https://images.pexels.com/photos/172510/pexels-photo-172510.jpeg",
        "https://images.pexels.com/photos/1469880/pexels-photo-1469880.jpeg",
        "https://images.pexels.com/photos/1370668/pexels-photo-1370668.jpeg"
    ]

    const hikingSixImages: [string, string, string, string] = [
        "https://images.unsplash.com/photo-1508985307703-52d13b2b06b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1668616202749-67406392862b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGhvdXNlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1505731266723-9adc6eb6ea96?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    return (
        <>
            <header>
                <HeaderPolygon heading={t1("heading")} images={headerImages} />
                <motion.div
                    className="my-10 flex max-w-xl mx-auto flex-col justify-center items-center text-center gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="text-2xl mt-10">{t1("description")}</p>
                </motion.div>
            </header>

            <Section className="my-0 md:my-30 p-10 md:p-0">
                <SquareCards
                    title={t1("randoOneTitle")}
                    description={t1("randoOneDescription")}
                    pointsOfInterests={[
                        t1("randoOnePoiOne"),
                        t1('randoOnePoiTwo'),
                        t1("randoOnePoiThree"),
                        t1("randoOnePoiFour")
                    ]}
                    images={hikingOneImages}
                    duration="1h35"
                    distance="3.5 km"
                    type={t1("loop")}
                    gain="+120 m"
                    difficulty={t1("easy")}
                    departure="Parking du Cap"
                />
            </Section>

            <Section className="my-0 md:my-30 p-10 md:p-0">
                <SquareCards
                    title={t1("randoTwoTitle")}
                    description={t1("randoTwoDescription")}
                    pointsOfInterests={[
                        t1("randoTwoPoiOne"),
                        t1('randoTwoPoiTwo'),
                        t1("randoTwoPoiThree"),
                        t1("randoTwoPoiFour")
                    ]}
                    images={hikingTwoImages}
                    duration="1h35"
                    distance="3.5 km"
                    type={t1("loop")}
                    gain="+120 m"
                    difficulty={t1("easy")}
                    departure="Parking du Cap"
                    reverse
                />
            </Section>


            <Section className="my-0 md:my-30 p-10 md:p-0">
                <SquareCards
                    title={t1("randoThreeTitle")}
                    description={t1("randoThreeDescription")}
                    pointsOfInterests={[
                        t1("randoThreePoiOne"),
                        t1('randoThreePoiTwo'),
                        t1("randoThreePoiThree"),
                        t1("randoThreePoiFour")
                    ]}
                    images={hikingThreeImages}
                    duration="1h35"
                    distance="3.5 km"
                    type={t1("loop")}
                    gain="+120 m"
                    difficulty={t1("easy")}
                    departure="Parking du Cap"
                />
            </Section>

            <Section className="my-0 md:my-30 p-10 md:p-0">
                <SquareCards
                    title={t1("randoFourTitle")}
                    description={t1("randoFourDescription")}
                    pointsOfInterests={[
                        t1("randoFourPoiOne"),
                        t1('randoFourPoiTwo'),
                        t1("randoFourPoiThree"),
                        t1("randoFourPoiFour")
                    ]}
                    images={hikingFourImages}
                    duration="1h35"
                    distance="3.5 km"
                    type={t1("loop")}
                    gain="+120 m"
                    difficulty={t1("easy")}
                    departure="Parking du Cap"
                    reverse
                />
            </Section>


            <Section className="my-0 md:my-30 p-10 md:p-0">
                <SquareCards
                    title={t1("randoFiveTitle")}
                    description={t1("randoFiveDescription")}
                    pointsOfInterests={[
                        t1("randoFivePoiOne"),
                        t1('randoFivePoiTwo'),
                        t1("randoFivePoiThree"),
                        t1("randoFivePoiFour")
                    ]}
                    images={hikingFiveImages}
                    duration="1h35"
                    distance="3.5 km"
                    type={t1("loop")}
                    gain="+120 m"
                    difficulty={t1("easy")}
                    departure="Parking du Cap"
                />
            </Section>


            <Section className="my-0 md:my-30 p-10 md:p-0">
                <SquareCards
                    title={t1("randoSixTitle")}
                    description={t1("randoSixDescription")}
                    pointsOfInterests={[
                        t1("randoSixPoiOne"),
                        t1('randoSixPoiTwo'),
                        t1("randoSixPoiThree"),
                        t1("randoSixPoiFour")
                    ]}
                    images={hikingSixImages}
                    duration="1h35"
                    distance="3.5 km"
                    type={t1("loop")}
                    gain="+120 m"
                    difficulty={t1("easy")}
                    departure="Parking du Cap"
                    reverse
                />
            </Section>

        </>
    )
}



interface SquareCardsProps {
    title: string;
    description: string;
    images: [string, string, string, string];
    imageAlt?: string;
    reverse?: boolean;
    pointsOfInterests: string[]
    distance: string
    duration: string
    type: string
    gain: string
    difficulty: string
    departure: string
}

const SquareCards = ({
    title,
    description,
    images,
    reverse = false,
    pointsOfInterests,
    distance,
    duration,
    type,
    gain,
    difficulty,
    departure
}: SquareCardsProps) => {
    const t1 = useScopedI18n("Hiking")
    return (
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 sm:gap-20 gap-4 items-center">
            <motion.div
                className={`grid grid-cols-2 gap-4 ${reverse ? 'md:order-2' : ''}`}
                initial={{ opacity: 0, x: reverse ? 120 : -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: true, amount: .5 }}
            >
                {images.map((src, i) => (
                    <motion.div
                        key={i}
                        variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
                        className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                        <Image src={src} alt={title} fill className="object-cover" />
                    </motion.div>
                ))}
            </motion.div>


            <motion.div
                className={`text-center ${reverse ? 'md:order-1' : ''}`}
                initial={{ opacity: 0, x: reverse ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true, amount: .5 }}
            >
                <h2 className="text-4xl font-josefin-sans font-bold text-primary mb-4">{title}</h2>
                <Separator width="w-40" className="mx-auto" />
                <p className="text-lg leading-relaxed mt-10">{description}</p>


                <div className="mt-10 grid grid-cols-2 gap-2 p-6 rounded-3xl shadow-lg bg-white text-left">                    {distance && (
                    <div className="flex items-center gap-2"><Route className="w-5 h-5 text-primary" /> <span>{t1("distance")}</span><span>{distance}</span></div>
                )}
                    {duration && (
                        <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> <span>{t1("duration")}</span><span>{duration}</span></div>
                    )}
                    {gain && (
                        <div className="flex items-center gap-2"><ArrowUpCircle className="w-5 h-5 text-primary" /><span>{t1("gain")}</span> <span>{gain}</span></div>
                    )}
                    {difficulty && (
                        <div className="flex items-center gap-2"><Mountain className="w-5 h-5 text-primary" /><span>{t1("difficulty")}</span> <span>{difficulty}</span></div>
                    )}
                    {type && (
                        <div className="flex items-center gap-2"><Activity className="w-5 h-5 text-primary" /> <span>{t1("type")}</span><span>{type}</span></div>
                    )}
                    {departure && (
                        <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /><span>{t1("departure")}</span> <span>{departure}</span></div>
                    )}
                </div>


                {pointsOfInterests.length > 0 && (
                    <div className="mt-6 text-left bg-white p-6 rounded-3xl shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-primary">{t1("interest")}</h3>
                        <ul className=" space-y-1">
                            {pointsOfInterests.map((poi, idx) => (
                                <li key={idx} className="flex  gap-2"><CircleCheckBig className="h-4 w-4 text-primary" />{poi}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="mt-10 flex justify-center gap-6">
                    <Link href="http://www.linkedin.com/in/louis-leca"
                        className="flex gap-2 bg-secondary text-primary-foreground px-2 py-3 hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                        <Download className="w-5 h-5" /> {t1("download")}
                    </Link>
                    <Link href="http://www.linkedin.com/in/louis-leca"
                        className="flex gap-2 bg-secondary text-primary-foreground px-2 py-3 hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                        <MapPlus className="w-5 h-5" /> {t1("gpx")}
                    </Link>
                </div>
            </motion.div >
        </div >
    );
};

export default HikingPage