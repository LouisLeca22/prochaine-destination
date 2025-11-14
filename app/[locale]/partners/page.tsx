"use client"

import { ContactForm } from "@/components/Home/Contact"
import CountUp from "@/components/ui/CountUp"
import { DoubleCards } from "@/components/ui/DoubleCards"
import Headband from "@/components/ui/HeadBand"
import HeaderPolygon from "@/components/ui/HeaderPolygon"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { useIsMobile } from "@/hooks/use-mobile"
import { useScopedI18n } from "@/locales/client"
import { motion } from "framer-motion"
import { CalendarDays, ChartLine, HeartHandshake, Info, Megaphone, Sprout } from "lucide-react"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


function PartnersPage() {
    const t1 = useScopedI18n("Pro")
    const t2 = useScopedI18n("Components")

    const isMobile = useIsMobile()

    const headerImages = [
        "https://images.unsplash.com/photo-1713947506934-c0b6519e069d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg",
        "https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg"
    ]

    const missions = [
        {
            icon: <Megaphone className="w-8 h-8 text-primary" />,
            title: t1("promotionTitle"),
            description: t1("promotionDescription"),
            img: "https://images.pexels.com/photos/8638300/pexels-photo-8638300.jpeg",
            alt: t1("promotionTitle"),
        },
        {
            icon: <HeartHandshake className="w-8 h-8 text-primary" />,
            title: t1("supportTitle"),
            description: t1("supportDescription"),
            img: "https://images.pexels.com/photos/2977567/pexels-photo-2977567.jpeg",
            alt: t1("supportTitle"),
        },
        {
            icon: <CalendarDays className="w-8 h-8 text-primary" />,
            title: t1("coordinationTitle"),
            description: t1("coordinationDescription"),
            img: "https://images.pexels.com/photos/6147381/pexels-photo-6147381.jpeg",
            alt: t1("coordinationTitle"),
        },
        {
            icon: <Sprout className="w-8 h-8 text-primary" />,
            title: t1("sustainableTitle"),
            description: t1("sustainableDescription"),
            img: "https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg",
            alt: t1("sustainableTitle"),
        },
        {
            icon: <ChartLine className="w-8 h-8 text-primary" />,
            title: t1("dataTitle"),
            description: t1("dataDescription"),
            img: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg",
            alt: t1("dataTitle"),
        },
        {
            icon: <Info className="w-8 h-8 text-primary" />,
            title: t1("informationTitle"),
            description: t1("informationDescription"),
            img: "https://images.pexels.com/photos/7792770/pexels-photo-7792770.jpeg",
            alt: t1("informationTitle"),
        },
    ];

    const resources = [
        {
            title: t1("comKitTitle"),
            description: t1("comKitDescription"),
            buttonLabel: t2("download"),
            image: "/images/partners/toolkit.png",
            alt: t1("comKitTitle"),
            href: 'http://linkedin.com/in/louis-leca',
        },
        {
            title: t1("dataTitle"),
            description: t1("dataDescription"),
            buttonLabel: t2("see"),
            image: "/images/partners/data.png",
            alt: t1("dataTitle"),
            href: 'http://linkedin.com/in/louis-leca',

        },
        {
            title: t1("digitalTitle"),
            description: t1("digitalDescription"),
            buttonLabel: t2("access"),
            image: "/images/partners/digital.png",
            alt: t1("digitalTitle"),
            href: 'http://linkedin.com/in/louis-leca',
        },
    ];

    const testimonials = [
        {
            name: "Nesrine Hadji",
            role: t1("personOneRole"),
            testimony: t1("personOneTestimony"),
            image: "/images/partners/person1.jpg"
        },
        {
            name: "Thomas Anders",
            role: t1("personTwoRole"),
            testimony: t1("personTwoTestimony"),
            image: "/images/partners/person2.jpg"
        },
        {
            name: "Leona Hernandez",
            role: t1("personThreeRole"),
            testimony: t1("personThreeTestimony"),
            image: "/images/partners/person3.jpg"
        },
        {
            name: "Marc Delacourt",
            role: t1("personFourRole"),
            testimony: t1("personFourTestimony"),
            image: "/images/partners/person4.jpg"
        },
        {
            name: "Hawa Mendije",
            role: t1("personFiveRole"),
            testimony: t1("personFiveTestimony"),
            image: "/images/partners/person5.jpg"
        },
        {
            name: "Ilona Moretti",
            role: t1("personSixRole"),
            testimony: t1("personSixTestimony"),
            image: "/images/partners/person6.jpg"
        }
    ]

    return (
        <>
            <header>
                <HeaderPolygon heading={t1("heading")} images={headerImages} />
                <motion.div
                    className="mt-20 flex max-w-xl mx-auto flex-col justify-center items-center text-center gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl underline-secondary">{t1("subHeading")}</h3>
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
                                <CountUp startWhen={true} from={0} to={300} />
                            </p>
                            <p>{t1("partners")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold  mb-2 text-primary">
                                <CountUp from={0} to={60} />
                            </p>
                            <p>{t1("eductours")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold mb-2 text-primary">
                                <CountUp from={0} to={40} />
                            </p>
                            <p>{t1("formation")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold text-primary mb-2">
                                <CountUp from={0} to={240} />
                            </p>
                            <p>{t1("labelled")}</p>
                        </div>
                    </div>

                </div>
            </Section>

            <Section className="my-20  md:p-0">
                <div className="max-w-6xl mx-auto flex items-center flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("missionsTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="bg-linear-to-br from-primary to-primary-foreground py-5 mt-10">

                    <div className="md:max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {missions.map((mission, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.25,
                                        ease: [0.25, 0.1, 0.25, 1],
                                    }}
                                >
                                    <div className="relative w-full h-40">
                                        <Image
                                            src={mission.img}
                                            alt={mission.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-primary flex gap-4 justify-center items-center mb-3">
                                            {mission.icon} {mission.title}
                                        </h3>
                                        <p className="text-center text-gray-600">{mission.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </Section>

            <Section className="md:my-30">
                <DoubleCards
                    title={t1("coachingTitle")}
                    description={t1("coachingDescription")}
                    images={[
                        "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    ]}
                    smallTitle={true}
                />
            </Section>

            <Section className="my-20  md:p-0">
                <div className="max-w-6xl mx-auto flex items-center sm:items-start flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("joinTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="mt-15">

                    <Headband
                        bandText={t1("joinDescription")}
                        bandLisItems={[
                            t1("joinLiOne"),
                            t1("joinLiTwo"),
                            t1("joinLiThree"),
                            t1("joinLiFour")
                        ]}
                        image="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        buttonText={t1("joinButton")}
                        buttonLink="http://www.linkedin.com/in/louis-leca"
                    />
                </div>
            </Section>


            <Section className="my-20 p-10">
                <div className="max-w-6xl mx-auto flex items-center flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("toolsTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>

                <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                            <h3 className="font-semibold mb-2 text-primary">{item.title}</h3>
                            <p className="grow text-gray-600">{item.description}</p>

                            <a
                                href={item.href}
                                className="mt-4 inline-block text-center py-2 bg-secondary text-primary-foreground hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition"
                            >
                                {item.buttonLabel}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </Section>


            <Section className="sm:my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center md:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
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
                                            <p className="text-sm text-primary mb-4">{item.role}</p>
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


            <Section className="sm:my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=100%"
                        scrollEnd="bottom bottom-=5%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("contactTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <div className="container mx-auto mt-5 max-w-6xl ">
                        <p className="md:text-2xl font-josefin-sans text-center">{t1("contactDescription")}</p>
                        <div className="flex md:flex-row flex-col mt-10">
                            <ContactForm />
                            <img src="/images/partners/partners.svg" className="w-[40%] md:block hidden " />
                        </div>
                    </div>
                </div>
            </Section>

        </>
    )
}
export default PartnersPage