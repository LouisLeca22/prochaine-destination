"use client"

import AudioPlayer from "@/components/ui/AudioPlayer"
import HeaderPolygon from "@/components/ui/HeaderPolygon"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { useIsMobile } from "@/hooks/use-mobile"
import { useScopedI18n } from "@/locales/client"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function MuseumsPage() {
    const t1 = useScopedI18n("Museums")
    const t2 = useScopedI18n("Components")
    const isMobile = useIsMobile()

    const headerImages = [
        "https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg",
        "https://images.pexels.com/photos/375882/pexels-photo-375882.jpeg",
        "https://images.unsplash.com/photo-1563000215-e31a8ddcb2d0?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1637578035851-c5b169722de1?q=80&w=1221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const highlights = [
        {
            image: "https://images.pexels.com/photos/2362791/pexels-photo-2362791.jpeg",
            title: t1("mustOneTitle"),
            description: t1("mustOneDescription"),
            time: "10h - 18h",
            price: "8€",
            access: "Quartier des Arts"
        },
        {
            image: "https://images.pexels.com/photos/3720778/pexels-photo-3720778.jpeg",
            title: t1("mustTwoTitle"),
            description: t1("mustTwoDescription"),
            time: "11h - 19h",
            price: "7€",
            access: "Promenade des Falaises"

        },
        {
            image: "https://images.pexels.com/photos/1028904/pexels-photo-1028904.jpeg",
            title: t1("mustThreeTitle"),
            description: t1("mustThreeDescription"),
            time: "9h30 - 17h30",
            price: "6€",
            access: "Parc Naturel de la Côte"
        }
    ]

    const exhibits = [
        {
            img: "https://images.unsplash.com/photo-1699391202824-247ed6fbc484?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            badge: t1("exhibitOneBadge"),
            title: t1("exhibitOneTitle"),
            description: t1("exhibitOneDescription"),
            date: t1("exhibitOneDate")
        }, {
            img: "https://images.pexels.com/photos/2372982/pexels-photo-2372982.jpeg",
            badge: t1("exhibitTwoBadge"),
            title: t1("exhibitTwoTitle"),
            description: t1("exhibitTwoDescription"),
            date: t1("exhibitTwoDate")
        },
        {
            img: "https://images.unsplash.com/photo-1606139662208-996c1c93b285?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEyfHxsaW5lc3xlbnwwfHwwfHx8MA%3D%3D",
            badge: t1("exhibitThreeBadge"),
            title: t1("exhibitThreeTitle"),
            description: t1("exhibitThreeDescription"),
            date: t1("exhibitThreeDate")
        }
    ]

    const familyItems = [
        {
            title: t1("familyOneTitle"),
            description: t1("familyOneDescription"),
            image: "https://images.unsplash.com/photo-1624513380394-62c7d9104e97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9zc2lsc3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            title: t1("familyTwoTitle"),
            description: t1("familyTwoDescription"),
            image: "https://images.unsplash.com/photo-1498330177096-689e3fb901ca?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: t1("familyThreeTitle"),
            description: t1("familyThreeDescription"),
            image: "https://images.unsplash.com/photo-1512331455279-c8ae8178f586?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const experiences = [
        {
            title: t1("workshopTitle"),
            description: t1("workshopDescription"),
            image: "https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            listItems: [
                t1("workshopLiOne"),
                t1("workshopLiTwo"),
                t1("workshopLiThree")
            ]
        },
        {
            title: t1("shortVisitsTitle"),
            description: t1("shortVisitsDescription"),
            listItems: [
                t1("shortVisitLiOne"),
                t1("shortVisitLiTwo"),
                t1("shortVisitLiThree")
            ],
            image: "https://images.unsplash.com/photo-1637578035851-c5b169722de1?q=80&w=1221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const immersions = [
        {
            title: t1("guidedTourTitle"),
            description: t1("guidedTourDescription"),
            image: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg"
        },
        {
            title: t1("audioguideTitle"),
            description: t1("audioguideDescription"),
            image: "https://images.pexels.com/photos/901236/pexels-photo-901236.jpeg"
        },
        {
            title: t1("virtualTitle"),
            description: t1("virtualDescription"),
            image: "https://images.pexels.com/photos/3761111/pexels-photo-3761111.jpeg"
        }
    ]


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
                    <p className="text-2xl mt-5">{t1("description")}</p>
                </motion.div>
            </header>

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
                        {t1("must")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>

                <div className={isMobile ? 'mt-15 bg-linear-to-b from-primary to-primary-foreground' : 'mt-15'}>
                    <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
                    <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {highlights.map((item, i) => (
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
                                        <p className="text-sm text-gray-600 mt-2">
                                            <strong> {t1("time")}</strong> {item.time}
                                        </p>
                                        <p className="text-sm text-gray-600 mt-2">
                                            <strong> {t1("price")}</strong> {item.price}
                                        </p>
                                        <p className="text-sm text-gray-600 mt-2">
                                            <strong> {t1("access")}</strong> {item.access}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

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
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("exhibit")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>

                <div className="max-w-6xl mx-auto grid mt-10 lg:grid-cols-3 gap-10 relative items-start">
                    {exhibits.map((item, index) => {
                        const layoutMap = [
                            { size: "h-[480px]", align: "self-start" },
                            { size: "h-[550px]", align: "self-center" },
                            { size: "h-[480px]", align: "self-end" }
                        ];
                        const layout = layoutMap[index % layoutMap.length];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className={`relative group rounded-3xl shadow-xl overflow-hidden bg-white flex flex-col ${layout.align} ${layout.size}`}
                            >
                                <div className="relative w-full h-1/2 overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <span className="absolute top-2 left-2 text-lg bg-primary-foreground text-white rounded-full px-3 py-1 mb-4 w-fit">
                                        {item.badge}
                                    </span>
                                </div>


                                <div className="p-5 flex flex-col flex-grow">

                                    <h3 className="text-2xl font-semibold text-primary mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed mb-auto">
                                        {item.description}
                                    </p>

                                    <p className="text-sm text-gray-600 mt-2">
                                        <strong> {t1("until")} {item.date} </strong>
                                    </p>

                                    <motion.a
                                        href="http://www.linkedin.com/in/louis-leca"
                                        className="inline-flex items-center w-1/2 mx-auto text-center justify-center rounded-2xl mt-6 py-2 bg-secondary text-primary-foreground hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition"
                                        whileHover={{ x: 5 }}
                                    >
                                        {t2("knowMore")}
                                    </motion.a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

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
                        {t1("family")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="w-full flex justify-center py-20">
                    <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
                        {familyItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="relative group cursor-pointer"
                            >
                                <motion.div
                                    whileHover={{ rotate: i % 2 === 0 ? -2 : 2, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="bg-white backdrop-blur-xl  border-primary border-3 rounded-3xl p-6 shadow-2xl relative overflow-visible"
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


                                    <div className="pt-36 text-center">
                                        <h3 className="text-xl text-primary font-semibold mb-3 opacity-90">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 opacity-70 leading-relaxed mb-6">
                                            {item.description}
                                        </p>

                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-2 justify-center text-sm opacity-80 hover:opacity-100 transition"
                                        >
                                            <ArrowRight size={16} className="text-secondary-foreground" />
                                            <Link className="text-secondary-foreground" href="http://www.linkedin.com/in/louis-leca" target="_blank">{t2("discover")}</Link>
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
                        {t1("cloudyTitle")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                    <p className="text-center text-xl text-white mt-10 mb-20 mx-auto">{t1("cloudyDescription")}</p>

                    {experiences.map((exp, index) => {
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
                                    {exp.listItems && (
                                        <ul className="space-y-2">
                                            {exp.listItems.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-primary font-bold"><CheckCircle /></span>
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                            </motion.div>
                        );
                    })}

                </div>
            </Section>

            <Section className=" md:my-30 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("behindTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <p className="mx-auto text-center text-lg mt-10">{t1("behindDescription")}</p>

                    <div className=" px-6 sm:py-24 flex flex-col md:flex-row items-center gap-16">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative w-full md:w-1/2 h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg"
                        >
                            <Image src="https://images.unsplash.com/photo-1602738328654-51ab2ae6c4ff?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt={t1("anecdoteTitle")} fill className="object-cover" />
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.7 }}
                            transition={{ duration: 0.7 }}
                            className="flex-1 flex flex-col gap-4 items items-center"
                        >
                            <h2 className="text-xl md:text-2xl text-primary font-bold">{t1("anecdoteTitle")}</h2>
                            <p className=" text-lg leading-relaxed text-center">{t1("anecdoteDescription")}</p>
                            <motion.a
                                href="http://www.linkedin.com/in/louis-leca"
                                className="inline-flex items-center w-1/2  text-center justify-center rounded-2xl mt-6 py-2 bg-secondary text-primary-foreground hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition"
                                whileHover={{ x: 5 }}
                            >
                                {t1("annecdoteButton")}
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

            </Section>

            <Section className="my-5 md:my-20  px-6 md:px-16">
                <div className="max-w-6xl mx-auto flex items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("immersionTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>


                <div className="space-y-16 max-w-6xl mx-auto mt-10">
                    {immersions.map((item, index) => (
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
        </>
    )
}
export default MuseumsPage