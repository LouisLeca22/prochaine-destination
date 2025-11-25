"use client"

import { DoubleCards } from "@/components/ui/DoubleCards"
import HeaderSlider from "@/components/ui/HeaderSlider"
import Masonry from "@/components/ui/Masonry"
import QuizComponent from "@/components/ui/QuizzComponents"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { activities } from "@/data"
import { useIsMobile } from "@/hooks/use-mobile"
import { useCurrentLocale, useScopedI18n } from "@/locales/client"
import { selectItemById, selectItemsByIds } from "@/utils"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"

function AdventurePage() {
    const t1 = useScopedI18n("Adventure")
    const t2 = useScopedI18n("Components")
    const locale = useCurrentLocale()
    const headerImages = [
        "https://images.unsplash.com/photo-1590053404184-ce4ee04f3d58?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1501389446297-06c4c50b5ee8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]


    const allActivities = useMemo(() => activities, [])

    const isMobile = useIsMobile()

    const top3 = selectItemsByIds(allActivities, [1, 23, 24])

    const micro = [
        {
            title: t1("microOneTitle"),
            description: t1("microOneDescription"),
            image: "https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg"
        }, {
            title: t1("microTwoTitle"),
            description: t1("microTwoDescription"),
            image: "https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg"
        }
    ]

    const spots = [
        {
            title: t1("spotOne"),
            image: "https://images.unsplash.com/photo-1590089349708-9842d3f6ca25?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("spotTwo"),
            image: "https://images.pexels.com/photos/794579/pexels-photo-794579.jpeg"
        },
        {
            title: t1("spotThree"),
            image: "https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg"
        },
        {
            title: t1("spotFour"),
            image: "https://images.unsplash.com/photo-1718713763106-635423803396?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlbHYlQzMlQTlkJUMzJUE4cmV8ZW58MHx8MHx8fDA%3D"
        },
        {
            title: t1("spotFive"),
            image: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const challenges = [
        {
            title: t1("challengeOneTitle"),
            description: t1("challengeOneDescription"),
            image: "https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg"
        },
        {
            title: t1("challengeTwoTitle"),
            description: t1("challengeTwoDescription"),
            image: "https://images.pexels.com/photos/939729/pexels-photo-939729.jpeg"

        },
        {
            title: t1("challengeThreeTitle"),
            description: t1("challengeThreeDescription"),
            image: "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg"
        }
    ]

    const targets = [
        {
            title: t1("targetOneTitle"),
            description: t1("targetOneDescription"),
            image: "https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg"
        },
        {
            title: t1("targetTwoTitle"),
            description: t1("targetTwoDescription"),
            image: "https://images.unsplash.com/photo-1641761327166-0c1a0dd04b56?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("targetThreeTitle"),
            description: t1("targetThreeDescription"),
            image: "https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg"
        },
        {
            title: t1("targetFourTitle"),
            description: t1("targetFourDescription"),
            image: "https://images.unsplash.com/photo-1490984792589-bc12fe270585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWVkb218ZW58MHx8MHx8fDA%3D"
        }
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

    const hikings = selectItemsByIds(allActivities, [4, 5, 6])

    const moments = [
        {
            id: "1",
            img: "https://images.unsplash.com/photo-1495903546524-cdb71d0aed7d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 400,
        },
        {
            id: "2",
            img: "https://images.unsplash.com/photo-1486927819089-e4d82c5e2444?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 250
        },
        {
            id: "3",
            img: "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 600
        },
        {
            id: "4",
            img: "https://images.unsplash.com/photo-1470472304068-4398a9daab00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 300
        },
        {
            id: "5",
            img: "https://images.unsplash.com/photo-1603098091396-98fc15ec5ce3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 450
        },
        {
            id: "6",
            img: "https://images.unsplash.com/photo-1644753755210-f9e75a9017c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 200
        },
        {
            id: "7",
            img: "https://images.unsplash.com/photo-1642824867533-084fae405caa?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 500
        },
        {
            id: "8",
            img: "https://images.unsplash.com/photo-1460401198597-974910381f6e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 300
        },
        {
            id: "9",
            img: "https://images.pexels.com/photos/303040/pexels-photo-303040.jpeg",
            height: 250
        },
        {
            id: "10",
            img: "https://images.unsplash.com/photo-1495423848257-eb597d257305?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 400
        },
        {
            id: "11",
            img: "https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg",
            height: 300
        },
        {
            id: "12",
            img: "https://images.pexels.com/photos/42148/pexels-photo-42148.jpeg",
            height: 550
        },
        {
            id: "13",
            img: "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg",
            height: 300
        },
        {
            id: "14",
            img: "https://images.pexels.com/photos/99551/hot-air-balloon-valley-sky-99551.jpeg",
            height: 500
        },
        {
            id: "15",
            img: "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg",
            height: 200
        },
        {
            id: "16",
            img: "https://images.pexels.com/photos/840719/pexels-photo-840719.jpeg",
            height: 350
        },
        {
            id: "17",
            img: "https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg",
            height: 250
        },
        {
            id: "18",
            img: "https://images.pexels.com/photos/939729/pexels-photo-939729.jpeg",
            height: 250
        },

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

            <Section className="md:my-30 mt-30">

                <DoubleCards images={[
                    "https://images.unsplash.com/photo-1603793507927-52f3b7100ca6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1450500392544-c2cb0fd6e3b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ]}
                    title={t1("adventureTitle")}
                    description={t1("adventureDescription")}
                />
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
                        {t1("microTitle")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                    <div className="my-10 mx-auto text-white text-center text-xl">
                        {t1("microDescription")}
                    </div>

                    {micro.map((exp, index) => {
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

            <QuizComponent steps={steps} items={top3} title={t1("quizTitle")} description={t1("quizDescription")} />

            <Section className="w-full my-10 py-20 relative overflow-hidden">
                <div className="max-w-6xl mx-auto flex items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl  sm:w-full sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("spotsTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <p className="mx-auto text-xl my-10 text-center">{t1("spotsDescription")}</p>
                </div>

                <div className="relative max-w-6xl mx-auto  flex justify-center items-end mt-10">
                    <div className="relative flex flex-col sm:flex-row items-end justify-center gap-6 md:gap-10">

                        {spots.map((exp, i) => {

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
                        {t1("challengeTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                </div>

                <p className="text-xl my-10 mx-auto text-center">{t1("challengeDescription")}</p>

                <div className={'mt-15'}>
                    <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
                    <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
                            {challenges.map((item, index) => (
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
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="p-5 text-gray-600 flex flex-col items-center justify-center ">
                                        <div className="mb-3 text-center">
                                            {item.description}
                                        </div>

                                        <Link href="http://linkedin.com/in/louis-leca"
                                            className="bg-secondary mx-auto text-center mt-10 md:mt-0 self-center text-primary-foreground py-2 px-4 rounded-xl transition hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md"
                                            target='_blank'>
                                            {t2("seeMore")}
                                        </Link>
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
                        {t1("hikingTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <p className="mx-auto text-center text-xl my-10">{t1("hikingDescription")}</p>
                </div>
                <div className="w-full flex justify-center py-20">
                    <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
                        {hikings.map((item, i) => (
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
                                                      flex flex-col justify-between min-h-90"
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 rounded-2xl overflow-hidden shadow-xl rotate-3 group-hover:rotate-0 transition-all duration-500">
                                        <Image
                                            src={item.images[0]}
                                            alt={locale === "fr" ? item.nameFR : item.nameEN}
                                            width={300}
                                            height={300}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>

                                    <div className="pt-36 h-90 text-center justify-between flex flex-col flex-grow">
                                        <h3 className="text-xl text-primary font-semibold ">
                                            {locale === "fr" ? item.nameFR : item.nameEN}
                                        </h3>

                                        <p className=" text-gray-600  leading-relaxed ">
                                            {locale === "fr" ? item.descriptionFR.split('.')[0] + '.' : item.descriptionEN.split('.')[0] + '.'}
                                        </p>

                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-2 justify-center text-sm opacity-80 hover:opacity-100 transition "
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
                        {t1("targetTitle")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                    <p className="my-10 mx-auto text-center text-xl text-white">{t1("targetDescription")}</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {targets.map((item, i) => (
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
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 flex flex-col min-h-54 justify-between items-center">
                                    <h3 className="text-lg text-primary font-semibold ">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                    <Link href="http://www.linkedin.com/in/louis-leca"
                                        className=" mx-auto text-center  bg-secondary text-primary-foreground px-3 py-1 rounded-lg mt-3 text-sm font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                        {t2("interesting")}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="p-10 my-10 mb-10 md:p-0">
                <div className=" max-w-6xl mx-auto flex items-center flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl  whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("momentsTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 mb-10 " />
                    <p className="mx-auto text-center mb-5 tex-xl">{t1("momentsDescription")}</p>
                    <div className="w-full flex-col overflow-hidden h-[180vh] md:h-180">

                        <Masonry
                            items={moments}
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
export default AdventurePage