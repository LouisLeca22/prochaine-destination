"use client"

import Carrousel from "@/components/ui/Carrousel"
import HeaderSlider from "@/components/ui/HeaderSlider"
import QuizComponent from "@/components/ui/QuizzComponents"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { SquareCards } from "@/components/ui/SquareCards"
import ThreePlayers from "@/components/ui/ThreePlayers"
import { activities } from "@/data"
import { useIsMobile } from "@/hooks/use-mobile"
import { useScopedI18n } from "@/locales/client"
import { selectItemsByIds } from "@/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Cloud, Eye, Flower, Palette, Pencil, Route, TreeDeciduous, Waves } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo, useRef } from "react"

function CouplePage() {
    const t1 = useScopedI18n("Relax")
    const t2 = useScopedI18n("Components")
    const headerImages = [
        "https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1500904156668-758cff89dcff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1483691278019-cb7253bee49f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546440765-e7e3c881b5fe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const squareImages: [string, string, string, string] = [
        "https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg",
        "https://images.pexels.com/photos/268134/pexels-photo-268134.jpeg",
        "https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg",
        "https://images.pexels.com/photos/1548769/pexels-photo-1548769.jpeg"
    ]



    const experiences = [
        {
            title: t1("spaTitle"),
            description: t1("spaDescription"),
            image: "https://images.unsplash.com/photo-1488345979593-09db0f85545f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("accommodationTitle"),
            description: t1("accommodationDescription"),
            image: "https://images.pexels.com/photos/5390056/pexels-photo-5390056.jpeg"
        },
        {
            title: t1("activityTitle"),
            description: t1("activityDescription"),
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const allActivities = useMemo(() => activities, [])
    const activitiesItems = selectItemsByIds(allActivities, [4, 11, 5, 6, 9, 10, 16, 17, 19, 20, 21, 22, 26])


    const benefits = [
        {
            title: t1("benefitLiOne"),
            description: t1("benefitOneDescription"),
            image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg"
        },
        {
            title: t1("benefitTwo"),
            description: t1("benefitTwoDescription"),
            image: "https://images.pexels.com/photos/1494639/pexels-photo-1494639.jpeg"
        },
        {
            title: t1("benefitThree"),
            description: t1("benefitThreeDescription"),
            image: "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg"
        },
    ]

    const stays = [
        {
            title: t1("stayOneTitle"),
            description: t1("stayOneDescription"),
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("stayTwoTitle"),
            description: t1("stayTwoDescription"),
            image: "https://images.unsplash.com/photo-1649751295468-953038600bef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("stayThreeTitle"),
            description: t1("stayThreeDescription"),
            image: "https://images.unsplash.com/photo-1554332208-9dfebcc48334?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const weather = [
        {
            title: t1("weatherOneTitle"),
            description: t1("weatherOneDescription"),
            image: "https://images.pexels.com/photos/163255/sunrise-sun-morgenrot-skies-163255.jpeg",
        },
        {
            title: t1("weatherTwoTitle"),
            description: t1("weatherTwoDescription"),
            image: "https://images.pexels.com/photos/269110/pexels-photo-269110.jpeg"
        },
        {
            title: t1("weatherThreeTitle"),
            description: t1("weatherThreeDescription"),
            image: "https://images.pexels.com/photos/6035/healthy-apple-summer-garden.jpg"
        },
        {
            title: t1("weatherFourTitle"),
            description: t1("weatherFourDescription"),
            image: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const gestures = [
        {

            title: t1("gestureOne"),
            image: "https://images.pexels.com/photos/532891/pexels-photo-532891.jpeg"
        },
        {

            title: t1("gestureTwo"),
            image: "https://images.unsplash.com/photo-1673568515106-f78ddee79f7d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("gestureThree"),
            image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
        },
        {
            title: t1("gestureFour"),
            image: "https://images.pexels.com/photos/846080/pexels-photo-846080.jpeg"
        },

    ]

    const terroir = [
        {
            title: t1("terroirOneTitle"),
            description: t1("terroirOneDescription"),
            image: "https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg"
        },
        {
            title: t1("terroirTwoTitle"),
            description: t1("terroirTwoDescription"),
            image: "https://images.unsplash.com/photo-1536953705238-a34098616ed1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const art = [
        {
            title: t1("artOneTitle"),
            image: "https://images.unsplash.com/photo-1742294009985-a688e521f881?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("artTwoTitle"),
            image: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("artThreeTitle"),
            image: "https://images.unsplash.com/photo-1581342997031-2e763fc9a643?q=80&w=1042&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const moments = [
        {
            title: t1("momentOne"),
            icon: <Palette className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentTwo"),
            icon: <Pencil className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentThree"),
            icon: <Cloud className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentFour"),
            icon: <Flower className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentFive"),
            icon: <TreeDeciduous className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentSix"),
            icon: <Eye className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentSeven"),
            icon: <Waves className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentEight"),
            icon: <Route className="w-8 h-8 text-primary-foreground" />
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

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "end 1"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const isMobile = useIsMobile()
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

            <Section className="relative mt-50 ">

                <SquareCards title={t1("introTitle")} description={t1("introDescription")} imageAlt={t1("introTitle")} images={squareImages} />
            </Section>

            <section ref={ref} className="relative max-w-6xl mx-auto px-6 py-28">
                <div className="max-w-6xl mx-auto flex items-center  flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("experienceTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>



                <div className="flex flex-col gap-28 mt-20 relative">
                    <div className="absolute left-1/2 top-0 bottom-110 w-[3px] bg-secondary -translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-primary rounded-full"
                        />
                    </div>
                    {experiences.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`relative flex flex-col md:flex-row ${isLeft ? "md:pl-0 md:pr-40" : "md:pr-0 md:pl-40"
                                    }`}
                            >
                                <span className="absolute left-1/2 top-10 -translate-x-1/2 w-6 h-6 rounded-full bg-primary shadow-lg" />

                                <div
                                    className={`w-full md:w-[55%] bg-white shadow-xl rounded-3xl p-7 md:p-9 ${isLeft ? "md:mr-auto" : "md:ml-auto"
                                        }`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative w-full h-56 mb-6 rounded-[2rem] overflow-hidden
                                [clip-path:polygon(10%_0%,90%_0%,100%_20%,100%_80%,90%_100%,10%_100%,0%_80%,0%_20%)]
                                shadow-md"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>

                                    <h3 className="text-2xl font-semibold text-primary mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                        {item.description}
                                    </p>
                                    <Link href="http://www.linkedin.com/in/louis-leca"
                                        className="w-1/2 mx-auto text-center bg-secondary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                        {t2("knowMore")}
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>


            </section>

            <Section className="my-0 md:my-30 p-10 md:p-0">
                <Carrousel items={activitiesItems} title={t1("activityTitle")} description={t1("activityDescription")} />
            </Section>

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
                        {t1("stayTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="w-full flex justify-center py-20">
                    <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
                        {stays.map((item, i) => (
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

            <Section className="my-0 md:my-30 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("benefitsTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>

                <div className={isMobile ? 'mt-15 bg-linear-to-b from-primary to-primary-foreground' : 'mt-15'}>
                    <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
                    <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((item, i) => (
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
                                    <div className="p-5">
                                        <h3 className="text-lg text-primary font-semibold mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{item.description}</p>


                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </Section>

            <Section className="relative my-0 md:my-30 p-10 md:p-0">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-30 dark:bg-transparent left-[45%] w-40 h-40 bg-primary/40 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-30 dark:bg-transparent right-[40%] w-56 h-56 bg-primary/30 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-6xl mx-auto flex items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center sm:w-full font-bold text-primary"
                    >
                        {t1("gestures")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                </div>
                <div className="space-y-16 max-w-6xl mx-auto mt-10">
                    {gestures.map((item, index) => (
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
                            <div className="p-6 md:w-1/2 flex flex-col text-center justify-center">
                                <h3 className="text-xl text-gray-600  font-semibold mb-3">{item.title}</h3>

                            </div>
                        </motion.div>
                    ))}
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
                        {t1("weather")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                    <p className="my-10 mx-auto text-center text-xl text-white">{t1("weatherDescription")}</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {weather.map((item, i) => (
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
                                        {t2("knowMore")}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>



            <Section className="py-10 md:my-20 ">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("terroir")}
                    </ScrollFloat>
                    <Separator width="w-48 mx-auto" />

                    <p className="text-xl mx-auto text-center my-5">{t1("terroirDescription")}</p>

                    {terroir.map((exp, index) => {
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
                        {t1("audio")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <p className="text-xl mx-auto text-center my-5">{t1("audioDescription")}</p>

                    <ThreePlayers srcs={
                        ["/audios/podcast.mp3",
                            "/audios/podcast.mp3",
                            "/audios/podcast.mp3"
                        ]
                    }

                        covers={[
                            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            "https://images.unsplash.com/photo-1533985062386-ef0837f31bc0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            "https://images.unsplash.com/photo-1608393570755-cb5c47684686?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        ]}

                        titles={[
                            t1("audioOneTitle"),
                            t1("audioTwoTitle"),
                            t1("audioThreeTitle")
                        ]}

                    />
                </div>
            </Section>

            <QuizComponent items={activitiesItems} steps={steps} title={t1("quizTitle")} description={t1("quizDescription")} />


            <Section className="w-full max-w-7xl mx-auto px-4 ">
                <div className="max-w-6xl mx-auto flex items-center sm:items-start flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("artTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                    <p className="mx-auto text-center my-10 text-xl">{t1("artDescription")}</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-10 gap-6">
                    {art.map((spot, i) => (
                        <motion.div
                            key={i}
                            className="relative group h-64 rounded-xl overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
                        >
                            <Image
                                src={spot.image}
                                alt={spot.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />

                            <div className="absolute bottom-3 left-4 right-4">
                                <h3 className="text-white text-xl font-medium drop-shadow-md">
                                    {spot.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>


            <Section className="my-0 sm:my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex  items-center sm:items-end  flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("momentsTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <p className="text-xl mx-auto text-center my-5">{t1("momentsDescription")}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {moments.map((item, i) => (
                            <motion.div
                                key={i}
                                className="
                        group flex flex-col items-center justify-center
                        rounded-2xl bg-primary text-primary-foreground
                        p-6 shadow-md transition-transform duration-300
                        hover:-translate-y-1 hover:shadow-xl hover:bg-primary/90
                    "
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
                            >
                                <div className="mb-3 rounded-full p-3 bg-secondary">
                                    {item.icon}
                                </div>

                                <p className="text-center text-white font-medium leading-tight">
                                    {item.title}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </Section>



        </>
    )
}
export default CouplePage