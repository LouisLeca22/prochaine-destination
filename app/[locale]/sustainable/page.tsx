"use client"

import Carrousel from "@/components/ui/Carrousel"
import CircuitMap, { Circuit } from "@/components/ui/CircuitMap"
import CountUp from "@/components/ui/CountUp"
import HeaderSlider from "@/components/ui/HeaderSlider"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import ThreeCards from "@/components/ui/ThreeCards"
import { accommodations, activities, restaurants } from "@/data"
import { useIsMobile } from "@/hooks/use-mobile"
import { useCurrentLocale, useScopedI18n } from "@/locales/client"
import { selectItemsByIds } from "@/utils"
import { motion } from "framer-motion"
import { Apple, Bike, Bird, Bus, Footprints, Home, Leaf, LineSquiggle, PersonStanding, Recycle, ShoppingBag, Tent, Trash2, Waves } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"

function SustainablePage() {
    const t1 = useScopedI18n("Sustainable")
    const t2 = useScopedI18n("Components")

    const isMobile = useIsMobile()

    const circuitsNormandie: Circuit[] = [
        {
            name: t1("circuitOne"),
            color: "green",
            positions: [
                [49.4692, 1.1258],
                [49.4705, 1.1282],
                [49.4721, 1.1308],
                [49.4738, 1.1331],
                [49.4750, 1.1356],
                [49.4761, 1.1379],
                [49.4752, 1.1402],
                [49.4736, 1.1391],
                [49.4720, 1.1360],
                [49.4708, 1.1319],
                [49.4695, 1.1285],
                [49.4692, 1.1258],
            ],
        },
        {
            name: t1("circuitTwo"),
            positions: [
                [49.4431, 1.0993],
                [49.4420, 1.0935],
                [49.4405, 1.0880],
                [49.4385, 1.0852],
                [49.4362, 1.0805],
                [49.4335, 1.0780],
                [49.4322, 1.0745],
                [49.4305, 1.0768],
                [49.4275, 1.0795],
                [49.4285, 1.0835],
                [49.4308, 1.0880],
                [49.4332, 1.0915],
                [49.4370, 1.0948],
                [49.4395, 1.0975],
                [49.4428, 1.0990],
            ],
            color: "orange",
        },
        {
            name: t1("circuitThree"),
            color: "blue",
            positions: [
                [49.4514, 1.0902],
                [49.4498, 1.0935],
                [49.4482, 1.0982],
                [49.4470, 1.1025],
                [49.4455, 1.1068],
                [49.4435, 1.1088],
                [49.4418, 1.1115],
                [49.4398, 1.1105],
                [49.4380, 1.1060],
                [49.4375, 1.1015],
                [49.4385, 1.0968],
                [49.4402, 1.0938],
                [49.4430, 1.0918],
                [49.4460, 1.0908],
                [49.4512, 1.0901],
            ],
        }
    ];


    const headerImages = [
        "https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg",
        "https://images.unsplash.com/photo-1565109254792-8856bba5abfb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/566496/pexels-photo-566496.jpeg"
    ]

    const resources = [
        {
            title: t1("LabelTitle"),
            description: t1("LabelDescription"),
            image: "/images/sustainable/label.png",
            alt: t1("LabelTitle"),
            buttonLabel: t2("knowMore"),
            href: "http://wwww.linkedin.com/in/louis-leca",
        },
        {
            title: t1("charteTitle"),
            description: t1("charteDescription"),
            image: "/images/sustainable/charte.png",
            alt: t1("charteTitle"),
            buttonLabel: t2("knowMore"),
            href: "http://wwww.linkedin.com/in/louis-leca",
        },
    ]

    const actions = [
        {
            icon: <Waves className="w-6 h-6 text-primary" />,
            title: t1("actionOneTitle"),
            description: t1("actionOneDescription")
        },
        {
            icon: <LineSquiggle className="w-6 h-6 text-primary" />,
            title: t1("actionTwoTitle"),
            description: t1("actionTwoDescription")
        },
        {
            icon: <Bird className="w-6 h-6 text-primary" />,
            title: t1("actionThreeTitle"),
            description: t1("actionThreeDescription")
        },
    ];

    const mobility = [
        {
            icon: <PersonStanding className="w-6 h-6 text-primary" />,
            title: t1("carfree"),
            description: t1("carFreeDescription")
        },
        {
            icon: <Bus className="w-6 h-6 text-primary" />,
            title: t1("navetteTitle"),
            description: t1("navetteDescription")
        },
        {
            icon: <Bike className="w-6 h-6 text-primary" />,
            title: t1("bikeTitle"),
            description: t1("bikeDescription")
        }
    ]

    const economyItems = [
        {
            title: t1("producersTitle"),
            description: t1("producersDescription")
        },
        {
            title: t1("restaurantsTitle"),
            description: t1("restaurantsDescription")
        },
        {
            title: t1("souvenirsTitle"),
            description: t1("souvenirsDescription")
        }
    ]

    const allRestaurants = useMemo(() => restaurants, [])
    const restaurantItems = selectItemsByIds(allRestaurants, [13, 19, 24])

    const allAccommodations = useMemo(() => accommodations, [])
    const accommodationsItems = selectItemsByIds(allAccommodations, [2, 3, 12, 15, 18, 22])

    const allActivities = useMemo(() => activities, [])
    const activitiesitems = selectItemsByIds(allActivities, [19, 5, 4])

    const actionItems = [
        {
            title: t1("volunteeringTitle"),
            description: t1("volunteeringDescription"),
            image: "https://images.unsplash.com/photo-1446038202205-1c96430dbdab?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cta: t2("knowMore"),
        },
        {
            title: t1("adoptionTitle"),
            description: t1("adoptionDescription"),
            image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cta: t2("knowMore")
        },
        {
            title: t1("normandyTitle"),
            description: t1("normandyDescription"),
            image: "/images/sustainable/normandieDurable.png",
            cta: t2("knowMore"),
        },

    ];

    const ecoActions = [
        {
            icon: <Trash2 className="w-6 h-6 text-primary" />,
            title: t1("ecoActOneTitle"),
            description: t1("ecoActOneDescription"),
        },
        {
            icon: <Leaf className="w-6 h-6 text-primary" />,
            title: t1("ecoActTwoTitle"),
            description: t1("ecoActTwoDescription"),
        },
        {
            icon: <Footprints className="w-6 h-6 text-primary" />,
            title: t1("ecoActThreeTitle"),
            description: t1("ecoActThreeDescription"),
        },
        {
            icon: <Tent className="w-6 h-6 text-primary" />,
            title: t1("ecoFourTitle"),
            description: t1("ecoFourDescription"),
        },
        {
            icon: <Apple className="w-6 h-6 text-primary" />,
            title: t1("ecoFiveTitle"),
            description: t1("ecoFiveDescription"),
        },
    ];

    return (
        <>
            <header>
                <HeaderSlider heading={t1("heading")} images={headerImages} />
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
                                <CountUp startWhen={true} from={0} to={12} />+
                            </p>
                            <p>{t1("protected")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold  mb-2 text-primary">
                                +<CountUp from={0} to={450} />
                            </p>
                            <p>{t1("animals")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold mb-2 text-primary">
                                <CountUp from={0} to={60} />
                            </p>
                            <p>{t1("partners")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold text-primary mb-2">
                                <CountUp from={0} to={40} />
                            </p>
                            <p>{t1("circuits")}</p>
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
                        {t1("goalTitle")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <Bird className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1704561970425-bc779c5f9777?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title: t1("goalOneTitle"),
                                desc: t1("goalOneDescription"),
                            },
                            {
                                icon: <Bike className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1596039793618-eefbea88105a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title: t1("goalTwoTitle"),
                                desc: t1("goalTwoDescription"),
                            },
                            {
                                icon: <Recycle className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1635343251752-f1980359d2c0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title: t1("goalThreeTitle"),
                                desc: t1("goalThreeDescription"),
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
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="relative md:my-20 my-0 p-10 md:p-0">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute bottom-40 dark:bg-transparent right-2/4 w-56 h-56 bg-primary/30 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-6xl mx-auto flex items-center sm:items-start flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("approachTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <p className="text-center text-xl my-10">
                        {t1("approachDescription")}
                    </p>
                </div>

                <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    {resources.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.35,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            key={index}
                            className="bg-white rounded-xl p-6 shadow hover:shadow-md transition flex flex-col"
                        >
                            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <h3 className="font-semibold mb-2 text-center text-primary">{item.title}</h3>
                            <p className="grow text-gray-600 text-center p-3">{item.description}</p>

                            <a
                                href={item.href}
                                className="mt-4 mx-auto w-[50%] inline-block text-center py-2 bg-secondary text-primary-foreground hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition"
                            >
                                {item.buttonLabel}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </Section >

            <Section className="md:my-10 my-0 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center mb-10 flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl  sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("preservationTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                    <div className="md:col-span-2 space-y-8">
                        <p className="text-center text-xl">{t1("preservationDescription")}</p>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="space-y-6"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.2 } }
                            }}
                        >
                            {actions.map((action, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.03 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white p-6 rounded-2xl shadow hover:shadow-lg  transition duration-300"
                                >
                                    <h3 className="md:text-xl font-semibold text-primary text-center flex-col md:flex-row flex items-center justify-center gap-2">
                                        {action.icon} {action.title}
                                    </h3>
                                    <p className="mt-2 text-gray-600 text-center">{action.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col"
                    >
                        <div className="relative w-full h-72 md:h-84">
                            <Image
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Nos partenaires engagés"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-3xl"
                                priority
                            />
                        </div>
                        <div className="p-6 flex flex-col justify-evenly h-full text-center">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{t1("partnersTitle")}</h3>
                                <Separator width="w-24 mx-auto " />
                            </div>

                            <p className="mt-4 text-primary-foreground">{t1("partnersDescription")}</p>

                            <a
                                href="http://www.linkedin.com/in/louis-leca"
                                className="mt-4 mx-auto w-[50%] inline-block text-center py-2 bg-secondary text-primary-foreground hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition"
                            >
                                {t2("knowMore")}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </Section>

            <Section className="relative md:my-20 py-0 p-10 md:p-0">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-70 dark:bg-transparent right-2/4 w-40 h-40 bg-primary/40 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-6xl mx-auto flex items-center sm:items-start flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl  sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("transportTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <p className="my-10 text-center text-xl">
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {t1("transportDescription")}
                        </motion.span>
                    </p>

                    <div className="mt-6 grid md:grid-cols-3 gap-6">
                        {mobility.map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-4 bg-white rounded-lg shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <h4 className="font-semibold text-primary flex items-center justify-center gap-2">
                                    {item.icon} {item.title}
                                </h4>
                                <p className="mt-2 text-sm text-center text-slate-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl max-w-6xl mx-auto p-4 mt-10"
                >
                    <h3 className="mb-3 text-xl text-primary text-center">{t1("circuitsIdeas")}</h3>
                    <CircuitMap
                        circuits={circuitsNormandie}
                        zoom={12}
                        center={[49.44355768720817, 1.0919592991010125]}
                    />
                </motion.div>

            </Section>

            <Section className="my-0 md:my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("economyTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>

                <div className={isMobile ? 'mt-15 bg-linear-to-b from-primary to-primary-foreground' : 'mt-15'}>
                    <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
                    <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
                            {economyItems.map((item, index) => (
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
                                    className="flex-1 bg-white overflow-hidden  backdrop-blur-lg rounded-2xl shadow hover:shadow-xl transform hover:-translate-y-2 transition"
                                >
                                    <div className="p-6 flex flex-col text-center justify-center items-center ">
                                        <h3 className="text-xl text-primary font-semibold mb-2 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className=" font-semibold text-sm text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="py-10">
                        <ThreeCards items={restaurantItems} />
                    </div>
                </div>
            </Section>

            <Section className="md:my-20  my-0 p-10 md:p-0">
                <Carrousel items={accommodationsItems} title={t1("accommodationTitle")} description={t1("accommodationDescription")} />
            </Section>

            <Section className="md:my-20 my-0 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl  sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("activitiesTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                    <p className="text-xl text-center">
                        {t1("activitiesDescription")}
                    </p>
                    <div className="mt-10">
                        <ThreeCards items={activitiesitems} />
                    </div>
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
                        {t1("goalTitle")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />
                </div>

                <div className="grid md:grid-cols-3 gap-5 max-w-7xl mx-auto px-6">
                    {actionItems.map((item, i) => (
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
                                    {item.cta}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto mt-20 px-6">
                    <h3 className="text-2xl font-bold text-center text-white mb-10">
                        {t1("ecoActions")}
                    </h3>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {ecoActions.map((eco, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex flex-col items-center text-center p-5 bg-white rounded-2xl shadow hover:shadow-lg transition"
                            >
                                <div className="mb-3">{eco.icon}</div>
                                <h4 className="font-semibold text-primary">{eco.title}</h4>
                                <p className="text-gray-600 text-sm mt-1">{eco.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

        </>
    )
}
export default SustainablePage