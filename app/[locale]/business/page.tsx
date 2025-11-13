"use client"

import { ContactForm } from "@/components/Home/Contact"
import CountUp from "@/components/ui/CountUp"
import HeaderPolygon from "@/components/ui/HeaderPolygon"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import SocialMasonry from "@/components/ui/SocialMasonry"
import { useScopedI18n } from "@/locales/client"
import { motion } from "framer-motion"
import { HandHelping, HeartPlus, Hotel, Linkedin, Sparkles, TrainFront } from "lucide-react"
import Image from "next/image"

function BusinessPage() {
    const t1 = useScopedI18n("Business")
    const t2 = useScopedI18n("Components")

    const headerImages = [
        "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg",
        "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg"
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
                                <CountUp startWhen={true} from={0} to={120} />+
                            </p>
                            <p>{t1("eventsYear")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold  mb-2 text-primary">
                                <CountUp from={0} to={15} />K
                            </p>
                            <p>{t1("participants")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold mb-2 text-primary">
                                <CountUp from={0} to={25} />
                            </p>
                            <p>{t1("equipments")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold text-primary mb-2">
                                <CountUp from={0} to={15} />
                            </p>
                            <p>{t1("hotels")}</p>
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
                        {t1("whyTitle")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                icon: <TrainFront className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1689907076141-f1094bc743f7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title: t1("accessibilityTitle"),
                                desc: t1("accessibilityDescription"),
                            },
                            {
                                icon: <Sparkles className="w-6 h-6" />,
                                img: "https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg",
                                title: t1("settingTitle"),
                                desc: t1("settingDescription"),
                            },
                            {
                                icon: <Hotel className="w-6 h-6" />,
                                img: "https://images.unsplash.com/photo-1588865198054-c83788106132?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                title: t1("infrastructureTitle"),
                                desc: t1("infrastructureDescription"),
                            },
                            {
                                icon: <HandHelping className="w-6 h-6" />,
                                img: "https://images.pexels.com/photos/8171204/pexels-photo-8171204.jpeg",
                                title: t1("supportTitle"),
                                desc: t1("supportDescription"),
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

            <Section className="my-20 p-10 md:p-0">
                <div className=" max-w-6xl mx-auto flex flex-center flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("linkedIn")}
                    </ScrollFloat>
                    <Separator width="w-48 mb-20 " />
                </div>
                <SocialMasonry
                    title={t2("followUs")}
                    images={[
                        "https://images.pexels.com/photos/10041266/pexels-photo-10041266.jpeg",
                        "https://images.unsplash.com/photo-1599592187465-6dc742367282?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1612359383347-245649cbb9d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1524733214610-fbe17dc08a54?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    ]}
                    socialLinks={[
                        { label: "LinkedIn", icon: <Linkedin size={28} />, href: "http://linkedin.com" },
                    ]}
                    hideOnMobile

                />
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
                        {t1("contactBusiness")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <div className="container mx-auto mt-5 max-w-6xl ">
                        <p className="md:text-2xl font-josefin-sans text-center">{t1("contactDescription")}</p>
                        <div className="flex md:flex-row flex-col mt-10">
                            <ContactForm />
                            <img src="/images/business/business.svg" className="w-[40%] md:block hidden " />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}
export default BusinessPage