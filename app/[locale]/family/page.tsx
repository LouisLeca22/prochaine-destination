'use client'

import AnimatedLink from "@/components/ui/AnimatedLink"
import Carrousel from "@/components/ui/Carrousel"
import HeaderSlider from "@/components/ui/HeaderSlider"
import QuizComponent from "@/components/ui/QuizzComponents"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { accommodations, activities } from "@/data"
import { useScopedI18n } from "@/locales/client"
import { selectItemsByIds } from "@/utils"
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion"
import { Baby, CheckCircle, Hash, Pill, Trees, Volleyball } from "lucide-react"
import Image from "next/image"
import { useMemo, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

function FamilyPage() {

    const t1 = useScopedI18n("Family")
    const t2 = useScopedI18n("Components")

    const isMobile = useIsMobile()

    const headerImages = [
        "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1529180979161-06b8b6d6f2be?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1622610607501-32ac9c927216?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const whys = [
        {
            title: t1('whyOneTitle'),
            description: t1("whyOneDescription"),
            icon: <Volleyball className="h-8 w-8 text-primary-foreground" />
        },
        {
            title: t1("whyTwoTitle"),
            description: t1("whyOneDescription"),
            icon: <Baby className="h-8 w-8 text-primary-foreground" />

        },
        {
            title: t1("whyThreeTitle"),
            description: t1("whyThreeDescription"),
            icon: <Pill className="h-8 w-8 text-primary-foreground" />
        },
        {
            title: t1("whyFourTitle"),
            description: t1("whyFourDescription"),
            icon: <Trees className="h-8 w-8 text-primary-foreground" />
        }
    ]


    const tabs = [
        { key: "0-4", label: t1("ageOne") },
        { key: "5-10", label: t1("ageTwo") },
        { key: "11-17", label: t1("ageThree") },
    ];

    const ageGroup: Record<string, { title: string; description: string, image: string }[]> = {
        "0-4": [
            {
                title: t1("activityOneTitle"),
                description: t1("activityOneDescription"),
                image: "https://images.pexels.com/photos/296357/pexels-photo-296357.jpeg"
            },
            {
                title: t1("activityTwoTitle"),
                description: t1("activityTwoDescription"),
                image: "https://images.unsplash.com/photo-1460788150444-d9dc07fa9dba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                title: t1("activitySevenTitle"),
                description: t1("activitySevenDescription"),
                image: "https://images.unsplash.com/photo-1621610977729-de348e71ddd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        ],
        "5-10": [
            {
                title: t1("activityThreeTitle"),
                description: t1("activityThreeDescription"),
                image: "https://images.unsplash.com/photo-1642211841112-2beeda7bfc07?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                title: t1("activityFourTitle"),
                description: t1("activityFourDescription"),
                image: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                title: t1("activityEightTitle"),
                description: t1("activityEightDescription"),
                image: "https://images.unsplash.com/photo-1652447275071-4bf852aebdc5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },

        ],
        "11-17": [
            {
                title: t1("activityFiveTitle"),
                description: t1("activityFiveDescription"),
                image: "https://images.unsplash.com/photo-1472745942893-4b9f730c7668?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                title: t1("activitySixTitle"),
                description: t1("activitySixDescription"),
                image: "https://images.unsplash.com/photo-1561063162-b47865516e6a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            },
            {
                title: t1("activityNineTitle"),
                description: t1("activityNineDescription"),
                image: "https://images.unsplash.com/photo-1505778276668-26b3ff7af103?q=80&w=1161&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
        ],
    };

    const [selected, setSelected] = useState("0-4");

    const t3 = useScopedI18n("CityPass")

    const spots = [
        {
            img: "https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tags: [
                t1("spotOneBadgeOne"),
                t1("spotOneBadgeTwo"),
                t1("spotOneBadgeThree")
            ],
            title: t1("spotOneTitle"),
            description: t1("spotOneDescription"),
        },
        {
            img: "https://images.unsplash.com/photo-1633379205701-48b324e96a54?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tags: [
                t1("spotTwoBadgeOne"),
                t1("spotTwoBadgeTwo"),
                t1("spotTwoBadgeThree")
            ],
            title: t1("spotTwoTitle"),
            description: t1("spotTwoDescription"),
        },
        {
            img: "https://images.unsplash.com/photo-1717388835937-f5f31bbb4cf8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tags: [
                t1("spotThreeBadgeOne"),
                t1("spotThreeBadgeTwo"),
                t1("spotThreeBadgeThree")
            ],
            title: t1("spotThreeTitle"),
            description: t1("spotThreeDescription"),
        },
    ]

    const passes = [
        {
            duration: "24h",
            title: t3("optionOne"),
            priceAdults: 25,
            priceChildren: 22
        },
        {
            duration: "48h",
            title: t3("optionTwo"),
            priceAdults: 40,
            priceChildren: 38
        },
        {
            duration: "72h",
            title: t3("optionThree"),
            priceAdults: 60,
            priceChildren: 56
        },
    ];

    const rainItems = [
        {
            title: t1("rainOneTitle"),
            description: t1("rainOneDescription"),
            image: "https://images.unsplash.com/photo-1629822908853-b1d2a39ece98?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("rainTwoTitle"),
            description: t1("rainTwoDescription"),
            image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const allAccommodations = useMemo(() => accommodations, [])

    const rentals = selectItemsByIds(allAccommodations, [2, 3, 6, 7, 9, 10, 12, 13, 16, 20, 22])

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

    const allActivities = useMemo(() => activities, [])
    const familyItems = selectItemsByIds(allActivities, [7, 8, 9, 10])

    const events = [
        {
            title: t1("eventOneTitle"),
            image: "https://images.unsplash.com/photo-1571849291280-89f81a772893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVzdGl2YWwlMjBkdSUyMGNlcmYtdm9sYW50fGVufDB8fDB8fHww"
        },
        {
            title: t1("eventTwoTitle"),
            image: "https://images.unsplash.com/photo-1663532152452-356ba89b4ac9?q=80&w=865&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("eventThreeTitle"),
            image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
        }
    ]

    const testimonials = [
        {
            name: "Noah",
            testimony: t1("testimonyOne"),
            image: "/images/family/kidOne.jpg"
        },
        {
            name: "Malo",
            testimony: t1("testimonyTwo"),
            image: "/images/family/kidTwo.jpg"
        },
        {
            name: "Louna",
            testimony: t1("testimonyThree"),
            image: "/images/family/kidThree.jpg"
        },
        {
            name: "Liam",
            testimony: t1("testimonyFour"),
            image: "/images/family/kidFour.jpg"
        },
        {
            name: "Aria",
            testimony: t1("testimonyFive"),
            image: "/images/family/kidFive.jpg"
        },
        {
            name: "Soren",
            testimony: t1("testimonySix"),
            image: "/images/family/kidSix.jpg"
        }
    ]

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

            <Section className="my-0 sm:my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("whyTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <p className="text-xl mx-auto text-center my-10">{t1("whyDescription")}</p>
                </div>

                <div className={'md:mt-15'}>
                    <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
                    <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
                            {whys.map((item, index) => (
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
                                        <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </Section >

            <Section className="max-w-5xl mx-auto  md:my-20 my-10 px-6 sm:px-0">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-xl sm:text-3xl  font-josefin-sans text-center  font-bold text-primary"
                >
                    {t1("activitiesTitle")}
                </ScrollFloat>
                <Separator width="w-48 " />

                <div className="flex justify-center gap-4 my-10 relative">
                    {tabs.map((tab) => {
                        const isActive = selected === tab.key;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => setSelected(tab.key)}
                                className={`relative px-5 py-2 rounded-full border transition 
                                ${isActive ? "text-white bg-primary border-primary" : "text-gray-700 bg-gray-100 border-gray-300"}
                            `}
                            >
                                {tab.label}

                                {isActive && (
                                    <motion.div
                                        layoutId="pill"
                                        className="absolute inset-0 bg-primary rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-wrap justify-center gap-8"
                    >
                        {ageGroup[selected].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="
                    w-full sm:w-[45%] lg:w-[30%]
                    bg-white rounded-3xl shadow-lg border  overflow-hidden
                "
                            >
                                <div className="relative w-full h-40">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-primary mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

            </Section>

            <QuizComponent steps={steps} items={familyItems} title={t1("quizTitle")} description={t1("quizDescription")} />


            <Section className="w-full  md:my-20 py-10 px-4 mx-auto max-w-6xl ">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                >
                    {t1("spotsTitle")}
                </ScrollFloat>
                <Separator width="w-48 " />

                <div className="flex flex-wrap justify-center gap-10 mt-10 ">
                    {spots.map((spot, i) => (
                        <motion.div
                            key={i}
                            className="w-full max-w-[340px] bg-white backdrop-blur-md rounded-2xl  border-white/10 
                 shadow-xl overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative w-full h-52">
                                <Image
                                    src={spot.img}
                                    alt={spot.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6 flex flex-col gap-4">


                                <h3 className="text-lg font-semibold text-primary">{spot.title}</h3>
                                <p className="text-sm opacity-80 leading-relaxed text-gray-600">
                                    {spot.description}
                                </p>
                                <div className="flex gap-2 flex-wrap text-gray-600">
                                    {spot.tags.map((tag, i) => (
                                        <span
                                            key={tag}
                                            className="flex items-center border border-primary  gap-1 px-2 py-1 text-xs font-medium rounded-full text-gray-600 bg-secondary"
                                        >
                                            <Hash className="w-3 h-3 text-primary" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section className="my-0 md:my-20 p-10 md:p-0">

                <div className="max-w-6xl mx-auto flex items-center flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center  font-bold text-primary"
                    >
                        {t1("cityPass")}
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
                                        {i == 1 && (<div className="text-center text-white bg-secondary-foreground p-1">{t3("popular")}</div>)}
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

                                                <span className="text-primary text-xl ">{p.priceAdults}€</span><span>{t3("adults")}</span>
                                            </div>
                                            <div className="flex gap-8 text-black justify-center items-center ">

                                                <span className="text-primary text-xl ">{p.priceChildren}€</span><span>{t3("children")}</span>
                                            </div>
                                        </div>

                                        <AnimatedLink href="http://linkedin.com/in/louis-leca" text={t3("buyButton")} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </Section>

            <Section className="py-10 my-20 bg-linear-to-br from-primary to-primary-foreground text-gray-600">
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


                    {rainItems.map((exp, index) => {
                        const isLeftImage = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-center gap-8 mt-10 md:-mt-0 ${isLeftImage ? '' : 'md:flex-row-reverse'}`}
                            >
                                {exp.image && (
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="relative w-full md:w-1/2 h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg"
                                    >
                                        <Image src={exp.image} alt={exp.title} fill className="object-cover" />
                                    </motion.div>
                                )}


                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="flex-1 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-md"
                                >
                                    <h3 className="text-2xl font-semibold text-primary mb-4">{exp.title}</h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                                </motion.div>
                            </motion.div>
                        );
                    })}

                </div>
            </Section>

            <Section className="my-0 md:my-20 p-10 md:p-0">
                <Carrousel items={rentals} title={t1("accommodationTitle")} description={t1("accommodationDescription")} />
            </Section>

            <Section className="relative my-0 md:my-20 p-10 md:p-0">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 dark:bg-transparent left-1/4 w-40 h-40 bg-primary/40 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 dark:bg-transparent right-1/4 w-56 h-56 bg-primary/30 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-6xl mx-auto flex  flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("eventsTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <div className="grid md:grid-cols-3 gap-10 mt-10">
                        {events.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="relative rounded-2xl overflow-hidden shadow-lg group"
                            >
                                <div className="relative w-full h-64">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 p-6 text-white">
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </Section>

            <Section className="sm:my-20 my-0 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center md:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=60%"
                        stagger={0.03}
                        textClassName="text-2xl  sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("testimonialTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="max-w-6xl h-[50vh] mx-auto mt-10">
                    <Swiper
                        slidesPerView={isMobile ? 1 : 3}
                        spaceBetween={isMobile ? 0 : 30}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        className="w-full h-full"
                    >
                        {testimonials.map((item, i) => (
                            <SwiperSlide key={i}>

                                <div className=" w-full h-full flex items-center justify-center p-4">
                                    <div className="relative rounded-3xl shadow-lg  bg-white w-full h-full">
                                        <span className="absolute -top-4 left-6 text-6xl text-primary font-serif select-none">“</span>
                                        <span className="absolute -bottom-10 right-8 text-6xl text-primary font-serif select-none">”</span>

                                        <div className="flex flex-col h-full justify-center items-center">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={20}
                                                height={20}
                                                className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-4 border-primary"
                                            />
                                            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                                            <p className="text-gray-600 px-8 text-center italic leading-relaxed">
                                                {item.testimony}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Section>


        </>
    )
}
export default FamilyPage