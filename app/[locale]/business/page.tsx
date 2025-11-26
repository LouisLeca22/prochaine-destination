"use client"

import { ContactForm } from "@/components/Home/Contact"
import CountUp from "@/components/ui/CountUp"
import HeaderPolygon from "@/components/ui/HeaderPolygon"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import SocialMasonry from "@/components/ui/SocialMasonry"
import { useCurrentLocale, useScopedI18n } from "@/locales/client"
import { motion } from "framer-motion"
import { Blocks, Bus, CarFront, HandHelping, HeartPlus, Hotel, LineSquiggle, Linkedin, MapPin, Palette, Sparkles, TrainFront, UtensilsCrossed } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { accommodations, activities, BaseItem } from "@/data";
import { useIsMobile } from "@/hooks/use-mobile";
import BandMap from "@/components/ui/BandMap"
import { useMemo } from "react"
import { selectItemById, selectItemsByIds } from "@/utils"
import Link from "next/link"
import { DataTable } from "@/components/ui/DataTable"
import { getDataSheetsColumns } from "@/components/Business/Sheet-columns"
import { getDataSheet } from "./businessData"
import Featured from "@/components/ui/Featured"
import OverlappingCards from "@/components/ui/OverlappingCards"

function BusinessPage() {
    const t1 = useScopedI18n("Business")
    const t2 = useScopedI18n("Components")
    const isMobile = useIsMobile()
    const headerImages = [
        "https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg",
        "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg",
    ]

    const allAccommodations = useMemo(() => accommodations, [])

    const businessAccomodations = selectItemsByIds(allAccommodations, [13, 25, 11, 21, 23, 24])

    const facilities = [
        {
            img: "https://images.unsplash.com/photo-1624800873328-129498d2847a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Centre de Congrès du Littoral",
            seated: 400,
            standing: 600,
            description: t1("cardOneDescription")
        },
        {
            img: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Domaine des Falaises",
            seated: 80,
            standing: 120,
            description: t1("cardTwoDescription")
        },
        {
            img: "https://images.unsplash.com/photo-1580930151648-e8eca9b60960?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Salle des Arts",
            seated: 200,
            standing: 300,
            description: t1("cardThreeDescription")
        },
        {
            img: "https://images.unsplash.com/photo-1596978893602-007a06fef2e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Espace Maréïs",
            seated: 250,
            standing: 350,
            description: t1("cardFourDescription")
        },
        {
            img: "https://images.unsplash.com/photo-1640912447762-af2fa2d3507d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Centre Atlantica",
            seated: 600,
            standing: 700,
            description: t1("cardFiveDescription")
        },
        {
            img: "https://images.unsplash.com/photo-1574267432309-3c7d5ed31b9e?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Théâtre du Rivage",
            seated: 400,
            standing: 500,
            description: t1("cardSixDescription")
        },
    ]

    const services = [
        {

            icon: <Blocks className="w-8 h-8 text-primary" />,
            title: t1("organizationTitle"),
            description: t1("organizationDescription")
        },
        {
            icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
            title: t1("restaurationTitle"),
            description: t1("restaurationDescription")
        },
        {
            icon: <Hotel className="w-8 h-8 text-primary" />,
            title: t1("accommodationTitle"),
            description: t1("accommodationDescription")
        },
        {
            icon: <HeartPlus className="w-8 h-8 text-primary" />,
            title: t1("assistanceTitle"),
            description: t1("assistanceDescription")
        }
    ]

    const references = [
        {
            title: t1("referenceOne"),
            participants: 250,
            place: "Palais des Congrès",
            img: "https://images.unsplash.com/photo-1626287935075-3275d2d9025e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("referenceTwo"),
            participants: 450,
            place: "Salle Atlantique",
            img: "https://images.unsplash.com/photo-1560088613-1bc2c78b26c7?q=80&w=1282&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        },
        {
            title: t1("referenceThree"),
            participants: 350,
            place: "Centre culturel",
            img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("referenceFour"),
            participants: 500,
            place: "Salle des Art",
            img: "https://images.unsplash.com/photo-1575029644286-efb9039cac46?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("referenceFive"),
            participants: 600,
            place: "Centre culturel",
            img: "https://images.unsplash.com/photo-1599592187465-6dc742367282?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("referenceSix"),
            participants: 450,
            place: "Centre de Congrès du Littoral",
            img: "https://images.unsplash.com/photo-1627931539006-d5c4677e05ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const locale = useCurrentLocale()

    const sheetsColumns = getDataSheetsColumns(locale)
    const dataSheets = getDataSheet(locale)

    const allActivities = useMemo(() => activities, [])
    const incentives = selectItemsByIds(allActivities, [23, 15, 11])
    const featured = selectItemById(allActivities, 25)!
    return (
        <>
            <header>
                <HeaderPolygon heading={t1("heading")} images={headerImages} />
                <motion.div
                    className="h-[35vh] p-3 md:p-0 flex max-w-xl mx-auto flex-col justify-center items-center text-center gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl underline-secondary">{t1("subHeading")}</h3>
                    <p className="text-2xl">{t1("description")}</p>
                </motion.div>
            </header>
            <Section className="my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("keyFigures")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <div className="grid md:grid-cols-4 gap-8 text-center text-gray-600 self-center  mt-10">
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold mb-2 text-primary">
                                <CountUp startWhen={true} from={0} to={120} />+
                            </p>
                            <p>{t1("eventsYear")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold  mb-2 text-primary">
                                <CountUp from={0} to={15} />K
                            </p>
                            <p>{t1("participants")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold mb-2 text-primary">
                                <CountUp from={0} to={25} />
                            </p>
                            <p>{t1("equipments")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold text-primary mb-2">
                                <CountUp from={0} to={15} />
                            </p>
                            <p>{t1("hotels")}</p>
                        </div>
                    </div>

                </div>
            </Section>


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
                        {t1("whyTitle")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                icon: <LineSquiggle className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1689907076141-f1094bc743f7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title: t1("accessibilityTitle"),
                                desc: t1("accessibilityDescription"),
                            },
                            {
                                icon: <Sparkles className="w-6 h-6" />,
                                img: "https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg",
                                title: t1("settingTitle"),
                                desc: t1("settingDescription"),
                            },
                            {
                                icon: <Hotel className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1588865198054-c83788106132?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title: t1("infrastructureTitle"),
                                desc: t1("infrastructureDescription"),
                            },
                            {
                                icon: <HandHelping className="w-6 h-6" />,
                                img: "https://images.pexels.com/photos/8171204/pexels-photo-8171204.jpeg",
                                title: t1("supportTitle"),
                                desc: t1("supportDescription"),
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
                                <div className="relative w-full h-40">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
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
                    <div className="grid  mt-15 md:grid-cols-1 lg:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <TrainFront className="w-4 h-4 " />,
                                title: t1("trainTitle"),
                                description: t1("trainDescription")
                            },
                            {
                                icon: <CarFront className="w-4 h-4" />,
                                title: t1("carTitle"),
                                description: t1("carDescription")
                            },
                            {
                                icon: <Bus className="w-4 h-4" />,
                                title: t1("transportationTitle"),
                                description: t1("transportationDescription")
                            }
                        ].map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: i * 0.4 }}
                                viewport={{ once: true, amount: 0.3 }}
                                key={i} className="bg-white p-6 rounded-2xl">
                                <h3 className="font-semibold text-lg mb-2 flex justify-center text-primary items-center gap-2"> {item.icon} {item.title} </h3>
                                <p>{item.description}</p>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </Section>

            <Section className="md:mt-40 mt-15">
                <div className="flex w-full sm:flex-row flex-col items-center relative">

                    <motion.div
                        className="sm:flex-1 w-full sm:h-[70vh] bg-linear-to-br from-primary to-primary-foreground flex items-center justify-center flex-col p-10"
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                        viewport={{
                            amount: 0.5,
                            once: true
                        }}
                    >
                        <h2 className="text-4xl font-josefin-sans text-center font-bold text-white mb-4">
                            {t1("facilityTitle")}
                        </h2>
                        <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />
                        <p className="text-lg text-center text-white px-6 leading-relaxed">
                            {t1("facilityDescription")}
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: -120 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                        viewport={{
                            amount: 0.5,
                            once: true
                        }} className="md:flex-3 overflow-hidden w-full py-10  z-20 sm:-ml-8">
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
                            {facilities.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="bg-white my-10  rounded-2xl  overflow-hidden shadow-lg transition">

                                        <div className="relative w-full h-56">
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <h3 className="font-semibold text-primary text-xl mb-2">
                                                {item.title}
                                            </h3>
                                            <p className=" font-bold text-primary-foreground mb-2">
                                                {t1("capacity")} {item.seated} {t1("seated")} / {item.standing} {t1("standing")}
                                            </p>
                                            <p className="text-gray-500">{item.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </Section>

            <Section className="my-20">
                <div className="max-w-6xl mx-auto flex items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("accommodations")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="mt-10">
                    <BandMap items={businessAccomodations} />
                </div>
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
                        {t1("servicesTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>

                <div className={'mt-15'}>
                    <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
                    <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
                            {services.map((item, index) => (
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
                                    className="group max-w-70 bg-white rounded-2xl shadow-md p-6 transition-all hover:-translate-y-2 hover:shadow-xl">

                                    <div className="flex flex-col items-center text-center">
                                        <div
                                            className="p-4 rounded-full mb-4 bg-secondary">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2 text-primary">{item.title}</h3>
                                        <p className=" text-gray-500 mb-4">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="max-w-6xl flex items-center justify-center mx-auto mt-20">
                            <p className="text-lg text-center">{t1("toolboxDescription")}</p>
                        </div>
                        <div className="flex w-full mx- flex-col md:flex-row items-center justify-center md:gap-8 md:mt-5">

                            <Link href="http://linkedin.com/in/louis-leca"
                                className="bg-secondary text-center mt-10 md:mt-0 self-center text-primary-foreground py-2 px-4 rounded-xl transition hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md"
                                target='_blank'>
                                {t1("practicalGuide")}
                            </Link>
                            <Link href="http://linkedin.com/in/louis-leca"
                                className="bg-secondary text-center mt-10 md:mt-0 self-center text-primary-foreground py-2 px-4 rounded-xl transition hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md"
                                target='_blank'>
                                {t1("downloadBrochure")}
                            </Link>
                            <Link href="http://linkedin.com/in/louis-leca"
                                className="bg-secondary text-center mt-10 md:mt-0 self-center text-primary-foreground py-2 px-4 rounded-xl transition hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md"
                                target='_blank'>
                                {t1("businessClub")}
                            </Link>
                        </div>

                        <div className="container mx-auto mt-10 max-w-6xl">
                            <DataTable columns={sheetsColumns} data={dataSheets} />
                        </div>
                    </div>
                </div>
            </Section >

            <Section className="md:my-40 my-0 px-10 md:px-0 mx-auto">
                <Featured items={incentives} featured={featured} heading="Incentives & Team Building" subHeading={t1("incentiveTitle")} />
                <OverlappingCards items={allActivities} buttonText={t2("inspire")} />
            </Section>




            <Section className="relative md:mt-60 mt-0 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center  flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=0%"
                        scrollEnd="bottom bottom-=50%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("referenceTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="max-w-6xl md:h-[50vh] mt-15 mx-auto ">
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
                        {references.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="overflow-hidden bg-white rounded-xl shadow-md">
                                    <div className="relative w-full h-64">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover hover:scale-105 transition"
                                        />
                                    </div>

                                    <div className="p-4 h-35 flex flex-col items-center justify-center gap-2">
                                        <h3 className="font-semibold text-primary text-lg">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600  mt-1 flex gap-2">
                                            {item.participants} {t1("attendees")} <MapPin className="w-4 h-4 text-primary" /> {item.place}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </Section>



            <Section className="my-0 sm:my-10">
                <div className=" max-w-6xl mx-auto flex items-center md:items-start flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=0%"
                        scrollEnd="bottom bottom-=50%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("linkedIn")}
                    </ScrollFloat>
                    <Separator width="w-48 mb-20 " />

                </div>


                <SocialMasonry
                    title={t2("followUs")}
                    images={[
                        "https://images.pexels.com/photos/10041266/pexels-photo-10041266.jpeg",
                        "https://images.unsplash.com/photo-1599592187465-6dc742367282?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1612359383347-245649cbb9d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1524733214610-fbe17dc08a54?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    ]}
                    socialLinks={[
                        { label: "LinkedIn", icon: <Linkedin size={28} />, href: "http://linkedin.com" },
                    ]}
                    hideOnMobile

                />


            </Section>

            <Section className="relative sm:my-20 my-0 p-10 md:p-0">

                <div className="max-w-6xl mx-auto flex flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("contactBusiness")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <div className="container mx-auto mt-5 max-w-6xl ">
                        <p className="md:text-2xl font-josefin-sans text-center">{t1("contactDescription")}</p>
                        <div className="flex md:flex-row flex-col mt-10">
                            <ContactForm />
                            <img src="/images/business/business.svg" className="w-[40%] md:block hidden " />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}
export default BusinessPage