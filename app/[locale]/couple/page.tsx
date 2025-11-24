"use client"

import Carrousel from "@/components/ui/Carrousel"
import HeaderSlider from "@/components/ui/HeaderSlider"
import QuizComponent from "@/components/ui/QuizzComponents"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { accommodations, activities } from "@/data"
import { useCurrentLocale, useScopedI18n } from "@/locales/client"
import { selectItemsByIds } from "@/utils"
import { motion } from "framer-motion"
import { CircleCheck, Handbag, Layers2, Music, NotebookPen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"

function CouplePage() {
    const t1 = useScopedI18n("Couple")
    const t2 = useScopedI18n("Components")
    const headerImages = [
        "https://images.pexels.com/photos/415351/pexels-photo-415351.jpeg",
        "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1489094889106-39069373d6ef?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513279922550-250c2129b13a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const allActivities = useMemo(() => activities, [])
    const allAccommodations = useMemo(() => accommodations, [])

    const top3 = selectItemsByIds(allActivities, [1, 4, 26])

    const rentals = selectItemsByIds(allAccommodations, [1, 2, 3, 4, 6, 8, 9, 10, 13, 14, 20, 23])

    const itineraries = [
        {
            title: t1("itiOneTitle"),
            image: "https://images.unsplash.com/photo-1536953705238-a34098616ed1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            steps: [
                {

                    title: t1("itiOneStepOneTitle"),
                    description: t1("itiOneStepOneDescription")
                },
                {

                    title: t1("itiOneStepTwoTitle"),
                    description: t1("itiOneStepTwoDescription")
                },
                {

                    title: t1("itiOneStepThreeTitle"),
                    description: t1("itiOneStepThreeDescription")
                }
            ]
        },
        {
            title: t1("itiTwoTitle"),
            image: "https://images.unsplash.com/photo-1501901609772-df0848060b33?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            steps: [
                {

                    title: t1("itiTwoStepOneTitle"),
                    description: t1("itiTwoStepOneDescription")
                },
                {

                    title: t1("itiTwoStepTwoTitle"),
                    description: t1("itiTwoStepTwoDescription")
                },
                {

                    title: t1("itiTwoStepThreeTitle"),
                    description: t1("itiTwoStepThreeDescription")
                }
            ]
        },
        {
            title: t1("itiThreeTitle"),
            image: "https://images.pexels.com/photos/542555/pexels-photo-542555.jpeg",
            steps: [
                {

                    title: t1("itiThreeStepOneTitle"),
                    description: t1("itiThreeStepOneDescription")
                },
                {

                    title: t1("itiThreeStepTwoTitle"),
                    description: t1("itiThreeStepTwoDescription")
                },
                {

                    title: t1("itiThreeStepThreeTitle"),
                    description: t1("itiThreeStepThreeDescription")
                }
            ]
        }

    ]



    const agendaItems = [
        {
            title: t1("agendaOne"),
            image: "https://images.pexels.com/photos/4695765/pexels-photo-4695765.jpeg"
        },
        {
            title: t1("agendaTwo"),
            image: "https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("agendaThree"),
            image: "https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg"
        }
    ]

    const offers = [
        {
            title: t1("offerOneTitle"),
            description: t1("offerOneDescription"),
            image: "https://images.unsplash.com/photo-1488345979593-09db0f85545f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwYXxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            title: t1("offerTwoTitle"),
            description: t1("offerTwoDescription"),
            image: "https://images.pexels.com/photos/6579304/pexels-photo-6579304.jpeg"
        }
    ]

    const sunsets = [
        {
            title: t1("sunsetOne"),
            image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("sunsetTwo"),
            image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2V0fGVufDB8fDB8fHww"
        },
        {
            title: t1("sunsetThree"),
            image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("sunsetFour"),
            image: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("sunsetFive"),
            image: "http://images.unsplash.com/photo-1501898047706-55903296cd09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            title: t1("sunsetSix"),
            image: "https://images.unsplash.com/photo-1536890274788-51861e124205?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const ambiances = [
        {
            title: t1("ambianceOneTitle"),
            description: t1("ambianceOneDescription"),
            image: "https://images.unsplash.com/photo-1481988535861-271139e06469?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            offset: "-rotate-2",
            anim: { x: -60, y: 30 }
        },
        {
            title: t1("ambianceTwoTitle"),
            description: t1("ambianceTwoDescription"),
            image: "https://images.pexels.com/photos/31096134/pexels-photo-31096134.jpeg",
            offset: "rotate-1",
            anim: { y: 60 },

        },
        {
            title: t1("ambianceThreeTitle"),
            description: t1("ambianceThreeDescription"),
            image: "https://images.unsplash.com/photo-1761040396461-35a4c34153f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJvbWFudGljJTIwZ2FyZGVufGVufDB8fDB8fHww",
            offset: "rotate-3",
            anim: { x: 60, y: 20 },
        },

    ]

    const stories = [
        {
            title: t1("storyThreeTitle"),
            description: t1("storyThreeDescription"),
            image: "https://images.pexels.com/photos/1174958/pexels-photo-1174958.jpeg"
        },
        {
            title: t1("storyTwoTitle"),
            description: t1("storyTwoDescription"),
            image: "https://images.unsplash.com/photo-1658303033408-ff2a7e39a554?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        ,
        {
            title: t1("storyThreeTitle"),
            description: t1("storyThreeDescription"),
            image: "https://images.unsplash.com/photo-1670786056253-03def3bf8e3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvdmUlMjBsZXR0ZXJ8ZW58MHx8MHx8fDA%3D"
        }
    ]

    const carnet = [
        {
            title: t1("itemOneTitle"),
            description: t1("itemOneDescription"),
            image: "https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg"
        },
        {
            title: t1("itemTwoTitle"),
            description: t1("itemTwoDescription"),
            image: "https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg"
        },
        {
            title: t1("itemThreeTitle"),
            description: t1("itemThreeDescription"),
            image: "https://images.unsplash.com/photo-1684920743721-8c2851d12d27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhcnQlMjBzYW5kfGVufDB8fDB8fHww"
        },
        {
            title: t1("itemFourTitle"),
            description: t1("itemFourDescription"),
            image: "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("itemFiveTitle"),
            description: t1("itemFiveDescription"),
            image: "https://images.pexels.com/photos/6579082/pexels-photo-6579082.jpeg"
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

    const locale = useCurrentLocale()



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
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("topTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <p className="mx-auto text-xl text-center my-10">{t1("topDescription")}</p>
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

            <QuizComponent steps={steps} items={top3} title={t1("quizTitle")} description={t1("quizDescription")} />


            <Carrousel title={t1("accommodationTitle")} description={t1("accommodationDescription")} items={rentals} />

            <Section className="py-10 md:my-20  text-gray-600">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("specialOffers")}
                    </ScrollFloat>

                    <Separator className="w-48 mx-auto" />

                    {offers.map((exp, index) => {
                        const isLeftImage = index % 2 === 0;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-center gap-8 mt-15 ${isLeftImage ? '' : 'md:flex-row-reverse'}`}
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
                                    <Link href="http://linkedin.com/in/louis-leca"
                                        className="bg-secondary text-center mt-10 md:mt-0 self-center text-primary-foreground py-2 px-4 rounded-xl transition hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md"
                                        target='_blank'>
                                        {t2("interesting")}
                                    </Link>
                                </motion.div>
                            </motion.div>
                        );
                    })}

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
                    {t1("storyTitle")}
                </ScrollFloat>

                <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                <p className="mx-auto text-center text-xl text-white my-10">{t1("storyDescription")}</p>


                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                    {stories.map((item, index) => (
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
                                    className="w-1/2 mx-auto text-center  bg-secondary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                    {t2("knowMore")}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section className="max-w-7xl mx-auto px-6 my-15 relative">

                <div className="max-w-6xl mx-auto flex items-center  flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("ambiances")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                </div>

                <div className="relative mt-10 flex flex-col md:flex-row justify-center items-start md:items-center gap-14 md:gap-20 md:px-20">
                    {ambiances.map((block, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, ...block.anim }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`bg-white rounded-3xl shadow-xl p-6 w-full md:w-72 ${block.offset} origin-center transform hover:scale-[1.04] transition duration-300`}
                        >
                            <div className="relative w-full h-44 mb-5">
                                <Image
                                    src={block.image}
                                    alt={block.title}
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-primary mb-3">
                                {block.title}
                            </h3>

                            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-3">
                                {block.description}
                            </p>

                            <Link className="text-secondary-foreground" href="http://www.linkedin.com/in/louis-leca" target="_blank">
                                {t2("knowMore")}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="absolute inset-0 -z-10">
                    <div className="absolute bottom-10 dark:bg-transparent left-[50%] w-56 h-56 bg-primary/30 rounded-full blur-3xl"></div>
                </div>
            </Section>

            <Section className="w-full max-w-7xl mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto flex items-center  flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("sunsetTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-10 gap-6">
                    {sunsets.map((spot, i) => (
                        <div
                            key={i}
                            className="relative group h-64 rounded-xl overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={spot.image}
                                alt={spot.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />

                            <div className="absolute bottom-3 left-4 right-4">
                                <h3 className="text-white text-lg font-medium drop-shadow-md">
                                    {spot.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="relative my-0 md:my-30 p-10 md:p-0">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-60 dark:bg-transparent left-1/4 w-40 h-40 bg-primary/40 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 dark:bg-transparent right-[40%] w-56 h-56 bg-primary/30 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-6xl mx-auto flex items-center sm:items-start flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center sm:w-full font-bold text-primary"
                    >
                        {t1("carnetTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                </div>
                <div className="space-y-16 max-w-6xl mx-auto mt-10">
                    {carnet.map((item, index) => (
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
                                    {t2("interesting")}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>


            <Section className="sm:mt-20 sm:mb-35 p-10 md:p-0">
                <div className=" max-w-6xl mx-auto flex items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=100%"
                        scrollEnd="bottom bottom-=5%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("kitTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 mb-20 " />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                    <div
                        className="group bg-white rounded-2xl shadow-md p-6 transition-all hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex flex-col items-center text-center">
                            <div
                                className="p-4 rounded-full mb-4 bg-secondary">
                                <Layers2 className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-primary">{t1("packOne")}</h3>

                        </div>
                    </div>

                    <div
                        className="group bg-white rounded-2xl shadow-md p-6 transition-all hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex flex-col items-center text-center">
                            <div
                                className="p-4 rounded-full mb-4 bg-secondary">
                                <Music className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-primary">{t1("packTwo")}</h3>

                        </div>
                    </div>
                    <div
                        className="group bg-white rounded-2xl shadow-md p-6 transition-all hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex flex-col items-center text-center">
                            <div
                                className="p-4 rounded-full mb-4 bg-secondary">
                                <Handbag className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-primary">{t1("packThree")}</h3>

                        </div>
                    </div>
                    <div
                        className="group bg-white rounded-2xl shadow-md p-6 transition-all hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex flex-col items-center text-center">
                            <div
                                className="p-4 rounded-full mb-4 bg-secondary">
                                <NotebookPen className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-primary">{t1("packFour")}</h3>
                        </div>
                    </div>
                </motion.div>
            </Section >


            <div className="mt-10">
                <div className=" relative sm:h-[30vh] sm:flex flex-col p-6 sm:bg-linear-to-b from-primary to-primary-foreground">
                    <h3 className="text-2xl text-center md:text-start sm:text-white">{t1("agendaDescription")}</h3>
                    <h2 className="text-4xl font-inter text-center md:text-start md:mt-0 mt-5 sm:text-white ">{t1("agendaTitle")} </h2>
                </div>
                <div className="relative sm:-mt-24  px-6 md:px-16">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row  items-stretch gap-12">
                        {agendaItems.map((item, index) => (
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
                            <div className="relative h-48 w-full ">
                                <Image
                                    src="https://images.unsplash.com/photo-1671691302268-e316f81c7b3e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center p-4  text-center">
                                <h3 className="text-lg sm:text-xl text-primary font-semibold ">
                                    {t1("agendaFeaturedTitle")}
                                </h3>
                                <p className=" text-sm text-muted-foreground">
                                    {t1("agendaFeaturedDescription")}
                                </p>
                            </div>
                        </motion.a>
                    </div>
                </div>
            </div>



            <Section className="relative md:-mt-10 mb-10 p-10 md:p-0">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 dark:bg-transparent left-2/4 w-40 h-40 bg-primary/40 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 dark:bg-transparent left-[40%] w-56 h-56 bg-primary/30 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-6xl mx-auto flex items-center sm:items-start flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl  font-josefin-sans text-center sm:w-full font-bold text-primary"
                    >
                        {t1("itineraries")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="space-y-16 max-w-6xl mx-auto mt-10">
                    {itineraries.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1, }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col md:flex-row items-center w-full  rounded-3xl shadow-lg overflow-hidden bg-white ${index % 2 !== 0 ? 'md:flex-row-reverse md:ml-auto' : 'md:mr-auto'}`}
                        >
                            <div className="relative w-full md:w-1/2 h-60 md:h-140">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-3 md:w-1/2 flex flex-col text-center justify-center">
                                <h3 className="text-2xl text-primary  font-semibold mb-3">{item.title}</h3>
                                <ul className="text-gray-600 ">
                                    {item.steps.map((i, index) => (

                                        <li className="flex flex-col gap-2 mb-2 " key={index}>
                                            <h4 className="text-primary-foreground font-bold">{i.title}</h4>
                                            <p>{i.description}</p>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="http://www.linkedin.com/in/louis-leca"
                                    className="w-1/2 mx-auto text-center  bg-secondary text-primary-foreground px-4 py-2 rounded-lg mt-3 text-sm font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                    {t2("discover")}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    )
}
export default CouplePage