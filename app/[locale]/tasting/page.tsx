
"use client"

import { motion } from "framer-motion"
import HeaderPolygon from "@/components/ui/HeaderPolygon"
import { useCurrentLocale, useScopedI18n } from "@/locales/client"
import Section from "@/components/ui/Section"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Separator from "@/components/ui/Separator"
import Link from "next/link"
import Image from "next/image"
import { useIsMobile } from "@/hooks/use-mobile"
import { useMemo } from "react"
import { activities } from "@/data"
import { selectItemsByIds } from "@/utils"
import { ArrowRight } from "lucide-react"

function TastingPage() {

    const t1 = useScopedI18n("Tasting")
    const t2 = useScopedI18n("Components")
    const t3 = useScopedI18n("Autumn")
    const isMobile = useIsMobile()

    const headerImages = [
        "https://images.unsplash.com/photo-1580302498882-b5aa77f09b75?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/8018917/pexels-photo-8018917.jpeg"
    ]

    const flavors = [
        {
            title: t1("flavorOneTitle"),
            description: t1("flavorOneDescription"),
            image: "https://images.pexels.com/photos/3645126/pexels-photo-3645126.jpeg"
        },
        {
            title: t1("flavorTwoTitle"),
            description: t1("flavorTwoDescription"),
            image: "https://images.pexels.com/photos/5662084/pexels-photo-5662084.jpeg"
        },
        {
            title: t1("flavorThreeTitle"),
            description: t1("flavorThreeDescription"),
            image: "https://images.unsplash.com/photo-1542634093-e0198d4d1e46?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("flavorFourTitle"),
            description: t1("flavorFourDescription"),
            image: "https://images.unsplash.com/photo-1605799333759-383e9a110e73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlbWFrZXJ8ZW58MHx8MHx8fDA%3D"
        }
    ]

    const iode = [
        {
            title: t1("iodeOneTitle"),
            description: t1("iodeOneDescription"),
            image: "https://images.pexels.com/photos/27869485/pexels-photo-27869485.jpeg"
        },
        {
            title: t1("iodeTwoTitle"),
            description: t1("iodeTwoDescription"),
            image: "https://images.pexels.com/photos/1547711/pexels-photo-1547711.jpeg"
        },
        {
            title: t1("iodeThreeTitle"),
            description: t1("iodeThreeDescription"),
            image: "https://images.pexels.com/photos/584498/pexels-photo-584498.jpeg"
        }
    ]
    const locale = useCurrentLocale()
    const culture = [
        {
            title: t1("cultureOneTitle"),
            description: t1("cultureOneDescription"),
            image: "https://images.unsplash.com/photo-1629363037449-fed66d6c3af0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("cultureTwoTitle"),
            description: t1("cultureTwoDescription"),
            image: "https://images.unsplash.com/photo-1699391202824-247ed6fbc484?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const wellness = [
        {
            title: t1("wellnessOneTitle"),
            description: t1("wellnessOneDescription"),
            image: "https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg"
        },
        {
            title: t1("wellnessTwoTitle"),
            description: t1("wellnessTwoDescription"),
            image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("wellnessThreeTitle"),
            description: t1("wellnessThreeDescription"),
            image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const allActivities = useMemo(() => activities, [])

    const top3 = selectItemsByIds(allActivities, [10, 11, 26])


    return (
        <>
            <header>
                <HeaderPolygon heading={t1("heading")} images={headerImages} />
                <motion.div
                    className="my-10 flex max-w-xl mx-auto flex-col justify-center items-center text-center gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="text-2xl mt-10">{t1("description")}</p>
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
                        {t1("unmissableTitle")}
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

            <Section className="relative my-0 md:my-30 p-10 md:p-0">

                <div className="max-w-6xl mx-auto flex items-center sm:items-start flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl  font-josefin-sans text-center sm:w-full font-bold text-primary"
                    >
                        {t1("flavorTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="space-y-16 max-w-6xl mx-auto mt-10">
                    {flavors.map((item, index) => (
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
                                    className="w-1/2 mx-auto text-center  bg-secondary text-primary-foreground px-4 py-2 rounded-lg mt-3  font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                    {t2("discover")}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <div className="max-w-6xl p-10 mx-auto">

                <div className=" md:mx-20 bg-white shadow-xl rounded-3xl overflow-hidden border border-primary">
                    <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581073759002-70a0a2044072?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                    </div>

                    <div className="p-8 md:p-10 space-y-8">
                        <div>
                            <h3 className="md:text-3xl text-2xl font-semibold text-primary">{t1("recipeTitle")}</h3>
                            <p className="mt-2 text-gray-600">{t3("recipeDescription")}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h4 className="md:text-2xl font-semibold text-primary border-l-4 border-primary pl-3">{t3("ingredientsTitle")}
                                </h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• {t3("ingredientsLiOne")}</li>
                                    <li>• {t3("ingredientsLiTwo")}</li>
                                    <li>• {t3("ingredientsLiThree")}</li>
                                    <li>• {t3("ingredientsLiFour")}</li>
                                    <li>• {t3("ingredientsLiFive")}</li>
                                    <li>• {t3("ingredientsLiSix")}</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="md:text-2xl font-semibold text-primary border-l-4 border-primary pl-3">{t3("preparationTitle")}
                                </h4>
                                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                                    <li>{t3("preparationLiOne")}</li>
                                    <li>{t3("preparationLiTwo")}</li>
                                    <li>{t3("preparationLiThree")}</li>
                                    <li>{t3("preparationLiFour")}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                        {t1("iodeTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="w-full flex justify-center py-20">
                    <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
                        {iode.map((item, i) => (
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
                                                      flex flex-col justify-between min-h-72"
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

                                        <p className=" text-gray-600 opacity-70 leading-relaxed mb-6">
                                            {item.description}
                                        </p>

                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-2 justify-center  opacity-80 hover:opacity-100 transition mt-auto"
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
                                    className="absolute -z-10 -bottom-10 left-1/2 -translate-x-1/2 w-56 h-56 bg-purple/400 blur-3xl rounded-full"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="my-0 md:my-30 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center sm:w-full font-bold text-primary"
                    >
                        {t1("cultureTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />


                </div>
                <div className="max-w-6xl mx-auto mt-10">

                    {culture.map((exp, index) => {
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
                                    <Link href="http://www.linkedin.com/in/louis-leca"
                                        className="w-1/2 mx-auto text-center  bg-secondary text-primary-foreground px-4 py-2 rounded-lg mt-3  font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                        {t2("discover")}
                                    </Link>
                                </motion.div>
                            </motion.div>
                        );
                    })}
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
                        {t1("wellnessTitle")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
                        {wellness.map((item, i) => (
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
                                <div className="p-6 flex flex-col items-center justify-center">
                                    <h3 className="text-lg text-primary font-semibold mb-4 line-clamp-2 text-center ">{item.title}</h3>
                                    <p className="text-gray-600  mb-3">{item.description}</p>
                                    <Link href="http://www.linkedin.com/in/louis-leca" target="_blank"
                                        className="inline-block bg-secondary text-primary-foreground px-4 py-2 w-1/2 rounded-lg  font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                        {t2("seeMore")}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>


        </>
    )
}
export default TastingPage