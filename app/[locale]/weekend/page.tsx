"use client"

import AnimatedLink from "@/components/ui/AnimatedLink"
import { Button } from "@/components/ui/Button"
import Carrousel from "@/components/ui/Carrousel"
import HeaderSlider from "@/components/ui/HeaderSlider"
import Masonry from "@/components/ui/Masonry"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import ThreeCards from "@/components/ui/ThreeCards"
import { activities, restaurants } from "@/data"
import { useCurrentLocale, useScopedI18n } from "@/locales/client"
import { selectItemById, selectItemsByIds } from "@/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"

function WeekendPage() {

    const t1 = useScopedI18n("Weekend")
    const t2 = useScopedI18n("Components")
    const headerImages = [
        "https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg",
        "https://images.unsplash.com/photo-1561049527-9743861dce35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1586426007042-76e0d3324692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    ]

    const locale = useCurrentLocale()
    const allActivities = useMemo(() => activities, [])
    const allRestaurants = useMemo(() => restaurants, [])

    const top3 = selectItemsByIds(allActivities, [3, 5, 24])

    const flavors = selectItemsByIds(allRestaurants, [6, 12, 16])

    const unmissable = [
        {
            title: t1("eventOneTitle"),
            location: "Port-Clair, Côte d’Albret",
            schedule: "14h00 - 23h00",
            description: t1("eventOneDescription"),
            image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("eventTwoTitle"),
            location: "Plage des Marnes, Côte d’Albret",
            schedule: "09h00 - 17h00",
            description: t1("eventTwoDescription"),
            image: "https://images.unsplash.com/photo-1567413010197-7b436a170e8d?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("eventThreeTitle"),
            location: "Falaises de Vaubec",
            schedule: "20h30 - 23h00",
            description: t1("eventThreeDescription"),
            image: "https://images.unsplash.com/photo-1699145847518-2e5c4677780d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("eventFourTitle"),
            location: "Esplanade du Croissant, Port-Clair",
            schedule: "06h00 - 12h00",
            description: t1("eventFourDescription"),
            image: "https://images.unsplash.com/photo-1589470288084-ecad61835772?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("eventFiveTitle"),
            location: "Baie d’Arven",
            schedule: "10h00 - 16h00",
            description: t1("eventFiveDescription"),
            image: "https://images.unsplash.com/photo-1630756758547-b8e8e0dbca11?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("eventSixTitle"),
            location: "Quai des Brumes, Côte d’Albret",
            schedule: "21h00 - 01h00",
            description: t1("eventSixDescription"),
            image: "https://images.unsplash.com/photo-1555488205-d5e67846cf40?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];

    const shopping = [
        {
            title: t1("shoppingOneTitle"),
            description: t1("shoppingOneDescription"),
            image: "https://images.unsplash.com/photo-1745192900369-18581bc4e5fc?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("shoppingTwoTitle"),
            description: t1("shoppingTwoDescription"),
            image: "https://images.unsplash.com/photo-1597668900045-b9283c0de174?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("shoppingThreeTitle"),
            description: t1("shoppingThreeDescription"),
            image: "https://images.unsplash.com/photo-1611574474484-ced6cb70a2cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];

    const familyItems = selectItemsByIds(allActivities, [1, 7, 8, 9, 16, 25])

    const picsOfTheWeek = [
        {
            id: "1",
            img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
            height: 400,
        },
        {
            id: "2",
            img: "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1034",
            height: 250
        },
        {
            id: "3",
            img: "https://images.unsplash.com/photo-1481988535861-271139e06469?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1190",
            height: 600
        },
        {
            id: "4",
            img: "https://images.pexels.com/photos/1477359/pexels-photo-1477359.jpeg",
            height: 300
        },
        {
            id: "5",
            img: "https://images.unsplash.com/photo-1552686943-10abeb475c93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
            height: 450
        },
        {
            id: "6",
            img: "https://images.unsplash.com/photo-1501619951397-5ba40d0f75da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176",
            height: 200
        },
        {
            id: "7",
            img: "https://images.unsplash.com/photo-1573512443418-c6768862dda7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
            height: 500
        },
        {
            id: "8",
            img: "https://images.pexels.com/photos/5604950/pexels-photo-5604950.jpeg",
            height: 300
        },
        {
            id: "9",
            img: "https://images.pexels.com/photos/3183739/pexels-photo-3183739.jpeg",
            height: 250
        },
        {
            id: "10",
            img: "https://images.unsplash.com/photo-1575883147621-d20c567ed5ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
            height: 400
        },
        {
            id: "11",
            img: "https://images.unsplash.com/photo-1506899686410-4670690fccef?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 300
        },
        {
            id: "12",
            img: "https://images.unsplash.com/photo-1569227997603-33b9f12af927?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            height: 550
        },
        {
            id: "13",
            img: "https://images.unsplash.com/photo-1496886077455-6e206da90837?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            height: 300
        },
        {
            id: "14",
            img: "https://images.pexels.com/photos/3220558/pexels-photo-3220558.jpeg",
            height: 500
        },
        {
            id: "15",
            img: "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
            height: 200
        },
        {
            id: "16",
            img: "https://images.unsplash.com/photo-1453324044162-a4e5f32b7d6c?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 350
        },
        {
            id: "17",
            img: "https://images.unsplash.com/photo-1604938814491-c696899ec59b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
            height: 250
        },
        {
            id: "18",
            img: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            height: 250
        },

    ]

    const surpriseItems = [
        {
            title: t1("secretAdress"),
            description: t1("secretAddressDescription"),
            image: "https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?q=80&w=1207&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("secretHiking"),
            description: t1("secretHikingDescription"),
            image: "https://images.pexels.com/photos/1009355/pexels-photo-1009355.jpeg",
        },
        {
            title: t1("specialOffer"),
            description: t1("specialOfferDescription"),
            image: "https://images.pexels.com/photos/360624/pexels-photo-360624.jpeg"
        },
    ];

    const passes = [
        {
            duration: "24h",
            title: t1("optionOne"),
            priceAdults: 25,
            priceChildren: 22
        },
        {
            duration: "48h",
            title: t1("optionTwo"),
            priceAdults: 40,
            priceChildren: 38
        },
        {
            duration: "72h",
            title: t1("optionThree"),
            priceAdults: 60,
            priceChildren: 56
        },
    ];

    return (
        <>
            <header>
                <HeaderSlider heading={t1("heading")} images={headerImages} />
                <motion.div
                    className="mt-20 md:mt-40 flex max-w-xl mx-auto flex-col justify-center items-center text-center gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="text-2xl">{t1("description")}</p>
                </motion.div>
            </header>
            <Section className="md:my-20  p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("topThree")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="mx-auto md:mt-20 md:mb-60  relative w-full max-w-6xl flex flex-col-reverse gap-4 md:gap-0 sm:flex-row">
                    <motion.div
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:translate-x-[25%] md:-translate-y-[15%] w-full sm:w-[400px] h-64 rounded-xl  shadow-lg z-10 relative"
                    >
                        <div className="absolute -top-3 -left-3 bg-primary text-white w-12 h-12  flex items-center justify-center rounded-full shadow-lg text-2xl font-bold z-20">
                            1
                        </div>
                        <a href={`/${top3[0].category}?id=${top3[0].id}`}
                            className="w-full h-full rounded-xl overflow-hidden shadow-lg block relative"
                        >
                            <Image
                                src={top3[0].images[0]}
                                alt="Les calanques de Marseille"
                                fill
                                className="object-cover "
                            />

                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-semibold text-center px-4">
                                    {locale === "fr" ? top3[0].nameFR : top3[0].nameEN}
                                </h3>
                            </div>
                        </a>

                    </motion.div>

                    {/* Center Card */}
                    <motion.div
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, amount: .5 }}
                        className="md:translate-y-1/2 w-full md:w-[400px] h-64 rounded-xl  shadow-2xl z-30 relative"
                    >
                        <div className="absolute -top-3 -left-3 bg-primary text-white w-12 h-12  flex items-center justify-center rounded-full shadow-lg text-2xl font-bold z-20">
                            3
                        </div>

                        <a href={`/${top3[1].category}?id=${top3[1].id}`}
                            className="w-full h-full rounded-xl overflow-hidden shadow-lg block relative"

                        >
                            <Image
                                fill
                                src={top3[1].images[0]}
                                alt="La Cité radieuse – Le Corbusier"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-semibold text-center px-4">
                                    {locale === "fr" ? top3[1].nameFR : top3[1].nameEN}
                                </h3>
                            </div>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true, amount: .5 }}
                        className="md:-translate-x-1/3 md:-translate-[10%] w-full md:w-[400px] h-64 rounded-xl  shadow-lg z-20 relative"
                    >
                        <div className="absolute -top-3 -left-3 bg-primary text-white w-12 h-12  flex items-center justify-center rounded-full shadow-lg text-2xl font-bold z-20">
                            2
                        </div>
                        <a href={`/${top3[2].category}?id=${top3[2].id}`}
                            className="w-full h-full rounded-xl overflow-hidden shadow-lg block relative"
                        >
                            <Image
                                src={top3[2].images[0]}
                                alt="Les îles du Frioul"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-semibold text-center px-4">
                                    {locale === "fr" ? top3[2].nameFR : top3[2].nameEN}
                                </h3>
                            </div>
                        </a>
                    </motion.div>


                </div>
            </Section>

            <Section className="relative md:my-20 p-10 md:p-0">

                <div className="max-w-6xl mx-auto flex items-center  flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl w-[72%] sm:w-full sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("unmissable")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="grid md:grid-cols-2 max-w-6xl mx-auto mt-10 lg:grid-cols-3 gap-10">
                    {unmissable.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative bg-white rounded-2xl shadow-lg hover:scale-105 transition overflow-visible group"
                        >
                            <div className="rounded-t-2xl overflow-hidden h-48 relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-5 space-y-3">
                                <h3 className="text-xl text-primary font-semibold">{item.title}</h3>

                                <p className=" text-gray-600">
                                    <strong>{t1("location")} :</strong> {item.location}
                                </p>


                                <p className=" text-gray-600">
                                    <strong>{t1("schedule")} :</strong> {item.schedule}
                                </p>


                                <p className="text-gray-700 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section className="w-full bg-linear-to-br from-primary to-primary-foreground py-20 px-6 md:px-16">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-2xl w-full text-center sm:text-3xl font-josefin-sans font-bold text-white"
                >
                    {t1("freshAir")}
                </ScrollFloat>

                <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                <div className="space-y-20 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl shadow-lg p-6 bg-white space-y-4 flex flex-col"
                        >
                            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-md">
                                <Image
                                    src="https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt={t1("hike")}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-primary">{t1("hike")}</h3>
                            <p className="text-gray-600 flex-grow">
                                {t1("hikeDescription")}
                            </p>
                            <Link href="http://www.linkedin.com/in/louis-leca"
                                className="w-1/2 mx-auto text-center  bg-secondary text-primary-foreground px-4 py-2 rounded-lg  font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                {t2("seeMore")}
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl shadow-lg p-6 bg-white space-y-4 flex flex-col"
                        >
                            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-md">
                                <Image
                                    src="https://images.unsplash.com/photo-1633656275148-b6b4aa144138?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt={t1("bike")}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-primary">{t1("bike")}</h3>
                            <p className="text-gray-600 flex-grow">
                                {t1("bikeDescription")}
                            </p>
                            <Link href="http://www.linkedin.com/in/louis-leca"
                                className="w-1/2 mx-auto text-center  bg-secondary text-primary-foreground px-4 py-2 rounded-lg  font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                {t2("seeMore")}
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl shadow-lg p-6 bg-white space-y-4 flex flex-col"
                        >
                            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-md">
                                <Image
                                    src="https://images.unsplash.com/photo-1706097082090-6bede9db0835?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt={t1("photos")}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-primary">{t1("photos")}</h3>
                            <p className="text-gray-600 flex-grow">
                                {t1("photosDescription")}
                            </p>
                            <Link href="http://www.linkedin.com/in/louis-leca"
                                className="w-1/2 mx-auto text-center bg-secondary text-primary-foreground px-4 py-2 rounded-lg  font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                {t2("seeMore")}
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-blue-50 p-10 rounded-3xl shadow-md w-full max-w-4xl mx-auto"
                    >
                        <h3 className="text-3xl font-semibold mb-6 text-primary text-center">{t1("weather")}</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="space-y-2">
                                <div className="text-6xl">☀️</div>
                                <p className="text-xl text-gray-600 font-bold">18°C</p>
                                <p className="text-gray-600">{t1("sky")}</p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-6xl">💨</div>
                                <p className="text-xl text-gray-600 font-bold">12 km/h</p>
                                <p className="text-gray-600">{t1("wind")}</p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-6xl">💧</div>
                                <p className="text-xl text-gray-600 font-bold">35%</p>
                                <p className="text-gray-600">{t1("humidity")}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            <Section className="md:my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center sm:items-start flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("flavor")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="mt-10">
                    <ThreeCards items={flavors} />
                </div>
            </Section>

            <Section className="md:my-30 p-10 md:p-0">
                <Carrousel title={t1("family")} description={t1("familyDescription")} items={familyItems} />
            </Section>

            <Section className="relative my-0 md:my-30 p-10 md:p-0">

                <div className="max-w-6xl mx-auto flex items-center flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center sm:w-full font-bold text-primary"
                    >
                        {t1("pass")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full mt-15 ">
                        {passes.map((p, i) => (
                            <motion.div
                                key={p.duration}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className={`rounded-3xl shadow-xl ${i == 1 && "scale-110"}  bg-white overflow-hidden border hover:shadow-2xl hover:scale-110 transition duration-300`}>

                                    <div
                                        className="relative w-full bg-linear-to-b from-primary to-primary-foreground  "
                                        style={{
                                            clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
                                        }}
                                    >
                                        {i == 1 && (<div className="text-center text-white bg-secondary-foreground p-1">{t1("popular")}</div>)}
                                        <div className="py-10 text-5xl font-semibold tracking-wide text-white text-center">
                                            {p.duration}
                                        </div>
                                    </div>
                                    <div className="p-10 flex-col flex gap-8 justify-center items-center">
                                        <h3 className="text-center text-gray-600">
                                            {p.title}
                                        </h3>
                                        <div className="flex-col flex gap-">
                                            <div className="flex gap-8 text-black justify-center items-center ">

                                                <span className="text-primary text-xl ">{p.priceAdults}€</span><span>{t1("adults")}</span>
                                            </div>
                                            <div className="flex gap-8 text-black justify-center items-center ">

                                                <span className="text-primary text-xl ">{p.priceChildren}€</span><span>{t1("children")}</span>
                                            </div>
                                        </div>

                                        <AnimatedLink href="/citypass" text={t1("buyButton")} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </Section>

            <Section className="w-full bg-linear-to-br from-primary to-primary-foreground py-20 px-6 md:px-16">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-2xl w-full text-center sm:text-3xl font-josefin-sans font-bold text-white"
                >
                    {t1("shopping")}
                </ScrollFloat>

                <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />


                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                    {shopping.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-3xl shadow-lg bg-white overflow-hidden flex flex-col"
                        >
                            <div className="relative w-full h-56">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-semibold text-center mb-3 text-primary">{item.title}</h3>
                                <p className="text-gray-600 text-center mb-3 flex-grow">{item.description}</p>
                                <Link href="http://www.linkedin.com/in/louis-leca"
                                    className="w-1/2 mx-auto text-center  bg-secondary text-primary-foreground px-4 py-2 rounded-lg  font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                    {t2("knowMore")}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section className="relative my-5 md:my-20  px-6 md:px-16">

                <div className="max-w-6xl mx-auto flex items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("surprise")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>


                <div className="space-y-16 max-w-6xl mx-auto mt-10">
                    {surpriseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1, }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col md:flex-row items-center md:w-[60%]  rounded-3xl shadow-lg overflow-hidden bg-white ${index % 2 !== 0 ? 'md:flex-row-reverse md:ml-auto' : 'md:mr-auto'}`}
                        >
                            <div className="relative w-full md:w-1/2 h-64 md:h-72">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 md:w-1/2 flex flex-col justify-center">
                                <h3 className="text-2xl text-primary font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <Link href="http://www.linkedin.com/in/louis-leca"
                                    className="w-1/2 mx-auto text-center  bg-secondary text-primary-foreground px-4 py-2 rounded-lg mt-3  font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                    {t2("discover")}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section className="md:my-20 p-10 md:p-0">
                <div className=" max-w-6xl mx-auto flex items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl  whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("picsOfTheWeek")}
                    </ScrollFloat>
                    <Separator width="w-48 mb-10 " />
                    <div className="w-full flex-col overflow-hidden h-[180vh] md:h-180">

                        <Masonry
                            items={picsOfTheWeek}
                            ease="power3.out"
                            duration={0.6}
                            stagger={0.05}
                            animateFrom="bottom"
                            scaleOnHover={true}
                            hoverScale={0.95}
                            blurToFocus={true}
                        />


                    </div>
                </div>
            </Section>



        </>
    )
}
export default WeekendPage