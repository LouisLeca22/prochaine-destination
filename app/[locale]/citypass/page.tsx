"use client"

import AnimatedLink from "@/components/ui/AnimatedLink"
import Carrousel from "@/components/ui/Carrousel"
import HeaderCards from "@/components/ui/HeaderCards"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import OneCard from "@/components/ui/OneCard"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { activities } from "@/data"
import { useScopedI18n } from "@/locales/client"
import { motion } from "framer-motion"
import { BadgeEuro, Bird, Clock, Euro, Feather, Puzzle, Smartphone, SmartphoneIcon } from "lucide-react"
import Image from "next/image"
import { useMemo } from "react"
import { useIsMobile } from "@/hooks/use-mobile";

function CityPassPage() {
    const t1 = useScopedI18n("CityPass")

    const isMobile = useIsMobile()
    const headerImages = [
        "https://images.unsplash.com/photo-1541777594744-addc2de9d110?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1523562457378-685782b382a6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/2603833/pexels-photo-2603833.jpeg"
    ]

    const headerCards = [
        {
            title: {
                text: t1("simplicity"),
                icon: <Feather className="text-primary w-8 h-8" />
            },
            description: t1("whatLiOne")
        },
        {
            title: {
                text: t1("economy"),
                icon: <Euro className="text-primary w-8 h-8" />
            },
            description: t1("whatLiTwo")
        },
        {
            title: {
                text: t1("efficacity"),
                icon: <Smartphone className="text-primary w-8 h-8" />
            },
            description: t1("whatLiThree")
        },

    ]

    const howItems = [
        t1("stepOne"),
        t1("stepTwo"),
        t1("stepThree"),
        t1("stepFour"),
        t1("stepFive"),
    ]

    const passes = [
        {
            duration: "24h",
            title: t1("optionOne"),
            priceAdults: 25,
            priceChildren: 22
        },
        {
            duration: "48h",
            title: t1("optionTwo"),
            priceAdults: 40,
            priceChildren: 38
        },
        {
            duration: "72h",
            title: t1("optionThree"),
            priceAdults: 60,
            priceChildren: 56
        },
    ];

    const allActivities = useMemo(() => activities, [])

    const services = [
        {
            title: t1("serviceOne"),
            image: "/images/citypass/tram.png"
        },
        {
            title: t1("serviceTwo"),
            image: "/images/citypass/parking.png"
        },
        {
            title: t1("serviceThree"),
            image: "/images/citypass/audio.png"
        },
    ]

    const testimonials = [
        {
            name: "Nesrine Hadji",
            testimony: t1("personOneTestimony"),
            image: "/images/partners/person1.jpg"
        },
        {
            name: "Thomas Anders",
            testimony: t1("personTwoTestimony"),
            image: "/images/partners/person2.jpg"
        },
        {
            name: "Leona Hernandez",
            testimony: t1("personThreeTestimony"),
            image: "/images/partners/person3.jpg"
        },
        {
            name: "Marc Delacourt",
            testimony: t1("personFourTestimony"),
            image: "/images/partners/person4.jpg"
        },
        {
            name: "Hawa Mendije",
            testimony: t1("personFiveTestimony"),
            image: "/images/partners/person5.jpg"
        },
        {
            name: "Ilona Moretti",
            testimony: t1("personSixTestimony"),
            image: "/images/partners/person6.jpg"
        }
    ]

    const benefits = [
        {
            icon: <Bird className="w-8 h-8 text-primary" />,
            title: t1("libertyTite"),
            description: t1("libertyDescription")
        },
        {
            icon: <Puzzle className="w-8 h-8 text-primary" />,
            title: t1("practicalTitle"),
            description: t1("practicalDescription")
        },
        {
            icon: <Clock className="w-8 h-8 text-primary" />,
            title: t1("cutterTitle"),
            description: t1("cutterDescription")
        },
        {
            icon: <SmartphoneIcon className="w-8 h-8 text-primary" />,
            title: t1("simpleTitle"),
            description: t1("simpleDescription")
        }
    ]

    const ideas = [
        {
            title: t1("ideaPassOne"),
            img: "https://images.unsplash.com/photo-1721277282389-bdf28a88cdff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            listItems: [
                t1("ideaPassOneLiOne"), t1("ideaPassOneLiTwo"), t1("ideaPassOneLiThree")
            ]
        },
        {
            title: t1("ideaPassTwo"),
            img: "https://images.unsplash.com/photo-1481988535861-271139e06469?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            listItems: [
                t1("ideaPassTwoLiOne"), t1("ideaPassTwoLiTwo"), t1("ideaPassTwoThree")
            ]
        },
        {
            title: t1("ideaPassThree"),
            img: "https://images.unsplash.com/photo-1512649408904-c0a00fb810da?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            listItems: [
                t1("ideaPassThreeOne"), t1("ideaPassThreeTwo"), t1("ideaPassThreeThree")
            ]
        }
    ]

    return (
        <>
            <header>
                <HeaderCards cards={headerCards} images={headerImages} heading="City Pass" subHeading={t1("heading")} />

            </header>

            <Section className="md:my-40 my-0 p-10 md:p-0">

                <Carrousel title={t1("activitesTitle")} description={t1("activitiesDescription")} items={allActivities} />
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
                        {t1("services")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
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
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <h3 className="font-semibold mb-2 text-center text-gray-600">{item.title}</h3>
                        </motion.div>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 mt-10 max-w-6xl mx-auto lg:grid-cols-4 gap-10">
                    {benefits.map((b, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.35,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            className="group p-6 rounded-2xl bg-white  shadow-xl hover:scale-[1.03] transition-transform duration-300">
                            <h3 className="font-bold text-primary text-xl mb-2 flex items-center justify-center gap-2">{b.icon} {b.title}</h3>
                            <p className="opacity-90 text-gray-600 group-hover:opacity-100 transition-opacity text-center">
                                {b.description}
                            </p>
                        </motion.div>
                    ))}

                </div>

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
                        {t1("ideasTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>

                <div className={'mt-15'}>
                    <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
                    <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
                            {ideas.map((item, index) => (
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
                                    className="group max-w-70 bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl">

                                    <div className="relative w-full h-56">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col  justify-center items-center ">
                                        <h3 className="text-xl text-primary text-center font-semibold mb-2 h-12 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <ul>
                                            {item.listItems.map((li, i) => (
                                                <li className="text-gray-600 mb-2" key={i}>
                                                    • {li}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </Section >



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
                        {t1("optionsTitle")}
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
                                        {i == 1 && (<div className="text-center text-white bg-secondary-foreground p-1">{t1("popular")}</div>)}
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

                                                <span className="text-primary text-xl ">{p.priceAdults}€</span><span>{t1("adults")}</span>
                                            </div>
                                            <div className="flex gap-8 text-black justify-center items-center ">

                                                <span className="text-primary text-xl ">{p.priceChildren}€</span><span>{t1("children")}</span>
                                            </div>
                                        </div>

                                        <AnimatedLink href="http://linkedin.com/in/louis-leca" text={t1("buyButton")} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </Section>

            <Section className="md:my-30 my-0 p-10 md:p-0">

                <OneCard title={t1("how")} image={"/images/headlines/citypass.jpg"} ol={howItems} large={true} />
            </Section >

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
                        {t1("testimonialsTitle")}
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
export default CityPassPage