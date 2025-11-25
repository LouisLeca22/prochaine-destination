'use client'

import HeaderSlider from "@/components/ui/HeaderSlider"
import QuizComponent from "@/components/ui/QuizzComponents"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import SocialMasonry from "@/components/ui/SocialMasonry"
import ThreeCards from "@/components/ui/ThreeCards"
import ThreePlayers from "@/components/ui/ThreePlayers"
import { accommodations, activities } from "@/data"
import { useIsMobile } from "@/hooks/use-mobile"
import { useCurrentLocale, useScopedI18n } from "@/locales/client"
import { selectItemsByIds } from "@/utils"
import { motion } from "framer-motion"
import { ArrowRight, BadgeEuro, CircleCheck, Instagram, Martini, Tent, Wifi } from "lucide-react"
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

    const days = [
        {
            title: t1("dayOneTitle"),
            li: [
                t1("dayOneLiOne"),
                t1("dayOneLiTwo"),
                t1("dayOneLiThree"),
                t1("dayOneLiFour")
            ],
            tips: t1("dayOneTips"),
            image: "https://images.pexels.com/photos/928447/pexels-photo-928447.jpeg"
        },
        {
            title: t1("dayTwoTitle"),
            li: [
                t1("dayTwoLiOne"),
                t1("dayTwoLiTwo"),
                t1("dayTwoLiThree"),
                t1("dayTwoLiFour")
            ],
            tips: t1("dayTwoTips"),
            image: "https://images.pexels.com/photos/3058762/pexels-photo-3058762.jpeg"
        },
        {
            title: t1("dayThreeTitle"),
            li: [
                t1("dayThreeLiOne"),
                t1("dayThreeLiTwo"),
                t1("dayThreeLiThree"),
                t1("dayThreeLiFour")
            ],
            tips: t1("dayThreeTips"),
            image: "https://images.pexels.com/photos/6180389/pexels-photo-6180389.jpeg"
        },
    ]

    const chill = [
        {
            title: t1("chillOneTitle"),
            description: t1("chillOneDescription"),
            image: "https://images.pexels.com/photos/8760386/pexels-photo-8760386.jpeg"
        },
        {
            title: t1("chillTwoTitle"),
            description: t1("chillTwoDescription"),
            image: "https://images.pexels.com/photos/534049/pexels-photo-534049.jpeg"
        },
        {
            title: t1("chillThreeTitle"),
            description: t1("chillThreeDescription"),
            image: "https://images.pexels.com/photos/542555/pexels-photo-542555.jpeg"
        },
    ]

    const deals = [
        {
            title: t1("dealOneTitle"),
            description: t1("dealOneDescription"),
            icon: <BadgeEuro className="h-8 w-8 text-primary-foreground" />
        },
        {
            title: t1("dealTwoTitle"),
            description: t1("dealTwoDescription"),
            icon: <Tent className="h-8 w-8 text-primary-foreground" />
        },
        {
            title: t1("dealThreeTitle"),
            description: t1("dealThreeDescription"),
            icon: <Martini className="h-8 w-8 text-primary-foreground" />
        },
        {
            title: t1("dealFourTitle"),
            description: t1("dealFourDescription"),
            icon: <Wifi className="h-8 w-8 text-primary-foreground" />
        }
    ]

    const allActivities = useMemo(() => activities, [])
    const isMobile = useIsMobile()

    const allAcccomodations = useMemo(() => accommodations, [])

    const top3 = selectItemsByIds(allActivities, [25, 16, 1])

    const sleepItems = selectItemsByIds(allAcccomodations, [3, 18, 9])

    const tonight = [
        {
            title: t1("tonightOneTitle"),
            description: t1("tonightOneDescription"),
            image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("tonightTwoTitle"),
            description: t1("tonightTwoDescription"),
            image: "https://images.unsplash.com/photo-1546622891-02c72c1537b6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("tonightThreeTitle"),
            description: t1("tonightThreeDescription"),
            image: "https://images.pexels.com/photos/1766682/pexels-photo-1766682.jpeg"
        },

    ]

    const steps = [
        {
            question: t1("quizQOne"),
            answers: [
                t1("quizQOneAOne"),
                t1("quizQOneATwo"),
                t1("quizQOneAThree"),
            ]
        },
        {
            question: t1("quizQTwo"),
            answers: [
                t1("quizQTwoAOne"),
                t1("quizQTwoATwo"),
                t1("quizQTwoAThree"),
            ]
        },
        {
            question: t1("quizQThree"),
            answers: [
                t1("quizQThreeAOne"),
                t1("quizQThreeATwo"),
                t1("quizQThreeAThree"),
            ]
        },
        {
            question: t1("quizQFour"),
            answers: [
                t1("quizQFourAOne"),
                t1("quizQFourATwo"),
                t1("quizQFourAThree"),
            ]
        },
    ];

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

            <Section className="w-full my-10 md:py-20 relative overflow-hidden">
                <div className="max-w-6xl mx-auto flex items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl w-60 sm:w-full sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("experienceTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>

                <div className="relative max-w-6xl mx-auto  flex justify-center items-end mt-10">
                    <div className="relative flex flex-col sm:flex-row items-end justify-center gap-6 md:gap-10">

                        {experiences.map((exp, i) => {

                            const angle = (i - 2) * (isMobile ? 1 : 2)

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6, delay: i * 0.12 }}
                                    style={{
                                        rotate: angle,
                                    }}
                                    className=" bg-white cursor-pointer shadow-xl rounded-3xl overflow-hidden relative"
                                >

                                    <div className="relative w-full h-40">
                                        <Image
                                            src={exp.image}
                                            alt={exp.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>


                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-primary mb-2">
                                            {exp.title}
                                        </h3>
                                        <p className="text-gray-700 text-sm mb-3">
                                            {exp.description}
                                        </p>

                                        <div className="bg-sky-50 border-l-4 border-primary p-3 rounded-md text-sm text-primary-foreground italic">
                                            {exp.tips}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Section>

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
                        {t1("daysTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                </div>

                <p className="text-xl my-10 mx-auto text-center">{t1("daysDescription")}</p>

                <div className={'mt-15'}>
                    <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
                    <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
                            {days.map((item, index) => (
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
                                    className="group max-w-70 bg-white cursor-pointer rounded-2xl shadow-md  transition-all hover:-translate-y-2 hover:shadow-xl">

                                    <div className="rounded-t-2xl overflow-hidden h-48 relative">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="p-5">
                                        <ul className="space-y-3">
                                            {item.li.map((i, index) => (
                                                <li key={index} className="text-gray-700 flex gap-2 text-sm leading-relaxed">
                                                    <CircleCheck className="w-4 h-5 text-primary" />  {i}
                                                </li>
                                            ))}
                                        </ul>


                                        <p className="mt-6 text-sm text-gray-600">
                                            <strong> {item.tips} </strong>
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </Section >

            <Section className="relative my-0 md:my-30 p-10 md:p-0">

                <div className="max-w-6xl mx-auto flex items-center sm:items-start flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center sm:w-full font-bold text-primary"
                    >
                        {t1("chillTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <p className="my-10 mx-auto text-center">{t1("chillDescription")}</p>
                </div>
                <div className="space-y-16 max-w-6xl mx-auto mt-10">
                    {chill.map((item, index) => (
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
                                <Link href="http://www.linkedin.com/in/louis-leca"
                                    className="w-1/2 mx-auto text-center  bg-secondary text-primary-foreground px-4 py-2 rounded-lg mt-3 text-sm font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                    {t2("discover")}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <QuizComponent items={top3} steps={steps} title={t1("quizTitle")} description={t1("quizDescription")} />

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
                        {t1("playersTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <p className="text-xl mx-auto text-center my-5">{t1("playersDescription")}</p>

                    <ThreePlayers srcs={
                        ["/audios/podcast.mp3",
                            "/audios/podcast.mp3",
                            "/audios/podcast.mp3"
                        ]
                    }

                        covers={[
                            "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            "https://images.pexels.com/photos/13017023/pexels-photo-13017023.jpeg",
                            "https://images.pexels.com/photos/7502561/pexels-photo-7502561.jpeg"
                        ]}

                        titles={[
                            "Ville Fantôme 808",
                            "Étoiles en Plastique",
                            "Midnight Coffee & Brass"
                        ]}

                    />
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
                        {t1("rainTitle")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                    <p className="my-10 mx-auto text-center text-xl text-white">{t1("rainDescription")}</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                img: "https://images.unsplash.com/photo-1463871181391-8550cd89c179?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title: t1("rainOneTitle"),
                                desc: t1("rainOneDescription"),
                            },
                            {
                                img: "https://images.unsplash.com/photo-1677188010559-0667a1ed33a0?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title: t1("rainTwoTitle"),
                                desc: t1("rainTwoDescription"),
                            },
                            {
                                img: "https://images.unsplash.com/photo-1589051079002-b140a970f568?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title: t1("rainThreeTitle"),
                                desc: t1("rainThreeDescription"),
                            },
                            {
                                img: "https://images.pexels.com/photos/269110/pexels-photo-269110.jpeg",
                                title: t1("rainFourTitle"),
                                desc: t1("rainFourDescription"),
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
                                <div className="p-6 flex flex-col min-h-54 justify-between items-center">
                                    <h3 className="text-lg text-primary font-semibold ">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                    <Link href="http://www.linkedin.com/in/louis-leca"
                                        className=" mx-auto text-center  bg-secondary text-primary-foreground px-3 py-1 rounded-lg mt-3 text-sm font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                        {t2("hot")}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>


            <Section className="relative my-0 sm:my-20 p-10 md:p-0">

                <div className="max-w-6xl mx-auto flex mb-10 items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("accommodationTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <ThreeCards items={sleepItems} />
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
                        {t1("dealTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <p className="mx-auto text-center text-lg">{t1("dealDescription")}</p>
                </div>

                <div className={'mt-15'}>
                    <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
                    <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
                            {deals.map((item, index) => (
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
                                    className="group max-w-70 bg-white cursor-pointer rounded-2xl shadow-md p-6 transition-all hover:-translate-y-2 hover:shadow-xl">

                                    <div className="flex flex-col items-center text-center">
                                        <div
                                            className="p-4 rounded-full mb-4 bg-secondary">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2 text-primary">{item.title}</h3>
                                        <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </Section >


            <Section className="my-0 md:my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center sm:items-start flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("tonightTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="w-full flex justify-center py-20">
                    <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
                        {tonight.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="relative group cursor-pointer h-full"
                            >
                                <motion.div
                                    whileHover={{ rotate: i % 2 === 0 ? -2 : 2, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="bg-white backdrop-blur-xl border-primary border-3 rounded-3xl p-6 shadow-2xl relative overflow-visible 
                                          flex flex-col justify-between min-h-60"
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 rounded-2xl overflow-hidden shadow-xl rotate-3 group-hover:rotate-0 transition-all duration-500">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={300}
                                            height={300}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>

                                    <div className="pt-36 text-center flex flex-col flex-grow">
                                        <h3 className="text-xl text-primary font-semibold mb-3 ">
                                            {item.title}
                                        </h3>

                                        <p className=" text-gray-600 leading-relaxed mb-6">
                                            {item.description}
                                        </p>

                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-2 justify-center text-sm opacity-80 hover:opacity-100 transition mt-auto"
                                        >
                                            <ArrowRight size={16} className="text-secondary-foreground" />
                                            <Link className="text-secondary-foreground" href="http://www.linkedin.com/in/louis-leca" target="_blank">
                                                {t2("seeMore")}
                                            </Link>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -10, 0], opacity: [0.6, 0.4, 0.6] }}
                                    transition={{ duration: 6 + i, repeat: Infinity }}
                                    className="absolute -z-10 -bottom-10 left-1/2 -translate-x-1/2 w-56 h-56 bg-purple-400/20 blur-3xl rounded-full"
                                />
                            </motion.div>
                        ))}
                    </div>
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
                        {t1("followTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 mb-20 " />

                </div>


                <SocialMasonry
                    title={t2("followUs")}
                    images={[
                        "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1530047139082-5435ca3c4614?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1500027014421-46ccc843776a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1560821829-18a5fbb8b4ce?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    ]}
                    socialLinks={[
                        { label: "Instagram", icon: <Instagram size={28} />, href: "http://linkedin.com" },
                    ]}
                    hideOnMobile

                />
            </Section>


        </>
    )
}
export default FriendsPage