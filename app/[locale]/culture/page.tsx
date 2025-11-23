"use client"

import Carrousel from "@/components/ui/Carrousel"
import { DoubleCards } from "@/components/ui/DoubleCards"
import HeaderSlider from "@/components/ui/HeaderSlider"
import QuizComponent from "@/components/ui/QuizzComponents"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { activities } from "@/data"
import { useScopedI18n } from "@/locales/client"
import { selectItemsByIds } from "@/utils"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo, useRef } from "react"


function CulturePage() {

    const t1 = useScopedI18n("Culture")
    const t2 = useScopedI18n("Components")

    const headerImages = [
        "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg",
        "https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg"
    ]

    const top = [
        {
            title: t1("unmissableOneTitle"),
            description: t1("unmissableOneDescription"),
            image: "https://images.pexels.com/photos/220987/pexels-photo-220987.jpeg"
        },
        {
            title: t1("unmissableTwoTitle"),
            description: t1("unmissableTwoDescription"),
            image: "https://images.pexels.com/photos/247506/pexels-photo-247506.jpeg"
        },
        {
            title: t1("unmissableThreeTitle"),
            description: t1("unmissableThreeDescription"),
            image: "https://images.pexels.com/photos/34691435/pexels-photo-34691435.jpeg"
        }
    ]

    const heritage = [
        {
            title: t1("heritageOneTitle"),
            description: t1("heritageOneDescription"),
            image: "https://images.unsplash.com/photo-1485700073848-c87ddfa57e02?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            offset: "-rotate-2",
            anim: { x: -60, y: 30 },
        },
        {
            title: t1("heritageTwoTitle"),
            description: t1("heritageTwoDescription"),
            image: "https://images.unsplash.com/photo-1692442176515-5855b2babfb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG9sZCUyMGltYWdlfGVufDB8fDB8fHww",
            offset: "rotate-1",
            anim: { y: 60 },
        },
        {
            title: t1("heritageThreeTitle"),
            description: t1("heritageThreeDescription"),
            image: "https://images.unsplash.com/photo-1640251314219-be6eb294446b?q=80&w=904&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            offset: "rotate-3",
            anim: { x: 60, y: 20 },
        },
    ];

    const allActivities = useMemo(() => activities, [])

    const agenda = selectItemsByIds(allActivities, [12, 13, 14, 9, 8])

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "end 1"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const experiences = [
        {
            title: t1("experienceOneTitle"),
            description: t1("experienceOneDescription"),
            image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg"
        },
        {
            title: t1("experienceTwoTitle"),
            description: t1("experienceTwoDescription"),
            image: "https://images.pexels.com/photos/716733/pexels-photo-716733.jpeg"
        },
        {
            title: t1("experienceThreeTitle"),
            description: t1("experienceThreeDescription"),
            image: "https://images.pexels.com/photos/34797348/pexels-photo-34797348.jpeg"
        },
    ]

    const ambiance = [
        {
            title: t1("ambianceOneTitle"),
            description: t1("ambianceOneDescription"),
            image: "https://images.unsplash.com/photo-1752649937256-38d4a6a71e04?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("ambianceTwoTitle"),
            description: t1("ambianceTwoDescription"),
            image: "https://images.unsplash.com/photo-1608393570755-cb5c47684686?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("ambianceThreeTitle"),
            description: t1("ambianceThreeDescription"),
            image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

    ]

    const testimonials = [
        {
            name: t1("portraitOneTitle"),
            testimony: t1("portraitOneDescription"),
            image: "/images/partners/person5.jpg"
        },
        {
            name: t1("portraitTwoTitle"),
            testimony: t1("portraitTwoDescription"),
            image: "/images/partners/person2.jpg"
        },
        {
            name: t1("portraitThreeTitle"),
            testimony: t1("portraitThreeDescription"),
            image: "/images/partners/person6.jpg"
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
                    <p className="text-2xl ">{t1("description")}</p>

                </motion.div>
            </header>

            <Section className="my-0 md:my-30 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center sm:items-start flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("unmissableTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="w-full flex justify-center py-20">
                    <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
                        {top.map((item, i) => (
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
                                          flex flex-col justify-between min-h-100"
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
                                        <h3 className="text-xl text-primary font-semibold mb-3 opacity-90">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 opacity-70 leading-relaxed mb-6">
                                            {item.description}
                                        </p>

                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-2 justify-center text-sm opacity-80 hover:opacity-100 transition mt-auto"
                                        >
                                            <ArrowRight size={16} className="text-secondary-foreground" />
                                            <Link className="text-secondary-foreground" href="http://www.linkedin.com/in/louis-leca" target="_blank">
                                                {t2("discover")}
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
                <DoubleCards
                    title={t1("impressionismTitle")}
                    description={t1("impressionismDescription")}
                    images={[
                        "https://images.unsplash.com/photo-1699391468395-aba1ec6bd608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGltcHJlc3Npb25pc218ZW58MHx8MHx8fDA%3D",
                        "https://images.unsplash.com/photo-1699391202824-247ed6fbc484?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    ]}
                />
            </Section>


            <Section className="max-w-7xl mx-auto px-6 py-24 relative">

                <div className="max-w-6xl mx-auto flex items-center  flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("heritageTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <p className="text-lg mx-auto text-center my-10">{t1("heritageDescription")}</p>
                </div>

                <div className="relative flex flex-col md:flex-row justify-center items-start md:items-center gap-14 md:gap-20 md:px-20">
                    {heritage.map((block, index) => (
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

            <Section className="my-0 md:my-30 p-10 md:p-0">
                <Carrousel items={agenda} title={t1("visitsTitle")} description={t1("visitsDescription")} />
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
                        {t1("experiencesTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>



                <div className="flex flex-col gap-28 mt-20 relative">
                    <div className="absolute left-1/2 top-0 bottom-100 w-[3px] bg-secondary -translate-x-1/2 rounded-full overflow-hidden">
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
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>


            </section>



            <Section className="w-full bg-linear-to-br from-primary to-primary-foreground py-20 px-6 md:px-16">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-2xl w-full text-center sm:text-3xl font-josefin-sans font-bold text-white"
                >
                    {t1("ambiance")}
                </ScrollFloat>

                <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />


                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                    {ambiance.map((item, index) => (
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

            <QuizComponent steps={steps} items={agenda} title={t1("quizTitle")} description={t1("quizDescription")} />


            <Section className="sm:my-20 my-0 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center md:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=60%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("portraitsTitle")}
                    </ScrollFloat>
                    <Separator width="w-48" />
                </div>

                <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 h-auto">
                    {testimonials.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center justify-center p-4">
                            <div className="relative rounded-3xl shadow-lg bg-white w-full h-full p-6 pt-10 pb-16">
                                <span className="absolute -top-4 left-6 text-6xl text-primary font-serif select-none">
                                    “
                                </span>
                                <span className="absolute -bottom-10 right-8 text-6xl text-primary font-serif select-none">
                                    ”
                                </span>

                                {/* Content */}
                                <div className="flex flex-col h-full justify-center items-center">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-4 border-primary"
                                    />
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 px-2 md:px-4 text-center italic leading-relaxed">
                                        {item.testimony}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

        </>
    )
}
export default CulturePage