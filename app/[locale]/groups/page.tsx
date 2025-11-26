"use client"

import { ContactForm } from "@/components/Home/Contact"
import BandMap from "@/components/ui/BandMap"
import CountUp from "@/components/ui/CountUp"
import { DoubleCards } from "@/components/ui/DoubleCards"
import HeaderPolygon from "@/components/ui/HeaderPolygon"
import MirrorGrid from "@/components/ui/MirrorGrid"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { accommodations, activities, restaurants } from "@/data"
import { useIsMobile } from "@/hooks/use-mobile"
import { useScopedI18n } from "@/locales/client"
import { selectItemById, selectItemsByIds } from "@/utils"
import { motion } from "framer-motion"
import { Eye, Handshake, Heart, Target } from "lucide-react"
import Image from "next/image";
import Link from "next/link"
import { useMemo } from "react"


function page() {

    const t1 = useScopedI18n("Groups")
    const isMobile = useIsMobile()

    const headerImages = [
        "https://images.unsplash.com/photo-1589634752793-aabd114351ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/7624845/pexels-photo-7624845.jpeg",
        "https://images.pexels.com/photos/7938728/pexels-photo-7938728.jpeg"
    ]

    const featuredTours = [
        {
            img: "https://images.unsplash.com/photo-1621846846625-f0bde2eb7c3c?q=80&w=1076&auto=format&fit=crop",
            title: t1("freshTourTitle"),
            desc: t1("freshTourDescription"),
        },
        {
            img: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=1170&auto=format&fit=crop",
            title: t1("impressionismTitle"),
            desc: t1("impressionismDescription"),
        },
        {
            img: "https://images.unsplash.com/photo-1584946815081-7fb21ed8c450?q=80&w=1128&auto=format&fit=crop",
            title: t1("traditionTitle"),
            desc: t1("traditionDescription"),
        },
    ];




    const extraTours = [
        {
            title: t1("littoral"),
            image: "https://images.unsplash.com/photo-1543988884-c01cfa7b41c2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("waterBalade"),
            image: "https://images.unsplash.com/photo-1665762724766-9f63bc9422e3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("wellnessTitle"),
            image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("memory"),
            image: "https://images.pexels.com/photos/6366478/pexels-photo-6366478.jpeg"
        },
        {
            title: t1("seine"),
            image: "https://images.unsplash.com/photo-1560249630-8dc2033917ef?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("cidre"),
            image: "https://images.unsplash.com/photo-1542634093-e0198d4d1e46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const servicesItems = [
        {
            title: t1("experienceTitle"),
            desc: t1("experienceDescription")
        },
        {
            title: t1('offersTitle'),
            desc: t1("offersDescription")
        },
        {
            title: t1("localTitle"),
            desc: t1("localDescription")
        }
    ]

    const allAccommodations = useMemo(() => accommodations, [accommodations])
    const allRestaurants = useMemo(() => restaurants, [])

    const groupAccommodations = selectItemsByIds(allAccommodations, [1, 7, 14, 16, 19, 21])
    const groupRestaurants = selectItemsByIds(allRestaurants, [1, 2, 9, 15, 16])


    return (
        <>
            <header>
                <HeaderPolygon heading={t1("Heading")} images={headerImages} />
                <motion.div
                    className="mt-20 flex max-w-xl mx-auto flex-col justify-center items-center text-center gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
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
                                <CountUp startWhen={true} from={0} to={250} />
                            </p>
                            <p>{t1("groups")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold  mb-2 text-primary">
                                <CountUp from={0} to={25} />
                            </p>
                            <p>{t1("circuits")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold mb-2 text-primary">
                                <CountUp from={0} to={48} />h
                            </p>
                            <p>{t1("delay")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold text-primary mb-2">
                                <CountUp from={0} to={94} />%
                            </p>
                            <p>{t1("satisfaction")}</p>
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
                        {t1("fourAssets")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                icon: <Handshake className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1674230316788-d9c8b92f0d63?q=80&w=1170&auto=format&fit=crop",
                                title: t1("authenticityTitle"),
                                desc: t1("authenticityDescription"),
                            },
                            {
                                icon: <Eye className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?q=80&w=1170&auto=format&fit=crop",
                                title: t1("accessibilityTitle"),
                                desc: t1("accessibilityDescription"),
                            },
                            {
                                icon: <Target className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=1170&auto=format&fit=crop",
                                title: t1("tailoredTitle"),
                                desc: t1("tailoredDescription"),
                            },
                            {
                                icon: <Heart className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1170&auto=format&fit=crop",
                                title: t1("wayOfLifeTitle"),
                                desc: t1("wayOfLifeDescription"),
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
                </div>
            </Section>

            <Section className="relative my-0 md:my-20 p-10 md:p-0">

                <div className="max-w-6xl mx-auto flex  flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("stayTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <div className="grid md:grid-cols-3 gap-10 mt-10">
                        {featuredTours.map((item, i) => (
                            <motion.a
                                href="http://linkedin.com/in/louis-leca"
                                key={i}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="relative  rounded-2xl overflow-hidden shadow-lg group"
                            >
                                <div className="relative w-full h-64">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 p-6 text-white">
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                    <p className=" text-gray-200 mt-2">{item.desc}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                </div>

                <div className="mt-10">
                    <MirrorGrid cards={extraTours} />
                </div>

            </Section>

            <Section className="my-0 md:my-40 p-10 md:p-0">
                <DoubleCards
                    title={t1("accommodationAndRestaurantsTitle")}
                    description={t1("accommodationAndRestaurantsDescription")}
                    images={[
                        "https://images.unsplash.com/photo-1539268222734-fb0aa2d0d679?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                    ]}
                    smallTitle={true}
                />
                <div className="mt-10">

                    <BandMap items={[...groupAccommodations, ...groupRestaurants]} />
                </div>
            </Section>


            <Section className="my-0 md:my-40 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("tourOperatorTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>

                <div className={isMobile ? 'mt-15 bg-linear-to-b from-primary to-primary-foreground' : 'mt-15'}>
                    <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
                    <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
                            {servicesItems.map((item, index) => (
                                <motion.a
                                    href={`http://www.linkedin.com/in/louis-leca`}
                                    target="_blank"
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -6 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    viewport={{
                                        amount: 0.5,
                                        once: true
                                    }}
                                    className="flex-1 bg-white overflow-hidden  backdrop-blur-lg rounded-2xl shadow hover:shadow-xl transform hover:-translate-y-2 transition"
                                >
                                    <div className="p-6 flex flex-col text-center justify-center items-center ">
                                        <h3 className="text-xl text-primary font-semibold mb-2 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className=" font-semibold  text-gray-600">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                        <div className="flex w-full flex-col md:flex-row items-center justify-center md:gap-8 md:mt-15 ">
                            <Link href="http://linkedin.com/in/louis-leca"
                                className="bg-secondary mt-10 md:mt-0 self-center text-primary-foreground py-2 px-4 rounded-xl transition hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md"
                                target='_blank'>
                                {t1("quoteButton")}
                            </Link>
                            <Link href="http://linkedin.com/in/louis-leca"
                                className="bg-secondary mt-10 md:mt-0 self-center text-primary-foreground py-2 px-4 rounded-xl transition hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md"
                                target='_blank'>
                                {t1("brochureButton")}
                            </Link>

                        </div>
                    </div>
                </div>
            </Section>

            <Section className="relative sm:my-20 p-10 md:p-0">

                <div className="max-w-6xl mx-auto flex flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=100%"
                        scrollEnd="bottom bottom-=5%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("contactGroupTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <div className="container mx-auto mt-5 max-w-6xl ">
                        <p className="md:text-2xl font-josefin-sans text-center">{t1("contactGroupDescription")}</p>
                        <div className="flex md:flex-row flex-col mt-10">
                            <ContactForm />
                            <img src="/images/groups/groups.svg" className="w-[40%] md:block hidden " />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}
export default page