"use client"

import CircuitMap, { Circuit } from "@/components/ui/CircuitMap"
import HeaderPolygon from "@/components/ui/HeaderPolygon"
import PodcastOne from "@/components/ui/PodcastOne"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { activities } from "@/data"
import { useCurrentLocale, useScopedI18n } from "@/locales/client"
import { selectItemsByIds } from "@/utils"
import { motion } from "framer-motion"
import { Heart, ShieldAlert, SquareParking, Waves } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"


function CoastPage() {
    const t1 = useScopedI18n("Coast")
    const t2 = useScopedI18n("Components")
    const locale = useCurrentLocale()

    const headerImages = [
        "https://images.unsplash.com/photo-1495171081156-cc1209ddf6a0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1505896202-4fe971e982fa?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1500456759136-362ab38eec6d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const hiking = [{
        title: t1("hikingOneTitle"),
        description: t1("hikingOneDescription"),
        duration: t1("hikingOneDuration"),
        access: t1("hikingOneAccess"),
        difficulty: t1("hikingOneDifficulty"),
        tips: t1("hikingOneTips"),
        img: "https://images.unsplash.com/photo-1522679056866-8dbbc8774a9d?q=80&w=1247&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        title: t1("hikingTwoTitle"),
        description: t1("hikingTwoDescription"),
        tips: t1("hikingTwoTips"),
        duration: t1("hikingTwoDuration"),
        access: t1("hikingTwoAccess"),
        difficulty: t1("hikingTwoDifficulty"),
        img: "https://images.unsplash.com/photo-1686861555991-fe7f69e32c71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        title: t1("hikingThreeTitle"),
        description: t1("hikingThreeDescription"),
        tips: t1("hikingThreeTips"),
        duration: t1("hikingThreeDuration"),
        access: t1("hikingThreeAccess"),
        difficulty: t1("hikingThreeDifficulty"),
        img: "https://images.pexels.com/photos/27869485/pexels-photo-27869485.jpeg"
    }]


    const villagesItems = [
        {
            title: t1("villageOneTitle"),
            description: t1("villageOneDescription"),
            image: "https://images.pexels.com/photos/4846222/pexels-photo-4846222.jpeg",
            tips: t1("villageOneTips")
        },
        {
            title: t1("villageTwoTitle"),
            description: t1("villageTwoDescription"),
            image: "https://images.pexels.com/photos/130015/pexels-photo-130015.jpeg",
            tips: t1("villageTwoTips")
        },
        {
            title: t1("villageThreeTitle"),
            description: t1("villageThreeDescription"),
            tips: t1("villageThreeTips"),
            image: "https://images.pexels.com/photos/105950/pexels-photo-105950.jpeg"
        }
    ]

    const itineraries = [
        {
            title: t1("itineraryOneTitle"),
            description: t1("itineraryOneDescription"),
            tips: t1("itineraryOneTips"),
            sub: t1("itineraryOneSub")
        },
        {
            title: t1("itineraryTwoTitle"),
            description: t1("itineraryTwoDescription"),
            tips: t1("itineraryTwoTips"),
            sub: t1("itineraryTwoSub")
        },
        {
            title: t1("itineraryThreeTitle"),
            description: t1("itineraryThreeDescription"),
            tips: t1("itineraryThreeTips"),
            sub: t1("itineraryThreeSub")
        }
    ]

    const circuitsNormandie: Circuit[] = [
        {
            name: t1("itineraryOneTitle"),
            color: "green",
            positions: [
                [49.4692, 1.1258],
                [49.4705, 1.1282],
                [49.4721, 1.1308],
                [49.4738, 1.1331],
                [49.4750, 1.1356],
                [49.4761, 1.1379],
                [49.4752, 1.1402],
                [49.4736, 1.1391],
                [49.4720, 1.1360],
                [49.4708, 1.1319],
                [49.4695, 1.1285],
                [49.4692, 1.1258],
            ],
        },
        {
            name: t1("itineraryTwoTitle"),
            positions: [
                [49.4431, 1.0993],
                [49.4420, 1.0935],
                [49.4405, 1.0880],
                [49.4385, 1.0852],
                [49.4362, 1.0805],
                [49.4335, 1.0780],
                [49.4322, 1.0745],
                [49.4305, 1.0768],
                [49.4275, 1.0795],
                [49.4285, 1.0835],
                [49.4308, 1.0880],
                [49.4332, 1.0915],
                [49.4370, 1.0948],
                [49.4395, 1.0975],
                [49.4428, 1.0990],
            ],
            color: "orange",
        },
        {
            name: t1("itineraryThreeTitle"),
            color: "blue",
            positions: [
                [49.4514, 1.0902],
                [49.4498, 1.0935],
                [49.4482, 1.0982],
                [49.4470, 1.1025],
                [49.4455, 1.1068],
                [49.4435, 1.1088],
                [49.4418, 1.1115],
                [49.4398, 1.1105],
                [49.4380, 1.1060],
                [49.4375, 1.1015],
                [49.4385, 1.0968],
                [49.4402, 1.0938],
                [49.4430, 1.0918],
                [49.4460, 1.0908],
                [49.4512, 1.0901],
            ],
        }
    ];

    const allActivites = useMemo(() => activities, [])

    const nature = selectItemsByIds(allActivites, [5, 19, 17])

    const seasons = [
        {
            title: t1("winterTitle"),
            description: t1("winterDescription"),
            image: "https://images.unsplash.com/photo-1577472075537-2072bb6de039?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("springTitle"),
            description: t1("springDescription"),
            image: "https://images.unsplash.com/photo-1553220954-c0fee00146e2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("summerTitle"),
            description: t1("summerDescription"),
            image: "https://images.unsplash.com/photo-1664508652367-540008bf10cb?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ]

    const featured = {
        title: t1("autumnTitle"),
        description: t1("autumnDescription"),
        image: "https://images.unsplash.com/photo-1602559331692-52ed513e9c4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxjb2FzdGxpbmUlMjBhdXR1bW58ZW58MHx8MHx8fDA%3D"
    }

    return (
        <>
            <header>
                <HeaderPolygon heading={t1("heading")} images={headerImages} />
                <motion.div
                    className="mt-24 flex max-w-xl mx-auto flex-col justify-center items-center text-center gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="text-2xl">{t1("description")}</p>
                </motion.div>
            </header>

            <Section className="my-0 sm:my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex  items-center  flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("hikingTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>

                <p className="text-xl my-10 mx-auto text-center">{t1("hikingDescription")}</p>

                <div className={'mt-15'}>
                    <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
                    <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
                            {hiking.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -6 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    viewport={{
                                        amount: 0.5,
                                        once: true
                                    }}
                                    className="group max-w-70 bg-white rounded-2xl shadow-md  transition-all hover:-translate-y-2 hover:shadow-xl">

                                    <div className="rounded-t-2xl overflow-hidden h-48 relative">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="p-5 space-y-3">
                                        <h3 className="text-xl text-primary font-semibold">{item.title}</h3>

                                        <p className="text-gray-700 leading-relaxed">
                                            {item.description}
                                        </p>
                                        <p className="text-gray-700  leading-relaxed">
                                            {item.duration}
                                        </p>
                                        <p className="text-gray-700  leading-relaxed">
                                            {item.difficulty}
                                        </p>
                                        <p className="text-gray-700  leading-relaxed">
                                            {item.access}
                                        </p>
                                        <p className=" text-gray-600">
                                            <strong> {item.tips} </strong>
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </Section >

            <Section>
                <PodcastOne
                    title={t1("podcastTitle")}
                    description={t1("podcastDescription")}
                    cover="https://images.unsplash.com/photo-1515506733362-f6161cbcfbe6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    src="/audios/podcast.mp3"
                    podcastName={t1("podcastName")}
                />
            </Section>

            <Section className="my-5 md:my-20  px-6 md:px-16">
                <div className="max-w-6xl mx-auto flex items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("villagesTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>


                <div className="space-y-16 max-w-6xl mx-auto mt-10">
                    {villagesItems.map((item, index) => (
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
                            <div className="p-3 md:w-1/2 flex flex-col text-center justify-center">
                                <h3 className="text-2xl text-primary  font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <p className=" font-bold text-gray-600">
                                    {item.tips}
                                </p>
                                <Link href="http://www.linkedin.com/in/louis-leca"
                                    className="w-1/2 mx-auto text-center  bg-secondary text-primary-foreground px-4 py-2 rounded-lg mt-3 text-sm font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                    {t2("discover")}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>




            <Section className="md:my-10 my-0 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center md:items-start mb-10 flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl  sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("itinerariesTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>

                <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                    <div className="md:col-span-2 space-y-8">
                        <p className="text-center text-xl">{t1("itinerariesDescription")}</p>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="space-y-6"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.2 } }
                            }}
                        >
                            {itineraries.map((action, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.03 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white p-6 rounded-2xl shadow hover:shadow-lg flex flex-col items-center gap-2 text-center transition duration-300"
                                >
                                    <h3 className="text-primary">
                                        {action.title}
                                    </h3>
                                    <p className="text-gray-600">{action.description}</p>
                                    <p className="text-gray-600">{action.sub}</p>
                                    <p className="font-bold text-gray-600">
                                        {action.tips}
                                    </p>

                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col"
                    >
                        <div className="relative w-full h-72 md:h-84">
                            <Image
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Nos partenaires engagés"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-3xl"
                                priority
                            />
                        </div>
                        <div className="p-6 flex flex-col justify-evenly h-full text-center">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{t1("ecoTitle")}</h3>
                                <Separator width="w-24 mx-auto " />
                            </div>

                            <p className="mt-4 text-primary-foreground">{t1("ecoTourism")}</p>

                            <a
                                href="/sustainable"
                                className="mt-4 mx-auto w-[50%] inline-block text-center py-2 bg-secondary text-primary-foreground hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition"
                            >
                                {t2("knowMore")}
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white max-w-6xl rounded-2xl mx-auto p-4 mt-10"
                >
                    <CircuitMap
                        circuits={circuitsNormandie}
                        zoom={12}
                        center={[49.44355768720817, 1.0919592991010125]}
                    />
                </motion.div>
            </Section>

            <Section className="my-0 sm:my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("natureTitle")}
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
                        <a href={`/${nature[0].category}?id=${nature[0].id}`}
                            className="w-full h-full rounded-xl overflow-hidden shadow-lg block relative"
                        >
                            <Image
                                src={nature[0].images[0]}
                                alt="Les calanques de Marseille"
                                fill
                                className="object-cover "
                            />

                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-semibold text-center px-4">
                                    {locale === "fr" ? nature[0].nameFR : nature[0].nameEN}
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

                        <a href={`/${nature[1].category}?id=${nature[1].id}`}
                            className="w-full h-full rounded-xl overflow-hidden shadow-lg block relative"

                        >
                            <Image
                                fill
                                src={nature[1].images[0]}
                                alt="La Cité radieuse – Le Corbusier"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-semibold text-center px-4">
                                    {locale === "fr" ? nature[1].nameFR : nature[1].nameEN}
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
                        <a href={`/${nature[2].category}?id=${nature[2].id}`}
                            className="w-full h-full rounded-xl overflow-hidden shadow-lg block relative"
                        >
                            <Image
                                src={nature[2].images[0]}
                                alt="Les îles du Frioul"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-semibold text-center px-4">
                                    {locale === "fr" ? nature[2].nameFR : nature[2].nameEN}
                                </h3>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </Section>

            <div >
                <div className=" relative sm:h-[30vh] sm:flex flex-col p-6 sm:bg-linear-to-b from-primary to-primary-foreground">
                    <h3 className="text-2xl text-center md:text-start sm:text-white">{t1("seasons")}</h3>
                    <h2 className="text-4xl font-inter text-center md:text-start md:mt-0 mt-5 sm:text-white ">{t1("seasonsSub")} </h2>
                </div>
                <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row  items-stretch gap-12">
                        {seasons.map((item, index) => (
                            <motion.a
                                href="http://www.linkedin.com/in/louis-leca"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                viewport={{
                                    amount: 0.5,
                                    once: true
                                }}
                                className="relative md:flex-1 h-56 bg-white rounded-3xl shadow-xl overflow-hidden"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h3 className="text-white text-2xl font-semibold text-center px-4">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.a>
                        ))}
                        <motion.a
                            href="/"
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            viewport={{
                                amount: 0.5,
                                once: true
                            }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="block bg-white shadow-lg rounded-2xl overflow-hidden  w-full sm:w-80 md:-translate-y-1/3"
                        >
                            <div className="relative h-48 sm:h-72 w-full ">
                                <Image
                                    src={featured.image}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center p-4  text-center">
                                <h3 className="text-lg sm:text-xl text-primary font-semibold ">
                                    {featured.title}
                                </h3>
                                <p className=" font-semibold  text-muted-foreground">
                                    {featured.description}
                                </p>
                            </div>
                        </motion.a>

                    </div>
                </div>
            </div>


            <Section className="py-10 bg-linear-to-br from-primary to-primary-foreground text-gray-600">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-white"
                    >
                        {t1("practical")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                icon: <Waves className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1674230316788-d9c8b92f0d63?q=80&w=1170&auto=format&fit=crop",
                                title: t1("tidesTitle"),
                                desc: t1("tidesDescription"),
                            },
                            {
                                icon: <ShieldAlert className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?q=80&w=1170&auto=format&fit=crop",
                                title: t1("securityTitle"),
                                desc: t1("securityDescription"),
                            },
                            {
                                icon: <SquareParking className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=1170&auto=format&fit=crop",
                                title: t1("accessTitle"),
                                desc: t1("accessDescription"),
                            },
                            {
                                icon: <Heart className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1170&auto=format&fit=crop",
                                title: t1("respectTitle"),
                                desc: t1("respectDescription"),
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: i * 0.4 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                            >
                                <div className="p-6">
                                    <div className="flex justify-center mb-3">
                                        <div className="flex items-center justify-center w-12 h-12 bg-secondary text-primary-foreground rounded-full">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-lg text-primary font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600 ">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>



        </>
    )
}
export default CoastPage