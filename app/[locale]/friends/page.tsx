'use client'

import HeaderSlider from "@/components/ui/HeaderSlider"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { activities } from "@/data"
import { useCurrentLocale, useScopedI18n } from "@/locales/client"
import { selectItemsByIds } from "@/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"

function FriendsPage() {

    const t1 = useScopedI18n("Friends")
    const t2 = useScopedI18n("Components")
    const locale = useCurrentLocale()

    const headerImages = [
        "https://images.unsplash.com/photo-1495837174058-628aafc7d610?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1699709989316-6702f649432c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZyZWluZHN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1565182396194-7e2a07c32c2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZyZWluZHN8ZW58MHx8MHx8fDA%3D",
        "https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg",
        "https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg"
    ]

    const experiences = [
        {
            title: t1("experienceOneTitle"),
            description: t1("experienceOneDescription"),
            tips: t1("experienceOneTips"),
            image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("experienceTwoTitle"),
            description: t1("experienceTwoDescription"),
            tips: t1("experienceTwoTips"),
            image: "https://images.unsplash.com/photo-1761207850889-75d5765d33c0?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("experienceThreeTitle"),
            description: t1("experienceThreeDescription"),
            tips: t1("experienceThreeTips"),
            image: "https://images.pexels.com/photos/4873699/pexels-photo-4873699.jpeg"
        },
        {
            title: t1("experienceFourTitle"),
            description: t1("experienceFourDescription"),
            tips: t1("experienceFourTips"),
            image: "https://images.unsplash.com/photo-1758764055762-745bd68fa01a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("experienceFiveTitle"),
            description: t1("experienceFiveDescription"),
            tips: t1("experienceFiveTips"),
            image: "https://images.pexels.com/photos/1267323/pexels-photo-1267323.jpeg"
        },


    ]

    const allActivities = useMemo(() => activities, [])

    const top3 = selectItemsByIds(allActivities, [7, 8, 1])
    return (
        <>
            <header>
                <HeaderSlider heading={t1("heading")} images={headerImages} />
                <motion.div
                    className="mt-20 flex max-w-xl mx-auto flex-col justify-center items-center text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl underline-secondary">{t1("description")}</h3>

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
                        textClassName="text-2xl w-60 sm:w-full sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("top3")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="mx-auto mt-10 md:mt-20 md:mb-60  relative w-full max-w-6xl flex flex-col-reverse gap-4 md:gap-0 sm:flex-row">
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

                    <motion.div
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, amount: .5 }}
                        className="md:translate-y-1/2 w-full md:w-[400px] h-64 rounded-xl  shadow-2xl z-30 relative"
                    >
                        <div className="absolute -top-3 -left-3 bg-primary text-white w-12 h-12  flex items-center justify-center rounded-full shadow-lg text-2xl font-bold z-20">
                            2
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
                            3
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


            <Section className="py-10 bg-linear-to-b from-primary to-primary-foreground">
                <div className="max-w-6xl mx-auto text-center">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl max-w-[75vw] sm:text-3xl font-josefin-sans font-bold text-white"
                    >
                        {t1("experienceTitle")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />
                </div>

                <div className="grid md:grid-cols-3 gap-5 max-w-7xl mx-auto px-6">
                    {experiences.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition"
                        >
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700"
                                />
                            </div>

                            <div className="p-6 flex flex-col justify-between h-64 items-center">

                                <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                                <p className="text-gray-600 mt-2 text-center text-sm">{item.description}</p>

                                <Link href="http://www.linkedin.com/in/louis-leca" target="_blank"
                                    className="inline-block bg-secondary text-primary-foreground px-4 py-2 w-1/2 mx-auto  text-center rounded-lg text-sm font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                    {t2("hot")}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    )
}
export default FriendsPage